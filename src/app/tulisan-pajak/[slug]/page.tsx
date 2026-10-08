import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles/getArticleBySlug";
import { getArticles } from "@/lib/articles/getArticles";
import { getWhatsAppUrl } from "@/lib/cms";
import { PageShell } from "@/components/frontend/layout/PageShell";
import { ArticleHeader } from "@/components/frontend/article/ArticleHeader";
import { ArticleContent } from "@/components/frontend/article/ArticleContent";
import { ArticleTableOfContents } from "@/components/frontend/article/ArticleTableOfContents";
import { ArticleTags } from "@/components/frontend/article/ArticleTags";
import { ArticleCard } from "@/components/frontend/cards/ArticleCard";
import { ClosingCTA } from "@/components/frontend/homepage/ClosingCTA";
import { SectionHeading } from "@/components/frontend/shared/SectionHeading";
import { extractHeadings } from "@/lib/articles/toc";

export async function generateStaticParams() { const articles = await getArticles(); return articles.map((article) => ({ slug: article.slug })); }
export const revalidate = 60;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = await getArticleBySlug(slug); return article ? { title: article.seo.title, description: article.seo.description } : { title: "Artikel tidak ditemukan" }; }
export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const headings = extractHeadings(article.blocks ?? []);
  const [allArticles, whatsappUrl] = await Promise.all([getArticles(), getWhatsAppUrl()]);
  const related = allArticles.filter((a) => a.slug !== article.slug && a.categorySlug && a.categorySlug === article.categorySlug).slice(0, 3);
  const filledRelated = related.length >= 3 ? related : [...related, ...allArticles.filter((a) => a.slug !== article.slug && !related.some((r) => r.slug === a.slug))].slice(0, 3);

  return (
    <PageShell>
      <main className="article-detail-page">
        <div className="container">
          <ArticleHeader article={article} />
          <div className="article-detail-image">
            <Image src={article.thumbnail} alt={article.title} fill sizes="100vw" priority style={{ objectFit: "cover" }} />
          </div>
          <div className="article-layout">
            <ArticleContent article={article} />
            <ArticleTableOfContents headings={headings} />
          </div>
          <ArticleTags article={article} />
        </div>
      </main>
      {filledRelated.length > 0 && (
        <section className="blog-section article-grid-section">
          <div className="container">
            <SectionHeading
              badge="REKOMENDASI BACAAN"
              title="Artikel Pajak Terkait"
              description="Pelajari topik perpajakan dan akuntansi lainnya yang relevan dengan kebutuhan bisnis Anda."
            />
            <div className="blog-grid">
              {filledRelated.map((rel) => (
                <ArticleCard article={rel} key={rel.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
      <ClosingCTA whatsappUrl={whatsappUrl} />
    </PageShell>
  );
}
