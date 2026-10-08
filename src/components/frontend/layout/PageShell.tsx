import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyWhatsApp } from "./StickyWhatsApp";
import { getWhatsAppUrl } from "@/lib/cms";

export async function PageShell({ children }: { children: React.ReactNode }) {
  const whatsappUrl = await getWhatsAppUrl();
  return (
    <>
      <Navbar whatsappUrl={whatsappUrl} />
      <main>{children}</main>
      <Footer whatsappUrl={whatsappUrl} />
      <StickyWhatsApp whatsappUrl={whatsappUrl} />
    </>
  );
}
