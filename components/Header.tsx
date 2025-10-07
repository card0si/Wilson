"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/moving-services", label: "Moving Services" },
  { href: "/free-moving-quote", label: "Free Quote" },
  { href: "/about-us", label: "About" },
  { href: "/location", label: "Location" },
  { href: "/customer-reviews", label: "Reviews" }
];

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navId = "primary-navigation";

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Wilson Moving &amp; Property Services
        </Link>
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          aria-controls={navId}
          className="nav-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
        <nav aria-label="Main navigation">
          <ul id={navId} className={isMenuOpen ? "is-open" : undefined}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
