export function ServiceAdvantages() {
  const editorialItems = [
    {
      num: "01",
      title: "Ketelitian dalam Setiap Proses",
      description: "Administrasi dan pelaporan ditangani dengan perhatian terhadap detail.",
    },
    {
      num: "02",
      title: "Pendampingan yang Relevan",
      description: "Dukungan perpajakan disesuaikan dengan kebutuhan bisnis.",
    },
    {
      num: "03",
      title: "Administrasi Lebih Terarah",
      description: "Proses yang jelas membantu bisnis mengelola dokumen dan kewajiban pajak.",
    },
  ] as const;

  return (
    <section className="service-advantages editorial-advantages-section" aria-label="Mengapa EasyTax">
      <div className="container">
        <div className="editorial-advantages-header">
          <div className="editorial-advantages-header-top">
            <span className="badge-tag">MENGAPA EASYTAX</span>
          </div>
          <div className="editorial-advantages-header-grid">
            <h2 className="editorial-advantages-heading">
              Lebih dari Sekadar Mengurus Pajak.
            </h2>
            <p className="editorial-advantages-desc">
              Pendampingan yang membantu bisnis mengelola kewajiban perpajakan dengan lebih terarah, efisien, dan terorganisir.
            </p>
          </div>
        </div>

        <div className="editorial-advantages-list">
          {editorialItems.map(({ num, title, description }) => (
            <article className="editorial-advantage-row" key={num}>
              <div className="editorial-col-num">
                <span className="editorial-num">{num}</span>
              </div>
              <div className="editorial-col-title">
                <h3>{title}</h3>
              </div>
              <div className="editorial-col-desc">
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
