import { SectionHeading } from "../shared/SectionHeading";

const benefits = [
  ["fa-bolt", "Praktis & Efisien", "Kurangi beban administrasi perpajakan agar Anda lebih fokus mengembangkan bisnis."],
  ["fa-shield-halved", "Kerahasiaan Terjaga", "Komitmen menjaga kerahasiaan dokumen dan informasi bisnis klien."],
  ["fa-wallet", "Biaya Transparan", "Informasi biaya layanan yang jelas sesuai kebutuhan bisnis Anda."],
] as const;

export function Benefits() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <SectionHeading
          badge="Kenapa Kami"
          title="Mengapa Memilih EasyTax?"
          description="Solusi perpajakan yang praktis, aman, dan sesuai kebutuhan bisnis Anda."
        />
        <div className="benefits-premium-grid">
          {benefits.map(([icon, title, description]) => (
            <article className="benefit-premium-card" key={title}>
              <div className="benefit-premium-icon"><i className={`fa-solid ${icon}`} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}