import { demoServices, demoArticles, demoTestimonials, demoClients, demoTeam, demoWhatsAppUrl } from "@/data/demoData";
import type { Service } from "@/types/service";
import type { Article } from "@/types/article";
import type { Testimonial } from "@/types/content";
import type { AboutTeamMember } from "@/types/about";

export type ArticlesPage = {
  articles: Article[];
  page: number;
  totalPages: number;
  totalArticles: number;
  totalDocs: number;
};

export async function getServices(): Promise<Service[]> {
  return demoServices;
}

export async function getPublishedServices(): Promise<Service[]> {
  return demoServices;
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  return demoServices.find((s) => s.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  return demoArticles;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return demoArticles.find((a) => a.slug === slug);
}

export async function getArticlesPaginated(
  pageOrOptions?: number | { page?: number; limit?: number; categorySlug?: string },
  optionsParam?: { limit?: number; categorySlug?: string }
): Promise<ArticlesPage> {
  let page = 1;
  let limit = 6;
  let categorySlug: string | undefined;

  if (typeof pageOrOptions === "number") {
    page = pageOrOptions;
    if (optionsParam) {
      if (optionsParam.limit) limit = optionsParam.limit;
      categorySlug = optionsParam.categorySlug;
    }
  } else if (pageOrOptions && typeof pageOrOptions === "object") {
    if (pageOrOptions.page) page = pageOrOptions.page;
    if (pageOrOptions.limit) limit = pageOrOptions.limit;
    categorySlug = pageOrOptions.categorySlug;
  }

  let filtered = [...demoArticles];
  if (categorySlug) {
    filtered = filtered.filter((a) => a.categorySlug === categorySlug);
  }

  const totalArticles = filtered.length;
  const totalPages = Math.ceil(totalArticles / limit) || 1;
  const start = (page - 1) * limit;
  const articles = filtered.slice(start, start + limit);

  return {
    articles,
    page,
    totalPages,
    totalArticles,
    totalDocs: totalArticles,
  };
}

export async function getArticleCategories(): Promise<{ id: string; name: string; slug: string }[]> {
  const map = new Map<string, { id: string; name: string; slug: string }>();
  for (const article of demoArticles) {
    if (article.category && article.categorySlug && !map.has(article.categorySlug)) {
      map.set(article.categorySlug, { id: article.categorySlug, name: article.category, slug: article.categorySlug });
    }
  }
  return Array.from(map.values());
}

export async function getTeamMembers(): Promise<AboutTeamMember[]> {
  return demoTeam;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return demoTestimonials;
}

export async function getClientLogos(): Promise<string[]> {
  return demoClients;
}

export async function getWhatsAppUrl(): Promise<string> {
  return demoWhatsAppUrl;
}

export async function getPageBySlug(_slug: string): Promise<null> {
  return null;
}
