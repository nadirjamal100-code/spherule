"use client";

import type { FormEvent } from "react";
import { DEMO_CONTACT_EMAIL } from "./siteConfig";

export default function NewsletterForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email"));
    const subject = "Spherule newsletter signup";
    const body = `Please add this address to the Spherule newsletter:\n${email}`;

    window.location.href = `mailto:${DEMO_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="footer__form" onSubmit={handleSubmit}>
      <label htmlFor="newsletter">Stay up to date</label>
      <div className="footer__field">
        <input id="newsletter" name="email" type="email" placeholder="Enter your email" autoComplete="email" required />
        <button type="submit" className="btn btn--white">Prepare email</button>
      </div>
      <p className="footer__form-note">Opens a draft to the demo inbox; no mailing list is configured.</p>
    </form>
  );
}
