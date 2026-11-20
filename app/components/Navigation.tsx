"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificate" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const marker = window.innerHeight * 0.25;
      const current = [...sections].reverse().find(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= marker;
      });
      setActiveSection(current?.id ?? "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-colors duration-150 ${
        scrolled ? "bg-near-black" : "bg-near-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full flex items-center justify-between">
        <a href="#" className="text-base font-semibold text-white transition-colors duration-150 hover:text-silver">
          이현준
        </a>
        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
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
          className="md:hidden rounded-lg p-2 text-silver transition-colors hover:text-white"
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
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
        <div id="mobile-navigation" className="md:hidden absolute top-16 left-0 right-0 bg-near-black border-t border-border-gray px-5 pb-5 pt-2 animate-[mobileMenuIn_180ms_var(--ease-out)_both] motion-reduce:animate-[mobileMenuFade_120ms_ease_both]">
          <div className="flex flex-col gap-1">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150 ${
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
