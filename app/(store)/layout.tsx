import SiteFooter from "@/components/layout/footer";
import SiteHeader from "@/components/layout/navbar";
import { CartProvider } from "@/components/store/cart-provider";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="site-shell">
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </div>
    </CartProvider>
  );
}