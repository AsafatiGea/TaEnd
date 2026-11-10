# TAEND

Toko online single-vendor berbasis Next.js. Katalog berada di sisi lokal, keranjang disimpan di browser, dan pesanan disiapkan untuk dikirim melalui WhatsApp pemilik toko.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka http://localhost:3000 untuk melihat situs.

## Mengelola katalog

Edit `data/products.ts` untuk menambahkan, mengubah, atau menghapus produk. Setiap produk memiliki ID, nama, slug, deskripsi, harga, kategori, URL gambar, stok, ketersediaan, dan penanda demo. Nilai `discountPrice` bersifat opsional. Harga ditulis sebagai angka Rupiah tanpa pemisah.

Data produk yang disertakan saat ini adalah **data demo**, bukan produk asli TAEND. Ganti informasi demo dan pastikan foto, harga, serta stok benar sebelum mempublikasikan toko. Gambar demo menggunakan URL Unsplash; produk baru dapat memakai URL gambar sendiri atau placeholder lokal.

## Keranjang dan pemesanan

Keranjang disimpan pada `localStorage` browser. Checkout membuka WhatsApp pemilik toko di nomor +62 821-6571-3526 dengan rincian produk, jumlah, harga, subtotal, nama, alamat, dan catatan. Ongkos kirim belum dihitung dan dikonfirmasi melalui WhatsApp. Tidak ada database atau pencatatan pesanan otomatis.

## Rute utama

- `/` — Beranda
- `/produk` — Semua produk, pencarian, filter kategori, dan pengurutan
- `/kategori` — Daftar kategori
- `/produk/[slug]` — Detail produk
- `/keranjang` — Keranjang belanja
- `/checkout` — Checkout WhatsApp
- `/tentang` dan `/kontak` — Informasi TAEND

Project dapat dibangun untuk deployment Vercel dengan `npm run build`.