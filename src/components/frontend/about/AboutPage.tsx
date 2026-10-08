import Image from "next/image";
import { aboutValues, team as mockTeam } from "@/data/mock/about";
import { AboutHero } from "./AboutHero";
import { AboutStats } from "./AboutStats";
import { SectionHeading } from "../shared/SectionHeading";
import { TeamSection } from "./TeamSection";
import { ClosingCTA } from "../homepage/ClosingCTA";
import { getTeamMembers, getWhatsAppUrl } from "@/lib/cms";

export async function AboutPage() {
  const [cmsTeam, whatsappUrl] = await Promise.all([getTeamMembers(), getWhatsAppUrl()]);
  const team = cmsTeam.length > 0 ? cmsTeam : mockTeam;
  return <>
  <AboutHero
    crumbs={[{ label: "Beranda", href: "/" }, { label: "Tentang Kami" }]}
    badge="Tentang EasyTax — Konsultan Pajak Terpercaya"
    title={<>Memudahkan Kepatuhan Pajak &amp; Akuntansi untuk <span>Setiap Pengusaha</span> Indonesia.</>}
    description="EasyTax hadir karena kami percaya laporan perpajakan dan keuangan tidak harus mahal, rumit, atau menyita waktu. Sejak 2023, kami telah membantu lebih dari 13.000 UMKM & perusahaan mengurus SPT, laporan keuangan, PKP, hingga pembukuan akuntansi secara profesional dan aman."
    secondaryCtaLabel="Lihat Layanan Pajak"
    secondaryCtaHref="#story"
    trustItems={["13.000+ Klien Terlayani", "Konsultan Berizin Resmi"]}
    imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
    imageAlt="Tim Konsultan EasyTax"
  />
  <section className="about-story-section" id="story"><div className="container"><div className="about-story-grid"><div className="about-story-image"><Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80" alt="Tim EasyTax Bekerja Sama" fill sizes="45vw" style={{ objectFit: "cover" }} /><div className="about-experience"><i className="fa-solid fa-calendar-check" /><strong>Berdiri 2023<small>3+ Tahun Melayani Indonesia</small></strong></div></div><div className="about-story-copy"><span className="about-eyebrow">CERITA KAMI</span><h2>Lahir dari pengalaman mengurus <span>pajak &amp; keuangan</span> secara mandiri.</h2><p>Founder kami pernah mengalaminya — kebingungan dengan aturan perpajakan yang terus berubah, perhitungan sanksi administrasi yang tidak pasti, hingga kesulitan mencari konsultan pajak terpercaya yang transparan.</p><p>Dari sanalah <strong>EasyTax.id</strong> dibangun: sebuah platform konsultan pajak dan akuntansi terintegrasi yang memudahkan akses kepatuhan fiskal dan laporan keuangan untuk seluruh pengusaha di Indonesia secara akurat dan tepat waktu.</p><ul><li><i className="fa-solid fa-circle-check" /> <strong>Terdaftar Konsultan Pajak Resmi</strong> — data &amp; dokumen pembukuan dijamin rahasia &amp; aman.</li><li><i className="fa-solid fa-circle-check" /> <strong>Tim 30+ Konsultan Pajak &amp; Akuntan</strong> berpengalaman dari berbagai latar industri.</li><li><i className="fa-solid fa-circle-check" /> <strong>Garansi 100% Bebas Denda</strong> — pengerjaan tepat waktu sesuai regulasi DJP &amp; Kemenkeu.</li></ul></div></div></div></section>
  <AboutStats />
  <section className="about-values-section"><div className="container"><SectionHeading badge="NILAI-NILAI UTAMA KAMI" title="6 prinsip yang menjadi fondasi kerja kami." description="Setiap proses, biaya, dan komunikasi kami dipandu oleh nilai-nilai ini — bukan sekadar slogan." /><div className="about-values-grid">{aboutValues.map(([icon, title, description]) => <article className="about-value" key={title}><i className={`fa-solid ${icon}`} /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
  <TeamSection team={team} />
  <ClosingCTA whatsappUrl={whatsappUrl} />
</>; }
