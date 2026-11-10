import { notFound } from "next/navigation";
import Image from "next/image";
import ProductActions from "@/components/store/product-actions";
import { products, getProductPrice } from "@/data/products";
import { formatRupiah } from "@/lib/utils";

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug && item.available);
  if (!product) notFound();

  return (
    <div className="container">
      <div className="product-detail">
        <Image className="detail-image" src={product.imageUrl} alt={product.name} width={1000} height={1000} unoptimized priority />
        <div className="detail-copy">
          <span className="eyebrow">{product.category}{product.isDemo ? " · Produk demo" : ""}</span>
          <h1>{product.name}</h1>
          <p className="prose">{product.description}</p>
          <p className="detail-price">{formatRupiah(getProductPrice(product))}</p>
          {product.discountPrice && <p className="product-old-price">Harga normal {formatRupiah(product.price)}</p>}
          <p className="muted">Stok demo: {product.stock} unit</p>
          <ProductActions product={product} />
          {product.isDemo && <p className="checkout-note">Informasi produk ini hanya untuk demo dan belum mewakili produk, harga, atau stok asli.</p>}
        </div>
      </div>
    </div>
  );
}