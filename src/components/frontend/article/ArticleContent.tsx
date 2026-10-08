import type { Article } from "@/types/article";
import { blocksWithIds } from "@/lib/articles/toc";

export function ArticleContent({ article }: { article: Article }) {
  const rawBlocks = article.blocks ?? []
  // Legacy path: content without structure renders exactly as before.
  if (rawBlocks.length === 0) {
    return (
      <article className="article-content">
        {(article.content ?? []).map((paragraph, i) => <p key={`p-${i}`}>{paragraph}</p>)}
      </article>
    )
  }
  const blocks = blocksWithIds(rawBlocks)
  return (
    <article className="article-content">
      {blocks.map((block, i) => {
        if (block.kind === 'heading') {
          const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          return <Tag key={block.id ?? `h-${i}`} id={block.id} className="article-heading">{block.text}</Tag>
        }
        if (block.kind === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul'
          return <ListTag key={`list-${i}`} className="article-list">{block.items.map((item, j) => <li key={j}>{item}</li>)}</ListTag>
        }
        return <p key={`p-${i}`}>{block.text}</p>
      })}
    </article>
  )
}
