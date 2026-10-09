"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const items = [
  { name: "Oslo", src: "/images/oslo.jpg", alt: "Fjord seen from a cliff near Oslo" },
  { name: "Bergen", src: "/images/bergen.jpg", alt: "Misty valley and fjord near Bergen" },
  { name: "Tromsø", src: "/images/tromso.jpg", alt: "Snow-capped mountains above a fjord near Tromsø" },
];

const Chevron = ({ dir }: { dir: "left" | "right" }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d={dir === "left" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Destinations() {
  const track = useRef<HTMLUListElement>(null);
  const [firstItem, setFirstItem] = useState(0);

  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    setFirstItem((current) => (current + dir + items.length) % items.length);
    el.scrollTo({ left: 0, behavior: "smooth" });
  };
  const orderedItems = [...items.slice(firstItem), ...items.slice(0, firstItem)];

  return (
    <section id="destinations" className="section container destinations">
      <div className="section__head">
        <h2>
          Exploring Norway’s breathtaking
          <br className="br-lg" /> scenery &amp; landscapes
        </h2>
        <p className="section__lead section__lead--narrow">
          Discover Norway’s Wonders Effortlessly – Your shortcut to one-click adventures!
        </p>
      </div>

      <div className="carousel">
        <button type="button" className="carousel__btn carousel__btn--prev" aria-label="Previous destinations" onClick={() => scroll(-1)}>
          <Chevron dir="left" />
        </button>
        <ul className="carousel__track" ref={track}>
          {orderedItems.map((d) => (
            <li key={d.name} className="dest-card">
              <Image src={d.src} alt={d.alt} fill sizes="(max-width:700px) 80vw, (max-width:1024px) 45vw, 430px" />
              <div className="dest-card__label">
                <h3>{d.name}</h3>
                <span>Norway</span>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="carousel__btn carousel__btn--next" aria-label="Next destinations" onClick={() => scroll(1)}>
          <Chevron dir="right" />
        </button>
      </div>
    </section>
  );
}
