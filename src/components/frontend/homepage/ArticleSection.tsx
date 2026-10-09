import { Button } from "@/components/ui/Button";
import type { Article } from "@/types/article";
import { HomeArticleCarousel } from "./HomeArticleCarousel";

export function ArticleSection({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;
  return (
    <section className="home-article-section" aria-labelledby="home-articles-title">
      <div className="container">
        <div className="home-article-layout">
          <div className="home-article-intro">
            <h2 className="home-article-heading" id="home-articles-title">
              Jelajahi Artikel dan Wawasan Kami
            </h2>
            <p className="home-article-desc">
              Temukan informasi terbaru, panduan perpajakan, dan wawasan praktis untuk membantu Anda
              memahami serta mengelola kebutuhan pajak dengan lebih baik.
            </p>
            <Button href="/tulisan-pajak" className="btn-outline-navy home-article-all-btn">
              Lihat Semua Artikel <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Button>
          </div>
          <HomeArticleCarousel articles={articles} />
        </div>
      </div>
    </section>
  );
}
