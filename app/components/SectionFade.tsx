"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";

interface SectionFadeProps {
  children: ReactNode;
  className?: string;
}

export function SectionFade({ children, className = "" }: SectionFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const prevTop = useRef<number | null>(null);

  const applyTransform = useCallback(
    (ratio: number, isAbove: boolean, movingUp: boolean) => {
      const el = ref.current;
      if (!el) return;

      if (!isAbove || movingUp) {
        el.style.opacity = "1";
        el.style.transform = "scale(1) translateY(0)";
        return;
      }

      const clamped = Math.max(0, Math.min(1, ratio));
      const opacity = 0.25 + clamped * 0.75;
      const scale = 0.97 + clamped * 0.03;
      const yShift = (1 - clamped) * -12;

      el.style.opacity = String(opacity);
      el.style.transform = `scale(${scale}) translateY(${yShift}px)`;
    },
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const thresholds = Array.from({ length: 41 }, (_, i) => i / 40);

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => {
          const rect = entry.boundingClientRect;
          const isAbove = rect.top < 0;
          const movingUp =
            prevTop.current !== null && rect.top > prevTop.current;
          prevTop.current = rect.top;
          applyTransform(entry.intersectionRatio, isAbove, movingUp);
        });
      },
      { threshold: thresholds },
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, [applyTransform]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: "opacity, transform",
        transformOrigin: "center top",
        transition: "opacity 200ms ease-out, transform 200ms ease-out",
      }}
    >
      {children}
    </div>
  );
}
