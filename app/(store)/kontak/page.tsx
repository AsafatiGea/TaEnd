export default function ContactPage() {
  return (
    <div className="container">
      <header className="page-heading"><span className="eyebrow">Kami siap membantu</span><h1>Kontak TAEND</h1><p>Untuk pertanyaan tentang produk dan pemesanan, silakan hubungi kami.</p></header>
      <div className="panel" style={{ maxWidth: 650 }}>
        <span className="eyebrow">WhatsApp</span>
        <h2>Hubungi pemilik toko</h2>
        <p className="muted">Nomor: +62 821-6571-3526</p>
        <a className="button button-primary" href="https://wa.me/6282165713526" target="_blank" rel="noreferrer">Buka WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}