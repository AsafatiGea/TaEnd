"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/store/cart-provider";
import { getProductPrice, type Product } from "@/data/products";
import { formatRupiah } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const price = getProductPrice(product);

  return (
    <article className="product-card">
      <Link className="product-image-wrap" href={`/produk/${product.slug}`}>
        <Image className="product-image" src={product.imageUrl} alt={product.name} width={600} height={600} unoptimized />
        {product.isDemo && <span className="demo-chip">Produk demo</span>}
      </Link>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link className="product-name" href={`/produk/${product.slug}`}>{product.name}</Link>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom">
          <div>
            <div className="product-price">{formatRupiah(price)}</div>
            {product.discountPrice && <div className="product-old-price">{formatRupiah(product.price)}</div>}
          </div>
          <button
            className="icon-button"
            type="button"
            title="Tambah ke keranjang"
            aria-label={`Tambah ${product.name} ke keranjang`}
            disabled={!product.available || product.stock < 1}
            onClick={() => addItem(product)}
          >+</button>
        </div>
      </div>
    </article>
  );
}