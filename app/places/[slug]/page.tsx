import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getPlace, places } from "@/components/placesData";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) return { title: "Place not found | Spherule" };

  return {
    title: `${place.name} | Explore Norway with Spherule`,
    description: place.intro,
  };
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = getPlace(slug);
  if (!place) notFound();

  const relatedPlaces = places
    .filter((item) => item.category === place.category && item.slug !== place.slug)
    .slice(0, 3);

  return (
    <>
      <section className="place-hero">
        <Image
          src={place.image}
          alt={place.alt}
          fill
          priority
          sizes="100vw"
          className="place-hero__image"
        />
        <div className="place-hero__shade" />
        <Header currentPage="Explore" />
        <Link href="/explore#places" className="place-back">
          <span aria-hidden="true">←</span> All places
        </Link>
        <div className="place-hero__copy">
          <span className="place-hero__category">{place.category} · NORWAY</span>
          <h1>{place.name}</h1>
          <p className="place-hero__region"><PinIcon /> {place.region}</p>
          <div className="place-hero__rating">
            <span aria-hidden="true">★</span> {place.rating}
            <span className="place-hero__rating-caption">traveller rating</span>
          </div>
        </div>
        <a href="#place-guide" className="place-hero__scroll">
          Discover this place <span aria-hidden="true">↓</span>
        </a>
      </section>

      <main className="place-main container" id="place-guide">
        <section className="place-intro">
          <div>
            <span className="explore-section-kicker">A PLACE TO GET TO KNOW</span>
            <h2>Somewhere worth slowing down for.</h2>
          </div>
          <p>{place.intro}</p>
        </section>

        <section className="place-facts" aria-label={`${place.name} travel information`}>
          <div className="place-fact">
            <span className="place-fact__label">A good fit for</span>
            <span className="place-fact__value">{place.detail}</span>
          </div>
          <div className="place-fact">
            <span className="place-fact__label">Best time to visit</span>
            <span className="place-fact__value">{place.bestTime}</span>
          </div>
          <div className="place-fact">
            <span className="place-fact__label">Where you’ll be</span>
            <span className="place-fact__value">{place.region}</span>
          </div>
        </section>

        <section className="place-story">
          <div className="place-story__heading">
            <span className="explore-section-kicker">MAKE IT YOURS</span>
            <h2>A few ideas for the way.</h2>
          </div>
          <div className="place-story__content">
            <article>
              <span className="place-story__number">01</span>
              <div>
                <h3>Take the scenic route</h3>
                <p>{place.experience}</p>
              </div>
            </article>
            <article>
              <span className="place-story__number">02</span>
              <div>
                <h3>A little local know-how</h3>
                <p>{place.localTip}</p>
              </div>
            </article>
            <div className="place-story__note">
              <span aria-hidden="true">✳</span>
              <p>Good journeys begin with curiosity, comfortable shoes, and room for a detour.</p>
            </div>
          </div>
        </section>

        {relatedPlaces.length > 0 && (
          <section className="place-related">
            <div className="place-related__heading">
              <div>
                <span className="explore-section-kicker">IF YOU HAVE A LITTLE MORE TIME</span>
                <h2>Keep exploring nearby.</h2>
              </div>
              <Link href="/explore#places" className="blog-read-link">
                All destinations <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <ul className="place-related__grid">
              {relatedPlaces.map((related) => (
                <li className="explore-card" key={related.slug}>
                  <Link href={`/places/${related.slug}`} className="explore-card__link">
                    <div className="explore-card__image">
                      <Image src={related.image} alt={related.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      <span className="explore-card__category">{related.category}</span>
                    </div>
                    <div className="explore-card__copy">
                      <h3>{related.name}</h3>
                      <p className="explore-card__region"><PinIcon /> {related.region}</p>
                      <p className="explore-card__detail">{related.detail}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
