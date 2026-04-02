"use client";

import { useEffect, useState } from "react";

const sections = ["introduce", "projects", "experience"];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-150 ${
        scrolled ? "bg-background border-b-2 border-border-subtle" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <div />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`font-mono text-xs uppercase tracking-[0.05em] px-3 py-1.5 transition-colors duration-150 ${
                activeSection === section
                  ? "text-accent"
                  : "text-dim hover:text-foreground"
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-xs text-dim uppercase tracking-[0.1em] hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b-2 border-border-subtle px-6 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-xs uppercase tracking-[0.05em] py-2 transition-colors duration-150 ${
                  activeSection === section
                    ? "text-accent"
                    : "text-dim hover:text-foreground"
                }`}
              >
                &gt;&gt;&gt; {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
