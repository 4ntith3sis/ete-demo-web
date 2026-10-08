import { TestimonialCard } from "@/components/frontend/cards/TestimonialCard";
import { SectionHeading } from "../shared/SectionHeading";
import type { Testimonial } from "@/types/content";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const splitAt = Math.ceil(testimonials.length / 2);
  const rowA = testimonials.slice(0, splitAt);
  const rowB = testimonials.length > 1 ? testimonials.slice(splitAt) : testimonials;

  function loopTrack(items: Testimonial[]): Testimonial[] {
    if (items.length === 0) return [];
    let half = [...items];
    while (half.length < 6) half = half.concat(items);
    return [...half, ...half];
  }

  return (
    <section className="testimonials-marquee-section" id="testimonials">
      <div className="container">
        <SectionHeading
          badge="TESTIMONI"
          title="Pengalaman Dari Mereka yang Sudah Kami Layani."
          description="Dari UMKM kuliner, retail, agency hingga korporasi besar — semua percayakan urusan pajak & pembukuannya ke EasyTax."
        />
      </div>
      {testimonials.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>Belum ada testimoni.</p>
      ) : (
        <div className="testi-marquee-container">
          <MarqueeRow testimonials={loopTrack(rowA)} direction="track-left" />
          <MarqueeRow testimonials={loopTrack(rowB)} direction="track-right" />
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
        </div>
      )}
    </section>
  );
}

function MarqueeRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: "track-left" | "track-right" }) {
  return (
    <div className="testi-marquee-wrapper">
      <div className={`testi-marquee-track ${direction}`}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard testimonial={testimonial} key={`${testimonial.name}-${index}`} />
        ))}
      </div>
    </div>
  );
}
