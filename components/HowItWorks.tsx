import Image from "next/image";
import Link from "next/link";

const Pin = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2.5a5.5 5.5 0 0 0-5.5 5.5c0 3.8 5.5 9 5.5 9s5.5-5.2 5.5-9A5.5 5.5 0 0 0 12 2.5Z" fill="currentColor" />
    <circle cx="12" cy="8" r="2" fill="#f5f5f5" />
    <ellipse cx="12" cy="19.5" rx="7.5" ry="2.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const Bag = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 6V4.8c0-.7.6-1.3 1.3-1.3h3.4c.7 0 1.3.6 1.3 1.3V6" stroke="currentColor" strokeWidth="1.8" />
    <rect x="3" y="6" width="18" height="14.5" rx="2.5" fill="currentColor" />
    <path d="M8.5 6v14.5M15.5 6v14.5" stroke="#f5f5f5" strokeWidth="1.4" />
  </svg>
);
const Route = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M17 2.5a4 4 0 0 0-4 4c0 3 4 6.5 4 6.5s4-3.500 4-6.500a4 4 0 0 0-4-4Z" fill="currentColor" />
    <circle cx="17" cy="6.5" r="1.4" fill="#f5f5f5" />
    <circle cx="5" cy="19" r="1.8" fill="currentColor" />
    <path d="M6.8 19H10a3 3 0 0 0 0-6H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const steps = [
  { icon: <Pin />, title: "Choose Your Destination", text: "Select from thousands of beautiful places" },
  { icon: <Bag />, title: "Personalize Your Trip", text: "Get custom itineraries tailored to your preferences" },
  { icon: <Route />, title: "Travel Effortlessly", text: "Book and explore Norway without hassle" },
];

export default function HowItWorks() {
  return (
    <section className="section container how">
      <div className="how__copy">
        <h2>How Our Platform Works</h2>
        <p className="how__lead">
          Set your travel goals, optimize your itinerary, and explore Norway with ease. Our smart
          technology helps you plan the perfect adventure, from fjord cruises to Northern Lights
          excursions.
        </p>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.title} className="step">
              <span className="step__icon">{s.icon}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link href="/explore" className="btn btn--black">Explore destinations</Link>
      </div>
      <div className="how__media">
        <Image
          src="/images/platform.jpg"
          alt="Yellow rowboat on a still green fjord surrounded by mountains"
          fill
          sizes="(max-width:1024px) 100vw, 577px"
        />
      </div>
    </section>
  );
}
