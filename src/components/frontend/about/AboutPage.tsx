import Image from "next/image";
import { team as mockTeam } from "@/data/mock/about";
import { AboutHero } from "./AboutHero";
import { AboutVisionMission } from "./AboutVisionMission";
import { HomepageTrustSections } from "../homepage/HomepageTrustSections";
import { AboutApproach } from "./AboutApproach";
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
      description="Mengelola pajak dan keuangan bisnis seharusnya tidak menjadi beban. EasyTax menyediakan solusi perpajakan dan akuntansi yang praktis, efisien, dan tepercaya agar Anda dapat fokus mengembangkan bisnis. Sejak 2023, kami telah membantu lebih dari 13.000 UMKM dan perusahaan dalam memenuhi kebutuhan perpajakan dan pembukuan mereka."
      secondaryCtaLabel="Lihat Layanan Pajak"
      secondaryCtaHref="#story"
      trustItems={["13.000+ Klien Terlayani", "Konsultan Berizin Resmi"]}
      imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
      imageAlt="Tim Konsultan EasyTax"
    />
    <section className="about-story-section" id="story"><div className="container"><div className="about-story-grid"><div className="about-story-image"><Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80" alt="Tim EasyTax Bekerja Sama" fill sizes="45vw" style={{ objectFit: "cover" }} /><div className="about-experience"><i className="fa-solid fa-calendar-check" /><strong>Berdiri 2023<small>3+ Tahun Melayani Indonesia</small></strong></div></div><div className="about-story-copy"><span className="about-eyebrow">TENTANG KAMI</span><h2>Mengubah Kompleksitas Pajak Menjadi <span>Kemudahan</span>.</h2><p>Kepatuhan perpajakan dan pengelolaan keuangan yang baik merupakan fondasi penting bagi pertumbuhan bisnis. Namun, kompleksitas regulasi dan tuntutan akurasi membutuhkan pendampingan yang kompeten serta dapat diandalkan.</p><p><strong>EasyTax.id</strong> hadir sebagai mitra strategis di bidang perpajakan dan akuntansi, menyediakan solusi terintegrasi untuk membantu bisnis memenuhi kewajiban fiskal, meningkatkan ketertiban administrasi, dan mengelola keuangan secara lebih efektif.</p><ul><li><i className="fa-solid fa-circle-check" /> <strong>Terdaftar Konsultan Pajak Resmi</strong> — data &amp; dokumen pembukuan dijamin rahasia &amp; aman.</li><li><i className="fa-solid fa-circle-check" /> <strong>Tim 30+ Konsultan Pajak &amp; Akuntan</strong> berpengalaman dari berbagai latar industri.</li><li><i className="fa-solid fa-circle-check" /> <strong>Garansi 100% Bebas Denda</strong> — pengerjaan tepat waktu sesuai regulasi DJP &amp; Kemenkeu.</li></ul></div></div></div></section>
    <AboutVisionMission />
    <AboutApproach />
    <TeamSection team={team} />
    <HomepageTrustSections showStats={false} />
    <ClosingCTA whatsappUrl={whatsappUrl} />
  </>;
}
