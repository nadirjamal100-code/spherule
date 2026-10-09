import Image from "next/image";

const items = [
  { quote: "“I didn’t just visit Norway—I experienced its soul. A magical journey through fjords and mountains.”", name: "Jordan Blake", role: "Co-Founder, SnapWave", src: "/images/avatar-jordan.jpg" },
  { quote: "“With this platform, I discovered hidden gems, from Arctic landscapes to cozy Scandinavian villages.”", name: "Taylor Morgan", role: "Co-Founder, ClipNest", src: "/images/avatar-taylor.jpg" },
  { quote: "“Exploring the vibrant culture of Norway opened my eyes to new traditions and culinary delights.”", name: "Avery Chen", role: "Co-Founder, TrendSphere", src: "/images/avatar-avery.jpg" },
];

export default function Testimonials() {
  const cards = () =>
    items.map((t) => (
      <li key={t.name} className="quote-card">
        <blockquote>{t.quote.replace(/[“”]/g, '"')}</blockquote>
        <div className="quote-card__author">
          <Image src={t.src} alt="" width={56} height={56} />
          <div>
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </div>
        </div>
      </li>
    ));

  return (
    <section className="section testimonials">
      <div className="section__head container">
        <h2>
          Hear What Travelers Say About Their
          <br className="br-lg" /> Nordic Adventure!
        </h2>
      </div>
      <div className="testimonials__track" role="region" aria-label="Traveler testimonials">
        <div className="testimonials__marquee">
          <ul className="testimonials__group">{cards()}</ul>
          <ul className="testimonials__group" aria-hidden="true">{cards()}</ul>
        </div>
      </div>
    </section>
  );
}
