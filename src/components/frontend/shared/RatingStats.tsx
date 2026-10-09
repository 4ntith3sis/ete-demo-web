type RatingStat = { value: string; label: string };

type SpotlightStat = {
  icon: string;
  value: string;
  label: string;
  description: string;
};

type SpotlightMain = {
  icon: string;
  value: string;
  label: string;
  description: string;
  footerIcon: string;
  footer: string;
};

type MinimalStat = {
  icon: string;
  value: string;
  label: string;
};

type RatingStatsProps = {
  className?: string;
  variant?: "cards" | "spotlight" | "minimal";
  label?: string;
  title?: string;
  description?: string;
  main?: SpotlightMain;
  stats?: readonly SpotlightStat[];
  minimalStats?: readonly MinimalStat[];
};

const ratingStats: readonly RatingStat[] = [
  { value: "13.000+", label: "Bisnis Terlayani" },
  { value: "30+", label: "Jenis Layanan Pajak" },
  { value: "4.9 ★", label: "Rating Google (700+)" },
  { value: "3 Kota", label: "Kantor Representatif" },
] as const;

const defaultMinimalStats: readonly MinimalStat[] = [
  { icon: "fa-users", value: "13.000+", label: "KLIEN TERLAYANI" },
  { icon: "fa-star", value: "4,9/5", label: "RATING GOOGLE" },
  { icon: "fa-comments", value: "700+", label: "ULASAN KLIEN" },
  { icon: "fa-face-smile", value: "97%", label: "KEPUASAN PELANGGAN" },
] as const;

function StatValue({ value }: { value: string }) {
  return value === "4.9 ★" ? <>4.9 <span className="rating-stat-star">★</span></> : value;
}

export function RatingStats({
  className = "",
  variant = "cards",
  label,
  title,
  description,
  main,
  stats = [],
  minimalStats = [],
}: RatingStatsProps) {
  if (variant === "minimal") {
    const items = minimalStats.length > 0 ? minimalStats : defaultMinimalStats;
    return (
      <section className={`hero-stats-section ${className}`.trim()} aria-label="Statistik Utama EasyTax">
        <div className="hero-stats-decor" aria-hidden="true">
          <div className="hero-stats-decor-circle" />
        </div>
        <div className="container">
          <div className="hero-stats-grid">
            {items.map(({ icon, value, label: itemLabel }) => (
              <article className="hero-stat-card" key={itemLabel}>
                <div className="hero-stat-icon">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <strong className="hero-stat-value">{value}</strong>
                <span className="hero-stat-label">{itemLabel}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "spotlight" && main) {
    return (
      <section className={`rating-stats-section rating-stats-spotlight ${className}`.trim()} aria-label={title || "Keunggulan EasyTax"}>
        <div className="container">
          <div className="spotlight-header">
            {label ? <span className="badge-tag">{label}</span> : null}
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
          </div>
          <div className="spotlight-grid">
            <article className="spotlight-main-card">
              <div className="spotlight-main-icon"><i className={`fa-solid ${main.icon}`} /></div>
              <strong className="spotlight-main-value">{main.value}</strong>
              <span className="spotlight-main-label">{main.label}</span>
              <p className="spotlight-main-desc">{main.description}</p>
              <span className="spotlight-main-divider" aria-hidden="true" />
              <div className="spotlight-main-footer"><i className={`fa-solid ${main.footerIcon}`} /> <span>{main.footer}</span></div>
              <span className="spotlight-decor" aria-hidden="true" />
            </article>
            <div className="spotlight-support-grid">
              {stats.map(({ icon, value, label: itemLabel, description: itemDesc }) => (
                <article className="spotlight-card" key={itemLabel}>
                  <div className="spotlight-card-icon"><i className={`fa-solid ${icon}`} /></div>
                  <strong className="spotlight-card-value">{value}</strong>
                  <span className="spotlight-card-label">{itemLabel}</span>
                  <p className="spotlight-card-desc">{itemDesc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`rating-stats-section ${className}`.trim()} aria-label="Statistik EasyTax">
      <div className="container">
        <div className="rating-stats-grid">
          {ratingStats.map(({ value, label: itemLabel }) => (
            <article className="rating-stat-card" key={itemLabel}>
              <strong><StatValue value={value} /></strong>
              <span>{itemLabel}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
