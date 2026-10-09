"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { places } from "./placesData";

const categories = ["All places", "Fjords", "Arctic", "Cities", "Nature"] as const;

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export default function ExploreContent() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All places");
  const [query, setQuery] = useState("");

  const filteredPlaces = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return places.filter((place) => {
      const matchesCategory = category === "All places" || place.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${place.name} ${place.region} ${place.category} ${place.detail}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <section className="explore-hero">
        <div className="explore-hero__visual">
          <Image
            src="/images/hero.jpg"
            alt="A Norwegian coastal cabin on a dramatic fjord landscape"
            fill
            priority
            sizes="100vw"
            className="explore-hero__image"
          />
          <div className="explore-hero__shade" />
        </div>
        <Header currentPage="Explore" />
        <div className="explore-hero__copy">
          <span className="explore-eyebrow">THE NORWEGIAN EDITION</span>
          <h1>Find your own<br />kind of somewhere.</h1>
          <p>
            From the stillness of the fjords to the glow of the Arctic, your next
            unforgettable place is closer than you think.
          </p>
        </div>
        <form
          className="explore-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="explore-search__field">
            <span className="explore-search__icon"><SearchIcon /></span>
            <span className="explore-search__input-wrap">
              <span className="explore-search__label">Where to?</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search destinations"
                aria-label="Search places or experiences"
              />
            </span>
          </label>
          <a href="#places" className="btn btn--black explore-search__button">
            Explore places
          </a>
        </form>
      </section>

      <main className="explore-main container" id="places">
        <div className="explore-intro">
          <div>
            <span className="explore-section-kicker">A LITTLE FURTHER NORTH</span>
            <h2>Places that stay with you.</h2>
          </div>
          <p>
            Big nature, small moments, and everywhere in between. Find the
            Norway that feels like yours.
          </p>
        </div>

        <div className="explore-toolbar">
          <div className="explore-filters" aria-label="Filter places by type">
            {categories.map((item) => (
              <button
                className={`explore-filter${category === item ? " is-active" : ""}`}
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="explore-count" aria-live="polite">
            {filteredPlaces.length} {filteredPlaces.length === 1 ? "place" : "places"} to discover
          </p>
        </div>

        {filteredPlaces.length > 0 ? (
          <ul className="explore-grid">
            {filteredPlaces.map((place) => (
              <li className="explore-card" key={place.name}>
                <Link href={`/places/${place.slug}`} className="explore-card__link">
                  <div className="explore-card__image">
                    <Image
                      src={place.image}
                      alt={place.alt}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="explore-card__category">{place.category}</span>
                    <span className="explore-card__rating" aria-label={`Rated ${place.rating} out of 5`}>
                      <span aria-hidden="true">★</span> {place.rating}
                    </span>
                  </div>
                  <div className="explore-card__copy">
                    <h3>{place.name}</h3>
                    <p className="explore-card__region"><PinIcon /> {place.region}</p>
                    <p className="explore-card__detail">{place.detail}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="explore-empty">
            <h3>No places found just yet.</h3>
            <p>Try another search or choose a different kind of escape.</p>
            <button type="button" className="btn btn--outline" onClick={() => { setQuery(""); setCategory("All places"); }}>
              Clear filters
            </button>
          </div>
        )}

        <div className="explore-note">
          <span aria-hidden="true">✳</span>
          <p>Take the scenic route. The best discoveries rarely stick to a plan.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
