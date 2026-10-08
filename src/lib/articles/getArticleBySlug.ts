import { getArticleBySlug as getArticleBySlugFromCms } from "@/lib/cms";
export async function getArticleBySlug(slug: string) { return getArticleBySlugFromCms(slug); }
