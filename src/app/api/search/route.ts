import { NextResponse } from "next/server";
import { demoArticles } from "@/data/demoData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();

  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = demoArticles
    .filter((article) => {
      const titleMatch = article.title.toLowerCase().includes(q);
      const excerptMatch = article.excerpt.toLowerCase().includes(q);
      const categoryMatch = article.category.toLowerCase().includes(q);
      const contentMatch = article.content.some((p) => p.toLowerCase().includes(q));
      return titleMatch || excerptMatch || categoryMatch || contentMatch;
    })
    .map((article) => ({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      category: article.category,
      publishedDate: article.publishedDate,
      score: 1,
    }));

  return NextResponse.json({ results });
}
