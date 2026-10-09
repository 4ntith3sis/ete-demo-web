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
      <RatingStats className="homepage-rating-stats" />
      <Benefits />
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
