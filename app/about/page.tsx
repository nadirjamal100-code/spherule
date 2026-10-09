import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "About Us | Spherule",
  description:
    "Get to know Spherule: thoughtful tools and local insight for finding your own way through Norway.",
};

const values = [
  {
    number: "01",
    title: "Curiosity first",
    text: "Look past the obvious. The best moments are often the ones you didn’t plan for.",
  },
  {
    number: "02",
    title: "Your own pace",
    text: "A little structure helps. Space to wander makes the journey yours.",
  },
  {
    number: "03",
    title: "Here for the feeling",
    text: "We sweat the small details, so you can be right where you want to be.",
  },
];

const places = [
  {
    image: "/images/bergen.jpg",
    alt: "Colourful waterfront buildings in Bergen, Norway",
    label: "Small-city energy",
    place: "Bergen",
  },
  {
    image: "/images/cabin.jpg",
    alt: "A traditional cabin nestled in a Norwegian landscape",
    label: "A slower kind of stay",
    place: "The fjords",
  },
  {
    image: "/images/tromso.jpg",
    alt: "The Arctic landscape around Tromso",
    label: "Room to look up",
    place: "The Arctic",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <Image
          src="/images/sognefjord.jpg"
          alt="A quiet Norwegian fjord framed by steep green mountains"
          fill
          priority
          sizes="100vw"
          className="about-hero__image"
        />
        <div className="about-hero__shade" />
        <Header currentPage="About Us" />
        <div className="about-hero__copy">
          <span className="about-kicker">A DIFFERENT KIND OF TRAVEL PLANNER</span>
          <h1>Find your way to somewhere.</h1>
          <p>
            Thoughtful plans, local inspiration, and more room for the moments
            that make a trip yours.
          </p>
          <a href="#our-story" className="btn btn--white">
            Meet Spherule <span aria-hidden="true">↓</span>
          </a>
        </div>
        <span className="about-hero__caption">THOUGHTFUL PLANS. ROOM TO WANDER.</span>
      </section>

      <main>
        <section className="about-intro container" aria-labelledby="about-intro-title">
          <div className="about-intro__heading">
            <span className="explore-section-kicker">A NOTE ON WHY WE’RE HERE</span>
            <h2 id="about-intro-title">A good trip isn’t just a place. It’s a feeling.</h2>
          </div>
          <p>
            The first glimpse of a fjord. A town you almost drove past. The
            delicious freedom of having nowhere else to be. Spherule helps you
            find those moments, with inspiration and practical guidance for
            discovering Norway in a way that feels like you.
          </p>
        </section>

        <section className="about-story container" id="our-story" aria-labelledby="about-story-title">
          <div className="about-story__copy">
            <span className="explore-section-kicker">A SMALL IDEA, A BIG WORLD</span>
            <h2 id="about-story-title">We think getting there should feel like part of it.</h2>
            <p>
              Spherule started with a simple thought: planning a trip should
              build the excitement, not get in its way. So we pair the places
              you’re dreaming about with practical details that make them
              easier to reach.
            </p>
            <p>
              Norway is where we begin — with quiet fjords, big skies, and
              little towns worth taking the scenic route for. We hope it’s the
              start of a journey that feels completely your own.
            </p>
            <Link href="/explore" className="blog-read-link">
              Find your Norway <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="about-story__image">
            <Image
              src="/images/lodge.jpg"
              alt="A small cabin tucked into Norway's dramatic mountain landscape"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
            <span className="about-story__image-label">TAKE THE LONG WAY. YOU’RE NOT IN A RUSH.</span>
          </div>
        </section>

        <section className="about-places container" aria-labelledby="about-places-title">
          <div className="about-section-heading">
            <div>
              <span className="explore-section-kicker">A FEW PLACES THAT INSPIRE US</span>
              <h2 id="about-places-title">There’s more than one way to find Norway.</h2>
            </div>
            <Link href="/explore" className="blog-read-link">
              Explore all places <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ul className="about-places__grid">
            {places.map((place) => (
              <li className="about-place-card" key={place.place}>
                <Image src={place.image} alt={place.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                <span className="about-place-card__label">{place.label}</span>
                <h3>{place.place}</h3>
              </li>
            ))}
          </ul>
        </section>

        <section className="about-values-wrap" aria-labelledby="about-values-title">
          <div className="about-values container">
            <div className="about-values__heading">
              <span className="explore-section-kicker">OUR NORTH STARS</span>
              <h2 id="about-values-title">The Spherule way.</h2>
              <p>Less checklist, more feeling. A few things we keep close.</p>
            </div>
            <ol className="about-values__grid">
              {values.map((value) => (
                <li className="about-value" key={value.number}>
                  <span className="about-value__number">{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-cta container" aria-labelledby="about-cta-title">
          <div>
            <span className="about-kicker">NORWAY IS CALLING</span>
            <h2 id="about-cta-title">Go see what stays with you.</h2>
            <p>Start with a place. Leave room for everything you find along the way.</p>
          </div>
          <Link href="/explore" className="btn btn--white">
            Explore Norway <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
