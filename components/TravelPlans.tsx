import Image from "next/image";
import Link from "next/link";

const plans = [
  { title: "Fjordview Cabin Retreat", place: "Geiranger, Norway", price: 220, rating: "4.9", src: "/images/cabin.jpg", alt: "Snow-covered wooden cabins in the mountains" },
  { title: "Northern Lights Lodge", place: "Tromsø, Norway", price: 250, rating: "4.3", src: "/images/lodge.jpg", alt: "White church glowing under the northern lights" },
  { title: "Oslo Forest Hideaway", place: "Oslo, Norway", price: 200, rating: "4.9", src: "/images/hideaway.jpg", alt: "Wooden boathouse by a forest lake" },
];

const Star = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2 3 6.6 7.2.8-5.4 4.8 1.5 7.1L12 17.7 5.7 21.3l1.5-7.1L1.800 9.400 9 8.600 12 2Z" fill="#FFB400" />
  </svg>
);

export default function TravelPlans() {
  return (
    <section className="section container plans">
      <div className="section__head">
        <h2>Flexible Travel Plans for Every Explorer</h2>
        <p className="section__lead section__lead--wide">
          Set your travel goals, optimize your itinerary, and explore Norway with ease. Our smart
          technology helps you plan the perfect adventure, from fjord cruises to Northern Lights
          excursions.
        </p>
      </div>
      <ul className="plans__grid">
        {plans.map((p) => (
          <li key={p.title} className="plan-card">
            <Image src={p.src} alt={p.alt} fill sizes="(max-width:700px) 100vw, (max-width:1024px) 50vw, 430px" />
            <div className="plan-card__panel">
              <h3>{p.title}</h3>
              <p className="plan-card__place">{p.place}</p>
              <div className="plan-card__row">
                <span className="plan-card__price">
                  ${p.price}/<small>Night</small>
                </span>
                <span className="plan-card__rating">
                  <Star /> {p.rating}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="plans__more">
        <Link href="/explore" className="btn btn--black">Explore more</Link>
      </div>
    </section>
  );
}
