"use client";

import {
  useEffect,
  useRef,
  useState,
  Children,
  type ReactNode,
} from "react";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
}

export function StaggerReveal({
  children,
  className = "",
  staggerMs = 80,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => {
      setShouldReduceMotion(motionQuery.matches);
    };

    handleMotionPreference();
    motionQuery.addEventListener("change", handleMotionPreference);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: shouldReduceMotion
              ? "none"
              : visible
                ? "translateY(0)"
                : "translateY(12px)",
            transition: shouldReduceMotion
              ? `opacity 160ms var(--ease-out) ${i * staggerMs}ms`
              : `transform var(--duration-reveal) var(--ease-out) ${i * staggerMs}ms, opacity var(--duration-reveal) var(--ease-out) ${i * staggerMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
