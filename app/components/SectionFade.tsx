import { type ReactNode } from "react";

interface SectionFadeProps {
  children: ReactNode;
  className?: string;
}

export function SectionFade({ children, className = "" }: SectionFadeProps) {
  return <div className={className}>{children}</div>;
}
