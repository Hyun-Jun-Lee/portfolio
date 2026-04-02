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
      className="inline-flex items-center gap-2 text-muted font-mono text-lg tracking-[0.02em] hover:text-foreground transition-colors duration-150 cursor-pointer"
    >
      <EnvelopeSimple size={16} weight="bold" />
      {copied ? "Copied!" : email}
    </button>
  );
}
