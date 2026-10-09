import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="cta-wrap">
      <div className="cta">
        <div className="cta__copy">
          <h2>Ready to Explore Norway?</h2>
          <p>Start your journey today with expert planning, seamless booking, and unforgettable experiences.</p>
        </div>
        <div className="cta__actions">
          <Link href="/about" className="btn btn--outline">Learn more</Link>
          <Link href="/explore" className="btn btn--black">Start Your Adventure</Link>
        </div>
      </div>
    </section>
  );
}
