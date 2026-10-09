import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DEMO_CONTACT_EMAIL } from "@/components/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Spherule",
  description:
    "Have a question or an idea for your Norway trip? Send Spherule a note and get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <Image
          src="/images/naeroyfjord.jpg"
          alt="A narrow Norwegian fjord surrounded by steep mountains"
          fill
          priority
          sizes="100vw"
          className="contact-hero__image"
        />
        <div className="contact-hero__shade" />
        <Header currentPage="Contact" />
        <div className="contact-hero__copy">
          <span className="contact-kicker">WE’RE ALL EARS</span>
          <h1>Let’s talk about the journey.</h1>
          <p>Questions, ideas, or just a good Norway story? We’d love to hear from you.</p>
        </div>
        <span className="contact-hero__caption">A NOTE CAN BE THE START OF ANYTHING</span>
      </section>

      <main className="contact-main container">
        <aside className="contact-aside" aria-labelledby="contact-aside-title">
          <span className="explore-section-kicker">GET IN TOUCH</span>
          <h2 id="contact-aside-title">A real person is on the other side.</h2>
          <p className="contact-aside__intro">
            Tell us what you’re thinking. We’ll point you in the right direction.
          </p>

          <div className="contact-options">
            <a className="contact-option" href={`mailto:${DEMO_CONTACT_EMAIL}`}>
              <span className="contact-option__icon" aria-hidden="true">@</span>
              <span>
                <span className="contact-option__label">DEMO EMAIL</span>
                <span className="contact-option__value">{DEMO_CONTACT_EMAIL}</span>
              </span>
              <span className="contact-option__arrow" aria-hidden="true">↗</span>
            </a>
            <Link className="contact-option" href="/explore">
              <span className="contact-option__icon" aria-hidden="true">↗</span>
              <span>
                <span className="contact-option__label">PLANNING A TRIP?</span>
                <span className="contact-option__value">Browse Norway destinations</span>
              </span>
              <span className="contact-option__arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="contact-option" href="/blog">
              <span className="contact-option__icon" aria-hidden="true">✳</span>
              <span>
                <span className="contact-option__label">NEED INSPIRATION?</span>
                <span className="contact-option__value">Read stories from the north</span>
              </span>
              <span className="contact-option__arrow" aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="contact-aside__note">
            <span aria-hidden="true">“</span>
            <p>The best journeys often start with a simple question.</p>
          </div>
        </aside>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
