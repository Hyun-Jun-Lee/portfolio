"use client";

import { useState } from "react";
import { EnvelopeSimple } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex min-w-[172px] items-center gap-2 text-silver font-mono text-sm tracking-[0.02em] hover:text-white active:scale-[0.97] transition-[color,transform] duration-150 ease-[var(--ease-out)] cursor-pointer"
    >
      <EnvelopeSimple size={16} weight="bold" />
      <span
        className={`transition-opacity duration-150 ease-[var(--ease-out)] ${
          copied ? "opacity-100" : "opacity-90"
        }`}
      >
        {copied ? "Copied!" : email}
      </span>
    </button>
  );
}
