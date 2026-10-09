import Image from "next/image";
import Header from "./Header";

const stats = [
  { value: "3K+", label: "Beautiful Destinations" },
  { value: "8+", label: "Years of Expertise" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "4.5", label: "User Rating" },
];

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/hero.jpg"
        alt="Rocky Norwegian coastline with a red cabin under a stormy sky"
        fill
        priority
        sizes="100vw"
        className="hero__bg"
      />
      <div className="hero__shade" />
      <Header currentPage="Home" />
      <div className="hero__content">
        <h1>
          Discover Norway’s
          <br />
          {" "}Breathtaking Beauty
        </h1>
        <p>
          Embark on a journey through Norway’s stunning fjords, vibrant cities, and Northern
          Lights. Your gateway to unforgettable experiences!
        </p>
        <a href="#destinations" className="btn btn--black">Explore now</a>
      </div>
      <dl className="hero__stats">
        {stats.map((s) => (
          <div key={s.label}>
            <dt>{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
