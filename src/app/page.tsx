import { PageShell } from "@/components/frontend/layout/PageShell";
import { ArticleSection, Benefits, ClientsMarquee, ClosingCTA, Hero, HowItWorks, IndonesiaBanner, MediaTrust, Services, Testimonials } from "@/components/frontend/homepage";
import { RatingStats } from "@/components/frontend/shared/RatingStats";
import { getServices, getTestimonials, getClientLogos, getWhatsAppUrl, getArticles } from "@/lib/cms";

export const revalidate = 60;

export default async function HomePage() {
  const [services, testimonials, clients, whatsappUrl, articles] = await Promise.all([
    getServices(),
    getTestimonials(),
    getClientLogos(),
    getWhatsAppUrl(),
    getArticles(),
  ]);

  return (
    <PageShell>
      <Hero whatsappUrl={whatsappUrl} />
      <Benefits />
      <RatingStats
        className="homepage-rating-stats"
        variant="spotlight"
        label="BUKTI KEPERCAYAAN KLIEN"
        title="Dipercaya oleh ribuan bisnis di Indonesia."
        description="Solusi perpajakan yang profesional, praktis, dan terpercaya."
        main={{
          icon: "fa-users",
          value: "13.000+",
          label: "Klien Terlayani",
          description: "Pengalaman mendampingi berbagai jenis bisnis.",
          footerIcon: "fa-shield-halved",
          footer: "Partner perpajakan Anda",
        }}
        stats={[
          { icon: "fa-star", value: "4.9/5", label: "Rating Google", description: "700+ ulasan dari klien kami." },
          { icon: "fa-clock", value: "Responsif", label: "Layanan Konsultasi", description: "Komunikasi sesuai jam layanan kami." },
          { icon: "fa-shield-halved", value: "Terjaga", label: "Kerahasiaan Data", description: "Komitmen menjaga informasi klien." },
          { icon: "fa-headset", value: "Profesional", label: "Tim Berpengalaman", description: "Didukung konsultan berizin dan berkompeten." },
        ]}
      />
      <Services services={services} />
      <HowItWorks />
      <IndonesiaBanner whatsappUrl={whatsappUrl} />
      <ClientsMarquee clients={clients} />
      <MediaTrust />
      <Testimonials testimonials={testimonials} />
      <ArticleSection articles={articles.slice(0, 6)} />
      <ClosingCTA whatsappUrl={whatsappUrl} />
    </PageShell>
  );
}
