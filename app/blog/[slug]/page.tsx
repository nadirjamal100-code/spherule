import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { blogArticles, getBlogArticle } from "@/components/blogData";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return { title: "Story not found | Spherule" };

  return {
    title: `${article.title} | The Spherule Journal`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  const relatedArticles = blogArticles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 2);

  return (
    <>
      <section className="article-hero">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          sizes="100vw"
          className="article-hero__image"
        />
        <div className="article-hero__shade" />
        <Header currentPage="Blog" />
        <Link href="/blog" className="article-back">
          <span aria-hidden="true">←</span> The journal
        </Link>
        <div className="article-hero__copy">
          <span className="blog-kicker">{article.category.toUpperCase()} · {article.readTime.toUpperCase()}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <span className="article-hero__date">{article.date}</span>
        </div>
      </section>

      <main className="article-main">
        <article className="article-body">
          <p className="article-intro">{article.intro}</p>
          {article.sections.map((section) => (
            <section className="article-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <div className="article-endnote">
            <span aria-hidden="true">✳</span>
            <p>Take only memories. Leave only the gentlest footprints.</p>
          </div>
          <Link href="/blog" className="article-return">← Back to all stories</Link>
        </article>
      </main>

      {relatedArticles.length > 0 && (
        <section className="article-related container">
          <span className="explore-section-kicker">KEEP WANDERING</span>
          <h2>More from the journal.</h2>
          <ul className="article-related__grid">
            {relatedArticles.map((related) => (
              <li className="blog-card" key={related.slug}>
                <Link href={`/blog/${related.slug}`} className="blog-card__image">
                  <Image src={related.image} alt={related.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <span className="blog-card__category">{related.category}</span>
                </Link>
                <div className="blog-card__copy">
                  <h3><Link href={`/blog/${related.slug}`}>{related.title}</Link></h3>
                  <p>{related.excerpt}</p>
                  <Link href={`/blog/${related.slug}`} className="blog-read-link">Read story <span aria-hidden="true">↗</span></Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
      <Footer />
    </>
  );
}
