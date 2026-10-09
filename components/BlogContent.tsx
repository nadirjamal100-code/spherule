"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { blogArticles, blogCategories } from "./blogData";

export default function BlogContent() {
  const [category, setCategory] = useState<(typeof blogCategories)[number]>("All stories");
  const [query, setQuery] = useState("");
  const featuredArticle = blogArticles[0];

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return blogArticles.slice(1).filter((article) => {
      const matchesCategory = category === "All stories" || article.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${article.title} ${article.category} ${article.excerpt}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="blog-hero">
        <Image
          src="/images/hero.jpg"
          alt="A rugged Norwegian coastline beneath a moody sky"
          fill
          priority
          sizes="100vw"
          className="blog-hero__image"
        />
        <div className="blog-hero__shade" />
        <Header currentPage="Blog" />
        <div className="blog-hero__copy">
          <span className="blog-kicker">NOTES FROM THE NORTH</span>
          <h1>Stories for the<br />scenic route.</h1>
          <p>Thoughtful guides, local finds, and little reasons to take the long way around.</p>
          <a href="#stories" className="btn btn--white">Find your next read</a>
        </div>
        <span className="blog-hero__caption">NORWAY, AT YOUR OWN PACE</span>
      </section>

      <main className="blog-main container">
        <section className="blog-feature" aria-labelledby="blog-feature-title">
          <Link href={`/blog/${featuredArticle.slug}`} className="blog-feature__image">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              fill
              sizes="(max-width: 700px) 100vw, 52vw"
            />
            <span className="blog-feature__image-label">THE SLOW TRAVEL JOURNAL</span>
          </Link>
          <div className="blog-feature__copy">
            <span className="blog-article-category">{featuredArticle.category}</span>
            <h2 id="blog-feature-title">
              <Link href={`/blog/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
            </h2>
            <p>{featuredArticle.excerpt}</p>
            <div className="blog-meta">
              <span>{featuredArticle.date}</span><span aria-hidden="true">·</span><span>{featuredArticle.readTime}</span>
            </div>
            <Link href={`/blog/${featuredArticle.slug}`} className="blog-read-link">
              Read the story <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section id="stories" className="blog-stories" aria-labelledby="blog-stories-title">
          <div className="blog-stories__heading">
            <div>
              <span className="explore-section-kicker">FIELD NOTES &amp; FAVOURITES</span>
              <h2 id="blog-stories-title">A little inspiration.</h2>
            </div>
            <label className="blog-search">
              <span className="sr-only">Search stories</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
                <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search stories"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>

          <div className="blog-toolbar">
            <div className="blog-filters" aria-label="Filter stories by category">
              {blogCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`explore-filter${category === item ? " is-active" : ""}`}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="explore-count" aria-live="polite">
              {filteredArticles.length} {filteredArticles.length === 1 ? "story" : "stories"}
            </p>
          </div>

          {filteredArticles.length ? (
            <ul className="blog-grid">
              {filteredArticles.map((article) => (
                <li className="blog-card" key={article.slug}>
                  <Link href={`/blog/${article.slug}`} className="blog-card__image">
                    <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <span className="blog-card__category">{article.category}</span>
                  </Link>
                  <div className="blog-card__copy">
                    <div className="blog-meta"><span>{article.date}</span><span aria-hidden="true">·</span><span>{article.readTime}</span></div>
                    <h3><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
                    <p>{article.excerpt}</p>
                    <Link href={`/blog/${article.slug}`} className="blog-read-link">Read story <span aria-hidden="true">↗</span></Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="explore-empty">
              <h3>No stories found.</h3>
              <p>Try a different search or category.</p>
              <button type="button" className="btn btn--outline" onClick={() => { setQuery(""); setCategory("All stories"); }}>
                Clear filters
              </button>
            </div>
          )}
        </section>

        <aside className="blog-signoff">
          <span aria-hidden="true">✳</span>
          <p>Good journeys begin with a little curiosity.</p>
          <Link href="/explore" className="blog-read-link">Explore Norway <span aria-hidden="true">↗</span></Link>
        </aside>
      </main>
      <Footer />
    </>
  );
}
