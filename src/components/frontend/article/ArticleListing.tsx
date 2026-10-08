import Link from "next/link";
import { SearchForm } from "@/components/search/SearchForm";
import { ArticleCard } from "@/components/frontend/cards/ArticleCard";
import { Button } from "@/components/ui/Button";
import type { Article } from "@/types/article";

type Category = { id: number | string; name: string; slug: string };

function pageHref(page: number, categorySlug?: string): string {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));
  if (categorySlug) params.set("kategori", categorySlug);
  const query = params.toString();
  return `/tulisan-pajak${query ? `?${query}` : ""}`;
}

function pageWindow(current: number, total: number): number[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, current - 1, current, current + 1]);
  return [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
}

export function ArticleListing({
  articles,
  categories,
  page,
  totalPages,
  totalDocs,
  activeCategory,
  whatsappUrl,
}: {
  articles: Article[];
  categories: Category[];
  page: number;
  totalPages: number;
  totalDocs: number;
  activeCategory?: string;
  whatsappUrl: string;
}) {
  return (
    <>
      <section className="article-listing-hero">
        <div className="container">
          <nav className="article-breadcrumb"><a href="/"><i className="fa-solid fa-house" /> Beranda</a><span>&gt;</span><strong>Artikel &amp; Edukasi Perpajakan</strong></nav>
          <div className="hero-tag-pill-figma"><span /> Pusat Edukasi Perpajakan &amp; Akuntansi</div>
          <h1>Artikel &amp; Wawasan Perpajakan Perusahaan</h1>
          <p>Dapatkan panduan praktis perpajakan, analisis regulasi Ditjen Pajak (DJP) terbaru, tips strategi pembukuan keuangan, dan solusi bebas denda pajak untuk bisnis Anda.</p>
          <SearchForm />
        </div>
      </section>
      <section className="blog-section article-grid-section">
        <div className="container">
          <div className="article-filters">
            <Link href={pageHref(1)} className={!activeCategory ? "active" : undefined} style={{ textDecoration: "none" }}><button type="button" className={!activeCategory ? "active" : undefined}>Semua Artikel</button></Link>
            {categories.map((category) => (
              <Link key={category.slug} href={pageHref(1, category.slug)} style={{ textDecoration: "none" }}><button type="button" className={activeCategory === category.slug ? "active" : undefined}>{category.name}</button></Link>
            ))}
          </div>
          {articles.length === 0 ? (
            <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#64748b" }}>Belum ada artikel.</p>
          ) : (
            <>
              <div className="blog-grid">
                {articles.map((article) => <ArticleCard article={article} key={article.slug} />)}
              </div>
              <p style={{ textAlign: "center", color: "#64748b", fontSize: 14, marginTop: 24 }}>
                Halaman {page} dari {totalPages} — {totalDocs} artikel
              </p>
            </>
          )}
          {totalPages > 1 ? (
            <div className="article-pagination">
              {page > 1 ? (
                <Link href={pageHref(page - 1, activeCategory)} aria-label="Halaman sebelumnya"><button><i className="fa-solid fa-chevron-left" /></button></Link>
              ) : (
                <button disabled aria-label="Halaman sebelumnya"><i className="fa-solid fa-chevron-left" /></button>
              )}
              {pageWindow(page, totalPages).map((p) => (
                p === page ? (
                  <button key={p} className="active" aria-current="page">{p}</button>
                ) : (
                  <Link key={p} href={pageHref(p, activeCategory)}><button>{p}</button></Link>
                )
              ))}
              {page < totalPages ? (
                <Link href={pageHref(page + 1, activeCategory)} aria-label="Halaman berikutnya"><button><i className="fa-solid fa-chevron-right" /></button></Link>
              ) : (
                <button disabled aria-label="Halaman berikutnya"><i className="fa-solid fa-chevron-right" /></button>
              )}
            </div>
          ) : null}
        </div>
      </section>
      <section className="article-cta"><div className="container"><div><span className="badge-tag light-style">Konsultasi Gratis</span><h2>Ingin Diskusi Langsung Mengenai Pajak Bisnis Anda?</h2><p>Tim konsultan pajak resmi EasyTax siap membantu menganalisis laporan keuangan dan strategi efisiensi bebas denda.</p><Button href={whatsappUrl} external className="btn-primary btn-lg"><i className="fa-brands fa-whatsapp" /> Chat Konsultan via WhatsApp</Button></div></div></section>
    </>
  );
}
