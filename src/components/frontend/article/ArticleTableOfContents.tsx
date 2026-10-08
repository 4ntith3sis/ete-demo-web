'use client'

import React from 'react'

import type { TocHeading } from '@/lib/articles/toc'

export function ArticleTableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null)
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )
    const elements: Element[] = []
    for (const heading of headings) {
      const el = document.getElementById(heading.id)
      if (el) {
        elements.push(el)
        observer.observe(el)
      }
    }
    return () => {
      for (const el of elements) observer.unobserve(el)
      observer.disconnect()
    }
  }, [headings])

  // Keep the active item visible inside each TOC scroll container.
  // Only the container scrolls; the page itself is never moved here.
  React.useEffect(() => {
    if (!activeId || !rootRef.current) return
    const lists = rootRef.current.querySelectorAll('.article-toc-list')
    lists.forEach((list) => {
      const item = list.querySelector(`a[href="#${CSS.escape(activeId)}"]`)
      if (!item) return
      const itemTop = (item as HTMLElement).offsetTop
      const itemBottom = itemTop + (item as HTMLElement).offsetHeight
      const viewTop = list.scrollTop
      const viewBottom = viewTop + list.clientHeight
      if (itemTop < viewTop) {
        list.scrollTop = Math.max(0, itemTop - 8)
      } else if (itemBottom > viewBottom) {
        list.scrollTop = itemBottom - list.clientHeight + 8
      }
    })
  }, [activeId])

  if (headings.length === 0) return null

  const goTo = (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
      setActiveId(id)
    }
    setOpen(false)
  }

  const list = (
    <ul className="article-toc-list">
      {headings.map((heading) => (
        <li key={heading.id} className={`article-toc-item article-toc-level-${heading.level}${activeId === heading.id ? ' active' : ''}`}>
          <a href={`#${heading.id}`} onClick={(e) => goTo(e, heading.id)}>{heading.text}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <div ref={rootRef} className="article-toc-root">
      <aside className="article-toc article-toc-desktop" aria-label="Daftar isi">
        <nav aria-label="Daftar isi">
          <p className="article-toc-title">Daftar Isi</p>
          {list}
        </nav>
      </aside>
      <div className="article-toc-mobile">
        <button
          type="button"
          className="article-toc-toggle"
          aria-expanded={open}
          aria-controls="article-toc-mobile-list"
          onClick={() => setOpen((v) => !v)}
        >
          Daftar Isi
          <span aria-hidden="true">{open ? '▲' : '▼'}</span>
        </button>
        {open ? (
          <nav aria-label="Daftar isi" id="article-toc-mobile-list" onClick={(e) => {
            const anchor = (e.target as HTMLElement).closest('a')
            if (anchor) setOpen(false)
          }}>
            {list}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
