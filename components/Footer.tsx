import Link from "next/link";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const links = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Explore", href: "/explore" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const legal = [
  { label: "Terms", href: "/policies#terms" },
  { label: "Privacy", href: "/policies#privacy" },
  { label: "Cookies", href: "/policies#cookies" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link href="/" aria-label="Spherule home">
            <Logo size={30} />
          </Link>
          <p>We help travelers explore Norway’s wonders effortlessly with smart planning and expert guides.</p>
          <nav aria-label="Footer">
            <ul>
              {links.map((link) => (
                <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <NewsletterForm />
      </div>
      <div className="footer__bottom">
        <p>© 2026 TinyUI. All rights reserved.</p>
        <ul>
          {legal.map((item) => (
            <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
