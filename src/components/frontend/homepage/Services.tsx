import { ServiceCarousel } from "./ServiceCarousel";
import { SectionHeading } from "../shared/SectionHeading";
import type { Service } from "@/types/service";

export function Services({ services }: { services: Service[] }) {
  return (
    <section className="showcase-section" id="services">
      <div className="container">
        <SectionHeading badge="Layanan yang tersedia" title="Layanan Pajak & Keuangan EasyTax" description="Solusi komprehensif untuk segala kepatuhan perpajakan badan usaha dan perorangan." />
        {services.length === 0 ? <p style={{ textAlign: "center", color: "#64748b" }}>Belum ada layanan yang tersedia.</p> : <ServiceCarousel services={services} />}
      </div>
    </section>
  );
}
