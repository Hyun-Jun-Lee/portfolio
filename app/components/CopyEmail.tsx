"use client";

import { useState } from "react";
import { Check, EnvelopeSimple } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-11 items-center gap-2 rounded-lg bg-green px-6 text-sm font-semibold text-on-green transition-[background-color,transform] duration-150 hover:bg-green-active active:scale-[0.98]"
      aria-label={copied ? "이메일 주소 복사됨" : `${email} 복사`}
      title={copied ? "이메일 주소 복사됨" : "이메일 주소 복사"}
    >
      {copied ? <Check size={16} weight="bold" /> : <EnvelopeSimple size={16} weight="bold" />}
      {email}
    </button>
  );
}
