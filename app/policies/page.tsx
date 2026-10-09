import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Site Policies | Spherule",
  description: "Demo terms, privacy, and cookie information for the Spherule website.",
};

const policies = [
  {
    id: "terms",
    title: "Terms",
    text: "Spherule is currently a demonstration website. Destination and stay information is for browsing inspiration only; this site does not take bookings or payments. These notes are placeholders, not binding terms. Final terms should be published before the site is used as a live travel service.",
  },
  {
    id: "privacy",
    title: "Privacy",
    text: "The Contact and newsletter forms prepare an email draft in your own email app. They do not submit your details to a Spherule server. If you choose to send a message, it is handled by your email provider and the demo inbox shown on the Contact page. This placeholder is not a complete privacy policy.",
  },
  {
    id: "cookies",
    title: "Cookies",
    text: "This demonstration site does not currently provide cookie preference controls. Any cookies or local storage required by the hosting environment or framework should be reviewed before launch. This placeholder is not a complete cookie policy.",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <section className="policies-hero">
        <Header />
        <div className="policies-hero__copy">
          <span className="explore-section-kicker">THE SMALL PRINT</span>
          <h1>Site information.</h1>
          <p>These policy notes are placeholders for the Spherule demo website.</p>
        </div>
      </section>

      <main className="policies-main container">
        {policies.map((policy) => (
          <section className="policy-section" id={policy.id} key={policy.id}>
            <span className="explore-section-kicker">SPHERULE DEMO</span>
            <h2>{policy.title}</h2>
            <p>{policy.text}</p>
          </section>
        ))}
        <p className="policies-contact">
          Have a question? <Link href="/contact">Contact us</Link>.
        </p>
      </main>

      <Footer />
    </>
  );
}
