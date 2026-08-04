"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: shouldReduceMotion
          ? "none"
          : isVisible
            ? "translateY(0)"
            : "translateY(12px)",
        opacity: isVisible ? 1 : 0,
        transition: shouldReduceMotion
          ? `opacity 160ms var(--ease-out) ${delay}ms`
          : `transform var(--duration-reveal) var(--ease-out) ${delay}ms, opacity var(--duration-reveal) var(--ease-out) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
