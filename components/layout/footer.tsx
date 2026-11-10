import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">T</span><span>TAEND<span className="brand-period">.</span></span>
          </Link>
          <p>Temukan produk pilihanmu, belanja dengan mudah.</p>
        </div>
        <div className="footer-links">
          <Link href="/produk">Semua Produk</Link>
          <Link href="/tentang">Tentang TAEND</Link>
          <Link href="/kontak">Kontak</Link>
          <a href="https://wa.me/6282165713526" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} TAEND. Seluruh hak cipta dilindungi.</div>
      </div>
    </footer>
  );
}
