import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-heading"><span className="eyebrow">Cerita kami</span><h1>Tentang TAEND</h1><p>Ruang belanja yang mengutamakan kemudahan dan komunikasi langsung.</p></header>
      <article className="prose">
        <p>TAEND adalah toko online milik satu penjual. Kami ingin membantu pelanggan menemukan produk pilihan dan melakukan pemesanan dengan cara yang sederhana.</p>
        <h2>Belanja yang praktis</h2>
        <p>Jelajahi katalog, masukkan produk ke keranjang, lalu kirim detail pesanan melalui WhatsApp. Sebelum mengirim, pelanggan dapat memeriksa kembali produk, jumlah, alamat, dan catatan pesanan.</p>
        <h2>Katalog TAEND</h2>
        <p>Produk yang saat ini tampil di situs adalah data demo untuk keperluan pengembangan. Informasi produk asli akan ditambahkan ke katalog sebelum toko diluncurkan.</p>
      </article>
      <div className="contact-card"><div><span className="eyebrow">Butuh bantuan?</span><h2>Hubungi TAEND</h2><p className="muted">Tanyakan produk atau detail pesanan melalui WhatsApp.</p></div><Link className="button button-primary" href="/kontak">Informasi Kontak</Link></div>
    </div>
  );
}