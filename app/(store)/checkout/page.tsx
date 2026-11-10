"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "@/components/store/cart-provider";
import { getProductPrice } from "@/data/products";
import { formatRupiah } from "@/lib/utils";

const WHATSAPP_NUMBER = "6282165713526";

export default function CheckoutPage() {
  const { items, subtotal, hydrated } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length) return;
    const lines = items.map(({ product, quantity }) =>
      `- ${product.name}\n  ${quantity} x ${formatRupiah(getProductPrice(product))} = ${formatRupiah(getProductPrice(product) * quantity)}`,
    );
    const message = [
      "Halo TAEND, saya ingin memesan:",
      "",
      ...lines,
      "",
      `Subtotal: ${formatRupiah(subtotal)}`,
      `Total pesanan sementara (belum termasuk ongkir): ${formatRupiah(subtotal)}`,
      "Ongkos kirim: mohon konfirmasi.",
      "",
      `Nama: ${customerName.trim()}`,
      `Alamat pengiriman: ${address.trim()}`,
      `Catatan: ${note.trim() || "-"}`,
      "",
      "Mohon konfirmasi ketersediaan produk dan rincian pengiriman. Terima kasih.",
    ].join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  if (!hydrated) return <div className="container page-heading"><p className="muted">Memuat ringkasan...</p></div>;
  if (!items.length) {
    return (
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow">Checkout</span>
          <h1>Keranjang kosong</h1>
          <p>Tambahkan produk sebelum membuat pesanan WhatsApp.</p>
          <Link className="button button-primary" href="/produk">Jelajahi Produk</Link>
        </header>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="page-heading">
        <span className="eyebrow">Satu langkah lagi</span>
        <h1>Checkout</h1>
        <p>Isi detail penerima. Pesanan akan disiapkan sebagai pesan WhatsApp untuk diperiksa sebelum dikirim.</p>
      </header>
      <div className="split-layout">
        <form className="panel form-stack" onSubmit={handleSubmit}>
          <h2>Informasi Pengiriman</h2>
          <label>Nama pelanggan<input className="field" required autoComplete="name" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Nama lengkap" /></label>
          <label>Alamat pengiriman<textarea className="textarea-field" required autoComplete="street-address" value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Alamat lengkap, kecamatan, kota, dan kode pos" /></label>
          <label>Catatan tambahan <span className="muted">(opsional)</span><textarea className="textarea-field" value={note} onChange={(event) => setNote(event.target.value)} placeholder="Warna, ukuran, atau instruksi pengiriman" /></label>
          <p className="checkout-note">Menekan tombol akan membuka WhatsApp dengan detail pesanan yang telah diisi. Pesanan belum tersimpan atau terkirim sampai kamu mengirim pesannya di WhatsApp.</p>
          <button className="button button-primary" type="submit">Lanjutkan ke WhatsApp <span aria-hidden="true">↗</span></button>
        </form>
        <aside className="panel">
          <h2>Ringkasan Pesanan</h2>
          {items.map(({ product, quantity }) => (
            <div className="summary-line" key={product.id}>
              <span>{product.name} × {quantity}</span>
              <span>{formatRupiah(getProductPrice(product) * quantity)}</span>
            </div>
          ))}
          <div className="summary-line"><span>Subtotal</span><span>{formatRupiah(subtotal)}</span></div>
          <div className="summary-line"><span>Ongkos kirim</span><span>Dikonfirmasi via WhatsApp</span></div>
          <div className="summary-line summary-total"><span>Total sementara</span><span>{formatRupiah(subtotal)}</span></div>
          <p className="checkout-note">Total belum termasuk ongkos kirim. Nomor tujuan WhatsApp TAEND: +62 821-6571-3526.</p>
          <Link className="text-link" href="/keranjang">← Kembali ke keranjang</Link>
        </aside>
      </div>
    </div>
  );
}