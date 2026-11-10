"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/store/cart-provider";
import { formatRupiah } from "@/lib/utils";
import { getProductPrice } from "@/data/products";

export default function CartPage() {
  const { items, subtotal, setQuantity, removeItem, hydrated } = useCart();

  if (!hydrated) return <div className="container page-heading"><p className="muted">Memuat keranjang...</p></div>;

  return (
    <div className="container">
      <header className="page-heading"><span className="eyebrow">Pilihanmu</span><h1>Keranjang Belanja</h1><p>Periksa produk sebelum melanjutkan pemesanan.</p></header>
      {!items.length ? (
        <div className="empty-state">
          <p>Keranjangmu masih kosong.</p>
          <Link className="button button-primary" href="/produk">Jelajahi Produk</Link>
        </div>
      ) : (
        <div className="split-layout">
          <section className="panel" aria-label="Produk dalam keranjang">
            {items.map(({ product, quantity }) => (
              <div className="cart-row" key={product.id}>
                <Image className="cart-thumb" src={product.imageUrl} alt="" width={164} height={164} unoptimized />
                <div>
                  <Link className="product-name" href={`/produk/${product.slug}`}>{product.name}</Link>
                  <div className="muted">{formatRupiah(getProductPrice(product))} / produk</div>
                  <div className="quantity-control" aria-label={`Jumlah ${product.name}`}>
                    <button type="button" aria-label="Kurangi jumlah" onClick={() => setQuantity(product.id, quantity - 1)}>−</button>
                    <span>{quantity}</span>
                    <button type="button" aria-label="Tambah jumlah" disabled={quantity >= product.stock} onClick={() => setQuantity(product.id, quantity + 1)}>+</button>
                  </div>
                </div>
                <div>
                  <strong>{formatRupiah(getProductPrice(product) * quantity)}</strong>
                  <button className="text-link" style={{ display: "block", border: 0, background: "none", cursor: "pointer", padding: "8px 0" }} type="button" onClick={() => removeItem(product.id)}>Hapus</button>
                </div>
              </div>
            ))}
          </section>
          <aside className="panel">
            <h2>Ringkasan Pesanan</h2>
            <div className="summary-line"><span>Jumlah produk</span><span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
            <div className="summary-line"><span>Subtotal</span><span>{formatRupiah(subtotal)}</span></div>
            <div className="summary-line"><span>Pengiriman</span><span>Dikonfirmasi via WhatsApp</span></div>
            <div className="summary-line summary-total"><span>Total sementara</span><span>{formatRupiah(subtotal)}</span></div>
            <p className="checkout-note">Total sementara belum termasuk ongkos kirim. Detail pengiriman dikonfirmasi melalui WhatsApp.</p>
            <Link className="button button-primary" style={{ width: "100%", marginTop: 16 }} href="/checkout">Lanjut ke Checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}