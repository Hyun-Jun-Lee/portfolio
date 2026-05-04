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
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full flex items-center justify-between">
        {/* Logo — circular green icon + name */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <span className="w-7 h-7 rounded-full bg-green flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.36c-.2.2-.51.2-.71 0-1.97-1.2-4.46-1.48-7.38-.81-.28.07-.57-.1-.64-.39s.1-.57.39-.64c3.2-.73 5.95-.41 8.14.94.2.12.26.38.2.6zm1.23-2.71c-.25.25-.62.25-.87 0-2.26-1.39-5.7-1.79-8.37-.98-.34.1-.7-.09-.8-.43s.09-.7.43-.8c3.04-.92 6.82-.48 9.37 1.12.25.15.34.48.24.73zm.11-2.82C14.76 8.88 8.68 8.68 5.26 9.73c-.41.12-.84-.11-.96-.52s.11-.84.52-.96c3.93-1.2 10.47-.97 14.6 1.13.38.22.5.7.28 1.08-.16.28-.51.42-.83.37h.11z" />
            </svg>
          </span>
          <span className="text-base font-bold text-white">HJ.LEE</span>
        </a>

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
