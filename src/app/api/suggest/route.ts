import { NextResponse } from "next/server";
import { demoArticles } from "@/data/demoData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();

  if (q.length < 2) {
    return NextResponse.json({ suggestions: [] });
  }

  const suggestions = demoArticles
    .filter((article) => {
      const titleMatch = article.title.toLowerCase().includes(q);
      const categoryMatch = article.category.toLowerCase().includes(q);
      return titleMatch || categoryMatch;
    })
    .slice(0, 5)
    .map((article) => ({
      title: article.title,
      slug: article.slug,
      category: article.category,
      publishedDate: article.publishedDate,
      thumbnailUrl: article.thumbnail,
    }));

  return NextResponse.json({ suggestions });
}
