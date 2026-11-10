"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProductPrice, products, type Product } from "@/data/products";

type CartItem = { product: Product; quantity: number };
type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  hydrated: boolean;
  addItem: (product: Product, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "taend-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      let restoredItems: CartItem[] = [];
      
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          restoredItems = parsed.flatMap((entry): CartItem[] => {
            if (!entry || typeof entry.id !== "string" || typeof entry.quantity !== "number") return [];
            const product = products.find((candidate) => candidate.id === entry.id && candidate.available);
            if (!product || !Number.isFinite(entry.quantity) || entry.quantity < 1) return [];
            return [{ product, quantity: Math.min(Math.floor(entry.quantity), product.stock) }];
          });
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }

      if (!cancelled) {
        setItems(restoredItems);
        setHydrated(true);
      }
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.map(({ product, quantity }) => ({ id: product.id, quantity }))));
  }, [hydrated, items]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    if (!product.available || product.stock < 1) return;
    setItems((current) => {
      const found = current.find((item) => item.product.id === product.id);
      if (!found) return [...current, { product, quantity: Math.min(quantity, product.stock) }];
      return current.map((item) => item.product.id === product.id
        ? { product, quantity: Math.min(item.quantity + quantity, product.stock) }
        : item);
    });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setItems((current) => current.flatMap((item) => {
      if (item.product.id !== productId) return [item];
      if (quantity < 1) return [];
      return [{ ...item, quantity: Math.min(Math.floor(quantity), item.product.stock) }];
    }));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.product.id !== productId));
  }, []);
  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + getProductPrice(item.product) * item.quantity, 0),
    hydrated,
    addItem,
    setQuantity,
    removeItem,
    clearCart,
  }), [items, hydrated, addItem, setQuantity, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart harus digunakan di dalam CartProvider.");
  return context;
}