"use client";

import { useMemo, useState } from "react";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/store/product-card";

export default function ProductCatalog({ initialCategory = "" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("recommended");
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");
    const filtered = products.filter((product) => {
      const matchesCategory = !category || product.categorySlug === category;
      const matchesQuery = !normalizedQuery || `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase("id-ID").includes(normalizedQuery);
      return product.available && matchesCategory && matchesQuery;
    });
    if (sort === "price-low") return [...filtered].sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
    if (sort === "price-high") return [...filtered].sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
    if (sort === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "id"));
    return filtered;
  }, [query, category, sort]);

  return (
    <>
      <div className="catalog-controls" aria-label="Filter produk">
        <input className="field" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama atau kategori produk..." aria-label="Cari produk" />
        <select className="select-field" value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Pilih kategori">
          <option value="">Semua kategori</option>
          {categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
        <select className="select-field" value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Urutkan produk">
          <option value="recommended">Urutan rekomendasi</option>
          <option value="price-low">Harga terendah</option>
          <option value="price-high">Harga tertinggi</option>
          <option value="name">Nama produk</option>
        </select>
      </div>
      {results.length ? (
        <div className="product-grid">{results.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      ) : (
        <div className="empty-state">Produk tidak ditemukan. Coba kata kunci atau kategori lain.</div>
      )}
    </>
  );
}