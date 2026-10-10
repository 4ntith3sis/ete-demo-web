import Image from "next/image";
import { Fragment } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export type AboutHeroCrumb = { label: string; href?: string };

type AboutHeroProps = {
  className?: string;
  floatingStats?: { icon: string; value: string; label: string }[];
  showPrimaryCta?: boolean;
  crumbs: AboutHeroCrumb[];
  badge: string;
  title: ReactNode;
  description: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  trustItems: string[];
  imageSrc: string;
  imageAlt: string;
};

/**
 * Hero reusable dengan layout identik untuk halaman Tentang Kami & Layanan.
 * Class, typography, spacing, dan decorative elements dipertahankan sama;
 * hanya content (teks/CTA/image) yang dipassing per halaman.
 */
export function AboutHero({ whatsappUrl,
  className = "",
  floatingStats = [
    { icon: "fa-user-check", value: "13.000+", label: "Bisnis Terlayani" },
    { icon: "fa-star", value: "4.9 / 5.0", label: "Rating Google (700+)" },
  ],
  showPrimaryCta = true,
  crumbs,
  badge,
  title,
  description,
  secondaryCtaLabel,
  secondaryCtaHref,
  trustItems,
  imageSrc,
  imageAlt,
}: AboutHeroProps & { whatsappUrl?: string }) {
  return (
    <section className={`about-hero-section about-page-hero ${className}`.trim()}>
      <div className="container">
        <div className="about-hero-grid">
          <div>
            <nav className="about-breadcrumb">
              {crumbs.map((crumb, index) => (
                <Fragment key={crumb.label}>
                  {index > 0 && <span>&gt;</span>}
                  {crumb.href ? (
                    <a href={crumb.href}>
                      {index === 0 && <i className="fa-solid fa-house" />} {crumb.label}
                    </a>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </Fragment>
              ))}
            </nav>
            <div className="hero-tag-pill-figma">
              <span /> {badge}
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="hero-btn-row">
              {showPrimaryCta ? (
                <Button href={whatsappUrl ?? "https://mauorder.online/easytaxwebsite"} external className="btn-primary">
                  Konsultasi Gratis <i className="fa-solid fa-arrow-right" />
                </Button>
              ) : null}
              <Button href={secondaryCtaHref} className="btn-outline-white">
                {secondaryCtaLabel}
              </Button>
            </div>
            <div className="hero-trust-items">
              {trustItems.map((item) => (
                <div className="hero-trust-item" key={item}>
                  <i className="fa-solid fa-circle-check" /> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-hero-visual">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="45vw"
              priority
              style={{ objectFit: "cover" }}
            />
            {floatingStats.map((stat, index) => (
              <div className={`about-floating-stat${index > 0 ? " bottom" : ""} floating-stat-${index + 1}${className.includes("article-listing-hero") ? " article-floating-badge" : ""}`} key={`${stat.value}-${stat.label}`}>
                <i className={`fa-solid ${stat.icon}`} />
                <strong>
                  {stat.value}<small>{stat.label}</small>
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
