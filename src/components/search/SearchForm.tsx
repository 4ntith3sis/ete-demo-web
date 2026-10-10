'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Suggestion = {
  title: string
  slug: string
  category: string | null
  publishedDate: string | null
  thumbnailUrl: string | null
}

const SUGGEST_DEBOUNCE_MS = 300
const SUGGEST_MIN_LENGTH = 2

function formatDate(value: string | null): string | null {
  if (!value) return null
  try {
    return new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return null
  }
}

function HighlightedTitle({ title, query }: { title: string; query: string }) {
  const q = query.trim()
  if (q.length < SUGGEST_MIN_LENGTH) return <>{title}</>
  const lower = title.toLowerCase()
  const needle = q.toLowerCase()
  const parts: React.ReactNode[] = []
  let i = 0
  let key = 0
  for (;;) {
    const idx = lower.indexOf(needle, i)
    if (idx < 0) {
      parts.push(<React.Fragment key={key++}>{title.slice(i)}</React.Fragment>)
      break
    }
    if (idx > i) parts.push(<React.Fragment key={key++}>{title.slice(i, idx)}</React.Fragment>)
    parts.push(<strong key={key++} style={{ fontWeight: 800 }}>{title.slice(idx, idx + needle.length)}</strong>)
    i = idx + needle.length
  }
  return <>{parts}</>
}

export function SearchForm({ initialQuery = '', wide = false }: { initialQuery?: string; wide?: boolean }) {
  const router = useRouter()
  const [query, setQuery] = React.useState(initialQuery)
  const [suggestOpen, setSuggestOpen] = React.useState(false)
  const [suggestLoading, setSuggestLoading] = React.useState(false)
  const [suggestError, setSuggestError] = React.useState<string | null>(null)
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([])
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const requestIdRef = React.useRef(0)

  const goToResults = (rawQuery: string) => {
    const q = rawQuery.trim()
    if (q.length < 2) return
    setSuggestOpen(false)
    router.push(`/tulisan-pajak/pencarian?q=${encodeURIComponent(q)}`)
  }

  const runSearch = async (event: React.FormEvent) => {
    event.preventDefault()
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      window.location.href = `/tulisan-pajak/${suggestions[activeIndex].slug}`
      return
    }
    goToResults(query)
  }

  React.useEffect(() => {
    const q = query.trim()
    setActiveIndex(-1)
    if (q.length < SUGGEST_MIN_LENGTH) {
      setSuggestions([])
      setSuggestError(null)
      setSuggestLoading(false)
      return
    }
    setSuggestLoading(true)
    setSuggestError(null)
    const id = requestIdRef.current + 1
    requestIdRef.current = id
    const controller = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/suggest?q=${encodeURIComponent(q)}`, { signal: controller.signal })
        if (!res.ok) throw new Error('bad status')
        const json = (await res.json()) as { suggestions?: Suggestion[] }
        if (requestIdRef.current !== id) return
        setSuggestions(json.suggestions ?? [])
        setSuggestOpen(true)
      } catch (e) {
        if ((e as Error).name === 'AbortError') return
        if (requestIdRef.current !== id) return
        setSuggestions([])
        setSuggestError('Gagal memuat hasil pencarian. Coba lagi.')
        setSuggestOpen(true)
      } finally {
        if (requestIdRef.current === id) setSuggestLoading(false)
      }
    }, SUGGEST_DEBOUNCE_MS)
    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query])

  React.useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setSuggestOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  const goToSuggestion = (slug: string) => {
    setSuggestOpen(false)
    setSuggestLoading(false)
    window.location.href = `/tulisan-pajak/${slug}`
  }

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSuggestOpen(false)
      return
    }
    if (!suggestOpen || suggestions.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((v) => (v + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((v) => (v <= 0 ? suggestions.length - 1 : v - 1))
    }
  }

  const showDropdown = suggestOpen && query.trim().length >= SUGGEST_MIN_LENGTH

  return (
    <div>
      <div ref={wrapRef} style={{ position: 'relative', maxWidth: wide ? 'none' : 576 }}>
      <form className="article-search" onSubmit={runSearch} role="search" style={{ position: 'relative', marginTop: 32, maxWidth: 'none' }}>
        <i className="fa-solid fa-magnifying-glass" />
        <input
          placeholder="Cari artikel perpajakan, akuntansi, atau keuangan bisnis..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if (suggestions.length > 0 || suggestError) setSuggestOpen(true) }}
          onKeyDown={onInputKeyDown}
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls="article-suggest-list"
          aria-autocomplete="list"
          autoComplete="off"
        />
        <button className="btn btn-primary" type="submit">Cari Artikel</button>
      </form>
      {showDropdown ? (
        <div
          id="article-suggest-list"
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: 14,
            boxShadow: '0 18px 44px rgba(10,22,40,0.16)',
            overflow: 'hidden',
            zIndex: 60,
            color: '#0a1628',
            textAlign: 'left',
          }}
        >
          <p style={{ margin: 0, padding: '10px 16px 6px', fontSize: 12, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#64748b' }}>
            Artikel terkait
          </p>
          {suggestLoading ? (
            <p style={{ margin: 0, padding: '8px 16px 16px', fontSize: 14, color: '#64748b' }}>Mencari artikel…</p>
          ) : suggestError ? (
            <p style={{ margin: 0, padding: '8px 16px 16px', fontSize: 14, color: '#dc2626' }}>{suggestError}</p>
          ) : suggestions.length === 0 ? (
            <p style={{ margin: 0, padding: '8px 16px 16px', fontSize: 14, color: '#64748b' }}>
              Tidak ada artikel terkait dengan “{query.trim()}”
            </p>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: '4px 8px 8px', maxHeight: 380, overflowY: 'auto' }}>
              {suggestions.map((s, i) => {
                const date = formatDate(s.publishedDate)
                return (
                  <li key={s.slug} role="option" aria-selected={i === activeIndex}>
                    <a
                      href={`/tulisan-pajak/${s.slug}`}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => { e.preventDefault(); goToSuggestion(s.slug) }}
                      onMouseEnter={() => setActiveIndex(i)}
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'center',
                        padding: '10px 10px',
                        borderRadius: 10,
                        textDecoration: 'none',
                        color: 'inherit',
                        background: i === activeIndex ? '#f1f5f9' : 'transparent',
                      }}
                    >
                      {s.thumbnailUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={s.thumbnailUrl}
                          alt=""
                          loading="lazy"
                          style={{ width: 52, height: 52, borderRadius: 10, objectFit: 'cover', flexShrink: 0, background: '#f1f5f9' }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                        />
                      ) : (
                        <span style={{ width: 52, height: 52, borderRadius: 10, background: '#f1f5f9', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: 20, flexShrink: 0 }}>📰</span>
                      )}
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: 'block', fontWeight: 700, fontSize: 14.5, lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          <HighlightedTitle title={s.title} query={query} />
                        </span>
                        <span style={{ display: 'block', fontSize: 12.5, color: '#64748b', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {[s.category, date].filter(Boolean).join(' • ')}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
          {!suggestLoading && !suggestError && suggestions.length > 0 ? (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => goToResults(query)}
              style={{ display: 'block', width: '100%', padding: '12px 16px', border: 'none', borderTop: '1px solid #e2e8f0', background: '#f8fafc', color: '#0a1628', fontWeight: 700, fontSize: 13.5, cursor: 'pointer' }}
            >
              Lihat semua hasil →
            </button>
          ) : null}
        </div>
      ) : null}
      </div>
    </div>
  )
}
