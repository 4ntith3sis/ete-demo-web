import type { Metadata } from "next";
import { PageShell } from "@/components/frontend/layout/PageShell";
import { AboutHero } from "@/components/frontend/about/AboutHero";
import { RatingStats } from "@/components/frontend/shared/RatingStats";
import { ServiceGrid } from "@/components/frontend/service/ServiceGrid";
import { ServiceAdvantages } from "@/components/frontend/service/ServiceAdvantages";
import {
  ClientsMarquee,
  HowItWorks,
  IndonesiaBanner,
  MediaTrust,
  Testimonials,
} from "@/components/frontend/homepage";
import { getServices } from "@/lib/services/getServices";
import { getTestimonials, getClientLogos, getWhatsAppUrl } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Layanan Perpajakan & Akuntansi | EasyTax",
  description: "Layanan perpajakan dan akuntansi EasyTax.",
};

export const revalidate = 60;
export default async function ServicesPage() {
  const [services, testimonials, clients, whatsappUrl] = await Promise.all([
    getServices(),
    getTestimonials(),
    getClientLogos(),
    getWhatsAppUrl(),
  ]);

  return (
    <PageShell>
      <AboutHero
        crumbs={[{ label: "Beranda", href: "/" }, { label: "Layanan" }]}
        badge="Layanan EasyTax — Konsultan Pajak & Akuntansi"
        title={
          <>
            Solusi Lengkap Perpajakan &amp; <span>Finansial untuk Bisnis Anda</span>
          </>
        }
        description="Mulai dari pelaporan SPT tahunan, pembukuan bulanan, hingga pendampingan audit dan pengurusan PKP. Dikelola langsung oleh konsultan pajak berizin resmi (BKP) dan berpengalaman menangani berbagai industri di Indonesia."
        secondaryCtaLabel="Eksplorasi Layanan"
        secondaryCtaHref="#katalog-layanan"
        trustItems={["13.000+ Klien Terlayani", "Konsultan Berizin Resmi"]}
        imageSrc="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Layanan Konsultan Pajak EasyTax"
      />

      <RatingStats className="layanan-rating-stats" />

      <ServiceAdvantages />

      <ServiceGrid services={services} />

      <HowItWorks />

      <IndonesiaBanner whatsappUrl={whatsappUrl} />

      <ClientsMarquee clients={clients} />

      <MediaTrust />

      <Testimonials testimonials={testimonials} />
    </PageShell>
  );
}
