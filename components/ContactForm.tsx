"use client";

import type { FormEvent } from "react";
import { DEMO_CONTACT_EMAIL } from "./siteConfig";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const topic = String(formData.get("topic"));
    const message = String(formData.get("message"));
    const subject = `Spherule enquiry: ${topic}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;

    window.location.href = `mailto:${DEMO_CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__heading">
        <span className="explore-section-kicker">SEND A NOTE</span>
        <h2>What’s on your mind?</h2>
        <p>Share a little detail and we’ll take it from there.</p>
      </div>

      <div className="contact-form__grid">
        <label className="contact-field">
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
        </label>
        <label className="contact-field">
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
        </label>
        <label className="contact-field contact-field--full">
          <span>What can we help with?</span>
          <select name="topic" defaultValue="" required>
            <option value="" disabled>Select a topic</option>
            <option>Planning a trip</option>
            <option>Using Spherule</option>
            <option>Partnerships</option>
            <option>Something else</option>
          </select>
        </label>
        <label className="contact-field contact-field--full">
          <span>Your message</span>
          <textarea name="message" rows={5} placeholder="Tell us a little about it..." required />
        </label>
      </div>

      <div className="contact-form__footer">
        <p>Your email app will open with a draft addressed to our demo inbox.</p>
        <button className="btn btn--black" type="submit">
          Prepare email <span aria-hidden="true">↗</span>
        </button>
      </div>
    </form>
  );
}
