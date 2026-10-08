import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServices } from "@/lib/services/getServices";
import { getServiceBySlug } from "@/lib/services/getServiceBySlug";
import { getTestimonials, getClientLogos, getWhatsAppUrl } from "@/lib/cms";
import { PageShell } from "@/components/frontend/layout/PageShell";
import { ServiceHero } from "@/components/frontend/service/ServiceHero";
import { PricingPackages } from "@/components/frontend/service/PricingPackages";
import { ServiceFAQ } from "@/components/frontend/service/ServiceFAQ";
import { ServiceCTA } from "@/components/frontend/service/ServiceCTA";
import { RatingStats } from "@/components/frontend/shared/RatingStats";
import { ClientsMarquee, IndonesiaBanner, MediaTrust, Testimonials } from "@/components/frontend/homepage";
import { ServiceAdvantages } from "@/components/frontend/service/ServiceAdvantages";
import { ServiceWorkflow } from "@/components/frontend/service/ServiceWorkflow";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  return service ? { title: service.seo.title, description: service.seo.description } : { title: "Layanan tidak ditemukan" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const [testimonials, clients, whatsappUrl] = await Promise.all([
    getTestimonials(),
    getClientLogos(),
    getWhatsAppUrl(),
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <PageShell>
      <ServiceHero service={service} whatsappUrl={whatsappUrl} />
      <RatingStats className="slug-rating-stats" />
      <ServiceAdvantages />
      <PricingPackages service={service} whatsappUrl={whatsappUrl} />
      <ServiceWorkflow />
      <IndonesiaBanner whatsappUrl={whatsappUrl} />
      <ClientsMarquee clients={clients} />
      <MediaTrust />
      <Testimonials testimonials={testimonials} />
      <ServiceFAQ service={service} />
      <ServiceCTA whatsappUrl={whatsappUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </PageShell>
  );
}
