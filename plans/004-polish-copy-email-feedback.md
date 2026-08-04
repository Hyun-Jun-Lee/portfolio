# 004 - Polish Copy Email Feedback

- **Status**: TODO
- **Commit**: 1141294
- **Severity**: MEDIUM
- **Category**: Component Polish, Physicality & Feedback
- **Estimated scope**: 1 file, small

## Problem

The email copy button is pressable, but it only transitions color. The copied state swaps text instantly from the email address to `Copied!`, which can cause a small width jump and does not give tactile press feedback.

```tsx
/* app/components/CopyEmail.tsx:16 - current */
<button
  onClick={handleCopy}
  className="inline-flex items-center gap-2 text-silver font-mono text-sm tracking-[0.02em] hover:text-white transition-colors duration-150 cursor-pointer"
>
  <EnvelopeSimple size={16} weight="bold" />
  {copied ? "Copied!" : email}
</button>
```

## Target

Make the button feel responsive on press, keep its width stable, and soften the text state swap.

```tsx
/* target */
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
```

If the exact `min-w-[172px]` looks too wide or too narrow in the browser, set the smallest fixed min-width that prevents a width shift between `bhk0827@gmail.com` and `Copied!`.

## Repo Conventions To Follow

- Primary CTA buttons already use `active:scale-[0.98]` and `transition-transform` in `app/page.tsx:327` and `app/page.tsx:557`.
- Emil-style press feedback should use subtle scale between `0.95` and `0.98`; use `0.97` here because the email button is small and text-only.
- Use `transition-[color,transform]`, not `transition-all`.
- This plan benefits from `001-add-motion-tokens-and-reduced-motion.md`, but can still use `ease-out` if tokens are not present yet.

## Steps

1. In `app/components/CopyEmail.tsx`, change the button class to include `min-w-[172px]`, `active:scale-[0.97]`, `transition-[color,transform]`, `duration-150`, and `ease-[var(--ease-out)]`.
2. Wrap the copied/email text in a `<span>`.
3. Give the span `transition-opacity duration-150 ease-[var(--ease-out)]`.
4. Keep the existing icon, `navigator.clipboard.writeText(email)`, and 1000ms reset timing.
5. If `var(--ease-out)` is not available because plan 001 has not been executed, use `ease-out` temporarily and note that plan 001 should replace it.

## Boundaries

- Do NOT change the email address.
- Do NOT add a toast or external notification library.
- Do NOT change clipboard behavior beyond visual feedback.
- Do NOT add dependencies.

## Verification

- **Mechanical**: run `npm run lint`; expected result is no new lint errors.
- **Mechanical**: run `npm run build`; expected result is a successful Next build.
- **Feel check**: click the email button several times. The button should compress immediately and the surrounding hero buttons should not shift horizontally when `Copied!` appears.
- **Feel check**: inspect on a narrow mobile viewport; the fixed min-width must not overflow the hero button row.
- **Done when**: CopyEmail feels like a real button and the copied state no longer causes a distracting text-width jump.
