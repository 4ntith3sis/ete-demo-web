'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

import { ArticleCard } from '@/components/frontend/cards/ArticleCard'
import type { Article } from '@/types/article'

type SearchResult = {
  title: string
  slug: string
  excerpt: string
  category: string | null
  publishedDate: string | null
  score: number
}

type Category = { id: number | string; name: string; slug: string }

function SkeletonCards() {
  return (
    <div className="blog-grid" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div className="blog-card" key={i}>
          <div className="blog-thumb" style={{ background: '#eef2f7' }} />
          <div className="blog-body">
            <div style={{ height: 18, borderRadius: 6, background: '#eef2f7', marginBottom: 10 }} />
            <div style={{ height: 14, borderRadius: 6, background: '#f4f7fb' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function SearchResultsView({ articles, categories }: { articles: Article[]; categories: Category[] }) {
  const searchParams = useSearchParams()
  const q = (searchParams.get('q') ?? '').trim()
  const [slugs, setSlugs] = React.useState<string[] | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [attempt, setAttempt] = React.useState(0)
  const [selected, setSelected] = React.useState<string>('all')

  const bySlug = React.useMemo(() => {
    const map = new Map<string, Article>()
    for (const article of articles) map.set(article.slug, article)
    return map
  }, [articles])

  React.useEffect(() => {
    setSelected('all')
    if (q.length < 2) {
      setSlugs(null)
      setLoading(false)
      setError(false)
      return
    }
    const controller = new AbortController()
    setLoading(true)
    setError(false)
    setSlugs(null)
    const run = async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: controller.signal })
        if (!res.ok) throw new Error('bad status')
        const json = (await res.json()) as { results?: SearchResult[] }
        // Preserve RAG ranking; join with published CMS articles only.
        // Stale index entries (unpublished/deleted) are dropped.
        const ordered = (json.results ?? []).map((r) => r.slug).filter((slug) => bySlug.has(slug))
        setSlugs(ordered)
      } catch (e) {
        if ((e as Error).name === 'AbortError') return
        setError(true)
        setSlugs(null)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }
    run()
    return () => controller.abort()
  }, [q, attempt, bySlug])

  const matched = (slugs ?? []).map((slug) => bySlug.get(slug) as Article)
  const filtered = selected === 'all' ? matched : matched.filter((article) => article.categorySlug === selected)

  return (
    <div>
      <h2 style={{ color: '#0a1628', fontSize: '1.9rem', fontWeight: 800, margin: '0 0 8px' }}>Hasil Pencarian</h2>
      {q.length >= 2 ? (
        <p style={{ color: '#64748b', fontSize: 15, margin: '0 0 20px' }}>
          Hasil pencarian untuk <strong style={{ color: '#0a1628' }}>“{q}”</strong>
        </p>
      ) : null}
      {q.length < 2 ? (
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px', fontWeight: 700, color: '#0a1628' }}>Masukkan kata kunci pencarian</p>
          <p style={{ margin: '0 0 16px', color: '#64748b', fontSize: 14 }}>Ketik minimal 2 karakter lalu tekan Enter.</p>
          <a href="/tulisan-pajak" style={{ color: '#2563eb', fontWeight: 700, fontSize: 14 }}>← Kembali ke Artikel</a>
        </div>
      ) : loading ? (
        <>
          <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 16px' }}>Mencari artikel untuk “{q}”…</p>
          <SkeletonCards />
        </>
      ) : error ? (
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px', fontWeight: 700, color: '#0a1628' }}>Gagal memuat hasil pencarian.</p>
          <p style={{ margin: '0 0 16px', color: '#64748b', fontSize: 14 }}>Silakan coba lagi.</p>
          <button type="button" onClick={() => setAttempt((v) => v + 1)} style={{ background: '#f5c518', color: '#0a1628', border: 'none', borderRadius: 10, padding: '10px 22px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Coba Lagi
          </button>
        </div>
      ) : slugs !== null ? (
        slugs.length === 0 ? (
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', fontWeight: 700, color: '#0a1628' }}>Tidak ditemukan artikel untuk “{q}”</p>
            <p style={{ margin: '0 0 16px', color: '#64748b', fontSize: 14 }}>Coba gunakan kata kunci lain.</p>
            <a href="/tulisan-pajak" style={{ color: '#2563eb', fontWeight: 700, fontSize: 14 }}>← Kembali ke Artikel</a>
          </div>
        ) : (
          <>
            <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 16px' }}>
              Menampilkan {filtered.length} dari {slugs.length} artikel untuk “{q}”
            </p>
            {categories.length > 0 ? (
              <div className="article-filters" style={{ justifyContent: 'flex-start' }}>
                <button type="button" className={selected === 'all' ? 'active' : undefined} onClick={() => setSelected('all')}>Semua</button>
                {categories.map((category) => (
                  <button type="button" key={category.slug} className={selected === category.slug ? 'active' : undefined} onClick={() => setSelected(category.slug)}>
                    {category.name}
                  </button>
                ))}
              </div>
            ) : null}
            {filtered.length === 0 ? (
              <p style={{ color: '#64748b', textAlign: 'center', padding: '24px 0' }}>Tidak ada hasil pada kategori ini.</p>
            ) : (
              <div className="blog-grid">
                {filtered.map((article) => (
                  <ArticleCard article={article} key={article.slug} />
                ))}
              </div>
            )}
          </>
        )
      ) : null}
    </div>
  )
}
