const missions = [
  ["01", "Layanan yang Mudah Diakses", "Memberikan layanan perpajakan yang mudah dipahami dan dapat diakses oleh berbagai skala bisnis."],
  ["02", "Kepatuhan yang Tepat", "Membantu klien memenuhi kewajiban perpajakan secara tepat waktu dan sesuai regulasi."],
  ["03", "Solusi Strategis", "Memberikan solusi strategis untuk pengelolaan pajak dan keuangan perusahaan."],
  ["04", "Kemitraan Jangka Panjang", "Membangun hubungan jangka panjang dengan klien melalui pelayanan profesional dan terpercaya."],
] as const;

export function AboutVisionMission() {
  return (
    <section className="about-vision-mission-section about-vision-mission-editorial" aria-labelledby="vision-mission-title">
      <div className="container">
        <header className="about-vision-mission-heading">
          <span className="about-eyebrow">VISI &amp; MISI</span>
          <h2 id="vision-mission-title">Arah dan Komitmen Kami untuk Bisnis Indonesia</h2>
          <p>Kami berkomitmen menjadi mitra terpercaya bagi bisnis melalui layanan perpajakan dan akuntansi yang profesional, transparan, dan berorientasi pada kebutuhan klien.</p>
        </header>
        <div className="about-vision-mission-bento">
          <article className="about-vision-bento-panel">
            <span>VISI KAMI</span>
            <h3>Menjadi Mitra Terpercaya</h3>
            <p>Menjadi mitra terpercaya dalam solusi perpajakan dan akuntansi yang mendorong pertumbuhan bisnis melalui pengelolaan keuangan yang transparan dan kepatuhan pajak yang profesional.</p>
          </article>
          <div className="about-mission-bento">
            <header className="about-mission-bento-heading"><span>MISI KAMI</span><h3>Langkah Kami Mewujudkan Visi</h3></header>
            <div className="about-mission-bento-grid">
              {missions.map(([number, title, description]) => (
                <article className="about-mission-bento-card" key={number}>
                  <span>{number}</span><h4>{title}</h4><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
