import { RatingStats } from "../shared/RatingStats";

export function HomepageTrustSections({ showStats = true }: { showStats?: boolean }) {
  return (
    <>
      {showStats ? <RatingStats variant="minimal" className="homepage-hero-stats" /> : null}
      <RatingStats
        className="homepage-rating-stats"
        variant="spotlight"
        label="KEUNGGULAN KAMI"
        title="Mengapa memilih EasyTax?"
        description="Solusi perpajakan yang terstruktur untuk membantu bisnis mengelola kewajiban pajak dan mengambil keputusan dengan lebih percaya diri."
        main={{
          icon: "fa-shield-halved",
          value: "Kepatuhan & Keamanan",
          label: "Pengelolaan Risiko & Regulasi",
          description: "Pendampingan komprehensif memastikan kewajiban pajak perusahaan Anda dipenuhi tepat waktu dan sesuai regulasi DJP.",
          footerIcon: "fa-lock",
          footer: "Garansi Kerahasiaan Data Klien 100%",
        }}
        stats={[
          {
            icon: "fa-piggy-bank",
            value: "Efisiensi Pajak",
            label: "Perencanaan Terstruktur",
            description: "Optimasi beban perpajakan perusahaan secara efisien, transparan, dan legal.",
          },
          {
            icon: "fa-chart-line",
            value: "Keputusan Presisi",
            label: "Laporan Finansial Rapi",
            description: "Penyusunan dokumen akuntansi teratur untuk mendukung kredibilitas dan strategi bisnis.",
          },
          {
            icon: "fa-folder-tree",
            value: "Administrasi Rapi",
            label: "Dokumentasi Terorganisir",
            description: "Pengelolaan berkas dan dokumen perpajakan bisnis yang terstruktur dan aman.",
          },
          {
            icon: "fa-user-tie",
            value: "Konsultan Berizin",
            label: "Tim Berpengalaman BKP",
            description: "Didukung konsultan pajak resmi yang berkompeten menangani berbagai industri.",
          },
        ]}
      />
    </>
  );
}
