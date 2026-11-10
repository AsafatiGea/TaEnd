import Link from "next/link";
import ProductCard from "@/components/store/product-card";
import { categories, products } from "@/data/products";

const categorySymbols = ["✳", "◈", "⌂", "◇", "○", "✦"];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Pilihan sederhana, belanja nyaman</span>
          <h1>Temukan <em>Produk</em><br />Pilihanmu</h1>
          <p className="hero-copy">Belanja berbagai kebutuhan dengan mudah dan praktis melalui TAEND. Pilih produk favoritmu, lalu lanjutkan pemesanan langsung melalui WhatsApp.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/produk">Jelajahi Produk <span aria-hidden="true">→</span></Link>
            <Link className="button button-secondary" href="/tentang">Kenali TAEND</Link>
          </div>
          <div className="demo-notice" role="note">Katalog saat ini berisi produk contoh untuk demo. Data produk, foto, harga, dan stok perlu diganti di file data sebelum toko dipublikasikan.</div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div><span className="eyebrow">Jelajahi pilihan</span><h2>Belanja berdasarkan kategori</h2></div>
          <Link className="text-link" href="/kategori">Lihat semua kategori →</Link>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className="category-tile" href={`/kategori/${category.slug}`} key={category.slug}>
              <span className="category-symbol" aria-hidden="true">{categorySymbols[index % categorySymbols.length]}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div><span className="eyebrow">Koleksi TAEND</span><h2>Produk pilihan</h2></div>
          <Link className="text-link" href="/produk">Lihat semua produk →</Link>
        </div>
        <div className="product-grid">
          {products.filter((product) => product.available).slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}