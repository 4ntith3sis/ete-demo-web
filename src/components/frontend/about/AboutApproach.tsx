const approaches = [
  ["01", "Profesional dan Terarah", "Kami menyesuaikan dukungan perpajakan dan akuntansi dengan kebutuhan serta kondisi bisnis setiap klien."],
  ["02", "Teliti dan Bertanggung Jawab", "Kami mengutamakan ketelitian dalam pengelolaan dokumen dan pengerjaan setiap kebutuhan administrasi."],
  ["03", "Menjaga Kerahasiaan", "Kami menangani informasi dan dokumen klien secara bertanggung jawab dengan langkah perlindungan yang sesuai."],
  ["04", "Komunikasi yang Jelas", "Kami membantu klien memahami proses, persyaratan, dan kewajiban perpajakan serta akuntansi dengan bahasa yang mudah dipahami."],
] as const;

export function AboutApproach() {
  return (
    <section className="about-approach-section" aria-labelledby="about-approach-title">
      <div className="container">
        <header className="about-approach-heading">
          <span className="about-eyebrow">PENDEKATAN KAMI</span>
          <h2 id="about-approach-title">Prinsip yang Menjadi Dasar Setiap Layanan Kami</h2>
          <p>Setiap layanan EasyTax berlandaskan ketelitian, profesionalisme, dan komunikasi yang jelas agar klien dapat menjalankan kewajiban perpajakan dan akuntansi dengan lebih terarah.</p>
        </header>
        <div className="about-approach-cards">
          {approaches.map(([number, title, description]) => (
            <article className="about-approach-card" key={number}>
              <span className="about-approach-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
