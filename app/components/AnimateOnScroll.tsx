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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(4px)",
        opacity: isVisible ? 1 : 0,
        transition: `transform 400ms cubic-bezier(0.05, 0.7, 0.1, 1) ${delay}ms, opacity 400ms cubic-bezier(0.05, 0.7, 0.1, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
