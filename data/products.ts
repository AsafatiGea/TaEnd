export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  categorySlug: string;
  imageUrl: string;
  stock: number;
  available: boolean;
  isDemo: boolean;
};

// Katalog awal ini hanya berisi data demo. Ganti atau hapus sebelum toko dipublikasikan.
// Tambahkan produk dengan mengikuti bentuk Product di atas; harga ditulis dalam Rupiah.
export const products: Product[] = [
  {
    id: "demo-001",
    name: "Sepatu Kasual Urban",
    slug: "sepatu-kasual-urban",
    description: "Contoh produk demo dengan desain sederhana untuk aktivitas sehari-hari.",
    price: 425000,
    discountPrice: 359000,
    category: "Fashion",
    categorySlug: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 12,
    available: true,
    isDemo: true,
  },
  {
    id: "demo-002",
    name: "Jam Tangan Minimalis",
    slug: "jam-tangan-minimalis",
    description: "Contoh produk demo dengan tampilan minimalis dan mudah dipadukan.",
    price: 680000,
    category: "Aksesori",
    categorySlug: "aksesori",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    stock: 8,
    available: true,
    isDemo: true,
  },
  {
    id: "demo-003",
    name: "Tas Harian Serbaguna",
    slug: "tas-harian-serbaguna",
    description: "Contoh produk demo berupa tas serbaguna untuk menemani kegiatan harian.",
    price: 295000,
    category: "Fashion",
    categorySlug: "fashion",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    stock: 15,
    available: true,
    isDemo: true,
  },
  {
    id: "demo-004",
    name: "Headphone Nirkabel",
    slug: "headphone-nirkabel",
    description: "Contoh produk demo aksesori audio untuk bekerja dan bersantai.",
    price: 790000,
    discountPrice: 699000,
    category: "Elektronik",
    categorySlug: "elektronik",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    stock: 6,
    available: true,
    isDemo: true,
  },
  {
    id: "demo-005",
    name: "Pewangi Ruangan",
    slug: "pewangi-ruangan",
    description: "Contoh produk demo untuk memberi nuansa nyaman pada ruangan.",
    price: 145000,
    category: "Rumah & Gaya Hidup",
    categorySlug: "rumah-gaya-hidup",
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    stock: 20,
    available: true,
    isDemo: true,
  },
  {
    id: "demo-006",
    name: "Kacamata Gaya Klasik",
    slug: "kacamata-gaya-klasik",
    description: "Contoh produk demo aksesori dengan bentuk klasik dan serbaguna.",
    price: 235000,
    category: "Aksesori",
    categorySlug: "aksesori",
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    stock: 10,
    available: true,
    isDemo: true,
  },
];

export const categories = Array.from(
  new Map(products.map((product) => [product.categorySlug, { name: product.category, slug: product.categorySlug }])).values(),
);

export function getProductPrice(product: Product) {
  return product.discountPrice ?? product.price;
}