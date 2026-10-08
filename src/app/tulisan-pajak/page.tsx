import type { Metadata } from "next";
import { PageShell } from "@/components/frontend/layout/PageShell";
import { ArticleListing } from "@/components/frontend/article/ArticleListing";
import { getArticleCategories, getArticlesPaginated, getWhatsAppUrl } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Artikel & Edukasi Perpajakan | EasyTax",
  description: "Pusat artikel dan edukasi perpajakan EasyTax.",
};

export const revalidate = 60;
const PAGE_SIZE = 6;

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; kategori?: string }>;
}) {
  const params = await searchParams;
  const rawPage = Number.parseInt(params.page ?? "1", 10);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;
  const [categories, whatsappUrl] = await Promise.all([
    getArticleCategories(),
    getWhatsAppUrl(),
  ]);
  const knownSlugs = new Set(categories.map((c) => c.slug));
  const activeCategory =
    params.kategori && knownSlugs.has(params.kategori) ? params.kategori : undefined;
  const result = await getArticlesPaginated(page, {
    limit: PAGE_SIZE,
    categorySlug: activeCategory,
  });

  return (
    <PageShell>
      <ArticleListing
        articles={result.articles}
        categories={categories}
        page={result.page}
        totalPages={result.totalPages}
        totalDocs={result.totalDocs}
        activeCategory={activeCategory}
        whatsappUrl={whatsappUrl}
      />
    </PageShell>
  );
}
