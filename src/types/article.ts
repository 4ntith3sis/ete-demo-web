import type { ContentBlock } from "@/lib/articles/toc";

export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  blocks: ContentBlock[];
  thumbnail: string;
  category: string;
  categorySlug?: string;
  tags: { name: string; slug: string }[];
  author: string;
  publishedDate: string;
  readingTime: string;
  seo: { title: string; description: string };
};
