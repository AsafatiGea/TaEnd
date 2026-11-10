"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/store/cart-provider";

const navigation = [
  { href: "/", label: "Beranda" },
  { href: "/produk", label: "Semua Produk" },
  { href: "/kategori", label: "Kategori" },
  { href: "/tentang", label: "Tentang TAEND" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="TAEND, beranda">
          <span className="brand-mark">T</span>
          <span>TAEND<span className="brand-period">.</span></span>
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="cart-link" href="/keranjang" onClick={() => setMenuOpen(false)}>
            Keranjang
            <span className="cart-count" aria-label={`${itemCount} produk di keranjang`}>
              {itemCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
