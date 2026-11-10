import { notFound } from "next/navigation";
import ProductCatalog from "@/components/store/product-catalog";
import { categories } from "@/data/products";

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();

  return (
    <div className="container">
      <header className="page-heading">
        <span className="eyebrow">Kategori TAEND</span>
        <h1>{category.name}</h1>
        <p>Produk dalam kategori {category.name}.</p>
      </header>
      <div className="demo-notice" role="note">Katalog yang ditampilkan masih berupa data demo.</div>
      <ProductCatalog initialCategory={category.slug} />
    </div>
  );
}