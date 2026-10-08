// Single source of truth for heading slug/ID generation, shared by the
// article renderer and the Table of Contents (they must always agree).

export type TocHeading = {
  id: string
  text: string
  level: 2 | 3 | 4 | 5 | 6
}

export type ContentBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'heading'; level: 2 | 3 | 4 | 5 | 6; text: string }
  | { kind: 'list'; ordered: boolean; items: string[] }

export function slugifyHeading(text: string): string {
  const slug = text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug.length > 0 ? slug : 'bagian'
}
function headingLevel(tag: unknown): 2 | 3 | 4 | 5 | 6 | null {
  if (tag === 'h2') return 2
  if (tag === 'h3') return 3
  if (tag === 'h4') return 4
  if (tag === 'h5') return 5
  if (tag === 'h6') return 6
  return null
}

function nodeText(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  const n = node as { text?: unknown; children?: unknown }
  if (typeof n.text === 'string') return n.text
  if (Array.isArray(n.children)) return n.children.map(nodeText).join('')
  return ''
}

function topLevelNodes(value: unknown): unknown[] {
  if (!value || typeof value !== 'object') return []
  const root = (value as { root?: unknown }).root ?? value
  if (!root || typeof root !== 'object') return []
  const children = (root as { children?: unknown }).children
  return Array.isArray(children) ? children : []
}

function nodeKind(node: unknown): string | undefined {
  if (!node || typeof node !== 'object') return undefined
  return (node as { type?: unknown }).type as string | undefined
}

/**
 * Convert a Lexical document into render blocks.
 * Only real heading nodes (h2-h6) become headings; everything else
 * (paragraphs, quotes, list items, bold text, links, images) stays out
 * of the TOC. List items keep the previous flatten-to-paragraph behavior.
 */
export function lexicalToBlocks(value: unknown): ContentBlock[] {
  const blocks: ContentBlock[] = []
  for (const node of topLevelNodes(value)) {
    const kind = nodeKind(node)
    if (kind === 'heading') {
      const level = headingLevel((node as { tag?: unknown }).tag)
      const text = nodeText(node).trim()
      if (level !== null && text.length > 0) {
        blocks.push({ kind: 'heading', level, text })
      }
      continue
    }
    if (kind === 'list') {
      const listNode = node as { tag?: unknown; listType?: unknown; children?: unknown }
      const items = (Array.isArray(listNode.children) ? listNode.children : [])
        .map((item) => nodeText(item).trim())
        .filter((text) => text.length > 0)
      if (items.length > 0) {
        blocks.push({ kind: 'list', ordered: listNode.tag === 'ol' || listNode.listType === 'number', items })
      }
      continue
    }
    if (kind === 'paragraph' || kind === 'quote') {
      const text = nodeText(node).trim()
      if (text.length > 0) blocks.push({ kind: 'paragraph', text })
      continue
    }
  }
  return blocks
}

function assignIds(headings: { text: string; level: 2 | 3 | 4 | 5 | 6 }[]): TocHeading[] {
  const seen = new Map<string, number>()
  return headings.map((h) => {
    const base = slugifyHeading(h.text)
    const count = (seen.get(base) ?? 0) + 1
    seen.set(base, count)
    return { id: count === 1 ? base : `${base}-${count}`, text: h.text, level: h.level }
  })
}

/** All H2-H6 headings with unique, stable IDs. No limit on count. */
export function extractHeadings(blocks: ContentBlock[]): TocHeading[] {
  return assignIds(blocks.filter((b): b is Extract<ContentBlock, { kind: 'heading' }> => b.kind === 'heading'))
}

/** Blocks with matching IDs attached to heading blocks (same algorithm as extractHeadings). */
export function blocksWithIds(blocks: ContentBlock[]): (ContentBlock & { id?: string })[] {
  const ids = assignIds(blocks.filter((b): b is Extract<ContentBlock, { kind: 'heading' }> => b.kind === 'heading'))
  let i = 0
  return blocks.map((b) => (b.kind === 'heading' ? { ...b, id: ids[i++].id } : b))
}
