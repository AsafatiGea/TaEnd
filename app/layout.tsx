import "./globals.css";

export const metadata = {
  title: "TAEND — Toko Pilihan untuk Kebutuhanmu",
  description: "Belanja berbagai produk pilihan dengan mudah dan praktis melalui TAEND.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
