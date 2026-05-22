"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}
          aria-label="Home"
        >
          {/* Hexagon icon */}
          <div
            style={{
              width: 38,
              height: 38,
              background: "var(--accent)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#0a0a0a",
                letterSpacing: "-0.02em",
              }}
            >
              M
            </span>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "var(--text)",
                letterSpacing: "-0.01em",
              }}
            >
              Murale
            </span>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 400,
                fontSize: 11,
                color: "var(--text-muted)",
              }}
            >
              Manohar
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div style={{ gap: 32 }} className="hidden sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--text)",
            cursor: "pointer",
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderBottom: "1px solid var(--border)",
            padding: "12px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
