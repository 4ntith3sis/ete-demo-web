import type { Metadata } from "next";
import { Suspense } from "react";

import { PageShell } from "@/components/frontend/layout/PageShell";
import { SearchForm } from "@/components/search/SearchForm";
import { SearchResultsView } from "@/components/search/SearchResultsView";
import { getArticleCategories, getArticles } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Hasil Pencarian Artikel | EasyTax",
  description: "Hasil pencarian artikel perpajakan EasyTax.",
};

export const dynamic = "force-dynamic";

export default async function ArticleSearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = (params.q ?? "").trim();
  const [articles, categories] = await Promise.all([getArticles(), getArticleCategories()]);
  return (
    <PageShell>
      <section className="article-listing-hero">
        <div className="container">
          <nav className="article-breadcrumb"><a href="/"><i className="fa-solid fa-house" /> Beranda</a><span>&gt;</span><a href="/tulisan-pajak">Artikel</a><span>&gt;</span><strong>Hasil Pencarian</strong></nav>
          <div className="hero-tag-pill-figma"><span /> Pusat Edukasi Perpajakan &amp; Akuntansi</div>
          <h1>Artikel &amp; Wawasan Perpajakan Perusahaan</h1>
          <p>Dapatkan panduan praktis perpajakan, analisis regulasi Ditjen Pajak (DJP) terbaru, tips strategi pembukuan keuangan, dan solusi bebas denda pajak untuk bisnis Anda.</p>
          <SearchForm key={q} initialQuery={q} />
        </div>
      </section>
      <section className="article-grid-section" style={{ background: "#ffffff" }}>
        <div className="container">
          <Suspense>
            <SearchResultsView articles={articles} categories={categories} />
          </Suspense>
        </div>
      </section>
    </PageShell>
  );
}
