"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-colors duration-150 ${
        scrolled ? "bg-near-black" : "bg-near-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full flex items-center justify-end md:justify-center">
        {/* Desktop — pill nav links */}
        <div className="hidden md:flex items-center gap-2">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm font-bold px-4 py-2 rounded-full transition-colors duration-150 ${
                activeSection === id
                  ? "text-white bg-surface-mid"
                  : "text-silver hover:text-white hover:bg-surface-mid"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-silver hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-near-black border-t border-border-gray px-5 pb-5 pt-2">
          <div className="flex flex-col gap-1">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-bold py-3 px-4 rounded-full transition-colors duration-150 ${
                  activeSection === id
                    ? "text-white bg-surface-mid"
                    : "text-silver hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
