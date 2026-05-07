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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: `transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms, opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
