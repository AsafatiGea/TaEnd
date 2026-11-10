"use client";

import Link from "next/link";
import { useCart } from "@/components/store/cart-provider";
import type { Product } from "@/data/products";

export default function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <div className="hero-actions">
      <button className="button button-primary" type="button" disabled={!product.available || product.stock < 1} onClick={() => addItem(product)}>
        Tambah ke Keranjang
      </button>
      <Link className="button button-secondary" href="/keranjang">Lihat Keranjang</Link>
    </div>
  );
}