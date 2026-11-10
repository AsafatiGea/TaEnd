import ProductCatalog from "@/components/store/product-catalog";

export default function ProductsPage() {
  return (
    <div className="container">
      <header className="page-heading">
        <span className="eyebrow">Katalog TAEND</span>
        <h1>Semua Produk</h1>
        <p>Temukan produk yang sesuai dengan kebutuhanmu.</p>
      </header>
      <div className="demo-notice" role="note">Produk yang tampil masih data demo, bukan daftar produk asli TAEND. Silakan ganti data di data/products.ts sebelum menerima pesanan.</div>
      <ProductCatalog />
    </div>
  );
}