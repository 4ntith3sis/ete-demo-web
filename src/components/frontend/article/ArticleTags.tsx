import type { Article } from "@/types/article";

export function ArticleTags({ article }: { article: Article }) {
  if (!article.tags || article.tags.length === 0) return null;
  return (
    <div className="article-tags">
      {article.tags.map((tag) => (
        <span key={tag.slug || tag.name} className="article-tag">{tag.name}</span>
      ))}
    </div>
  );
}
