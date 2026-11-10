import Link from "next/link";
import { categories, products } from "@/data/products";

export default function CategoriesPage() {
  return (
    <div className="container">
      <header className="page-heading">
        <span className="eyebrow">Temukan lebih mudah</span>
        <h1>Kategori Produk</h1>
        <p>Pilih kategori untuk melihat koleksi produk yang tersedia.</p>
      </header>
      <div className="demo-notice" role="note">Kategori berikut mengikuti katalog demo. Atur kategori produk pada data/products.ts.</div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link className="category-tile" href={`/kategori/${category.slug}`} key={category.slug}>
            <span className="category-symbol" aria-hidden="true">{["✳", "◈", "⌂", "◇", "○", "✦"][index % 6]}</span>
            <span>{category.name} <small className="muted">· {products.filter((product) => product.categorySlug === category.slug).length} produk demo</small></span>
          </Link>
        ))}
      </div>
    </div>
  );
}