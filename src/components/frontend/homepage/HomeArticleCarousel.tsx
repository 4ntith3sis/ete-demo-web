"use client";

import { useEffect, useRef, useState } from "react";
import { ArticleCard } from "@/components/frontend/cards/ArticleCard";
import type { Article } from "@/types/article";

export function HomeArticleCarousel({ articles }: { articles: Article[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [articles.length]);

  const scroll = (direction: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(".home-article-slide");
    const track = slide?.parentElement ?? null;
    const gap = track ? parseFloat(getComputedStyle(track).columnGap || "0") || 0 : 0;
    const step = slide ? slide.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * step, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="home-article-carousel">
      <div
        className="home-article-viewport"
        ref={viewportRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label="Artikel dan wawasan terbaru"
      >
        <div className="home-article-track">
          {articles.map((article) => (
            <div className="home-article-slide" key={article.slug}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>

      {articles.length > 1 ? (
        <>
          <button
            type="button"
            className="home-article-nav home-article-nav-prev"
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Artikel sebelumnya"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="home-article-nav home-article-nav-next"
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Artikel berikutnya"
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </>
      ) : null}
    </div>
  );
}
