# 006 - Add Secondary Brand Accent

- **Status**: TODO
- **Commit**: 1141294
- **Severity**: LOW
- **Category**: Cohesion & Visual Identity
- **Estimated scope**: 2 files, medium

## Problem

The current palette is heavily tied to Spotify green naming and usage. It is clean, but the portfolio can read more like a borrowed product skin than a personal AI product engineer identity.

```css
/* app/globals.css:4 - current */
/* ── Spotify Design Tokens ── */
--color-green: #1ed760;
--color-green-active: #1fdf64;
--color-green-border: #1db954;
```

```tsx
/* app/page.tsx:367 - current */
? " bg-[linear-gradient(135deg,rgba(30,215,96,0.08)_0%,#181818_40%)] border border-green-border-soft"
```

```tsx
/* app/page.tsx:384 - current */
<span className="rounded-full border border-green-border-soft px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-[0.8px] text-green">
```

```tsx
/* app/page.tsx:396 - current */
className="rounded-[4px] border border-green-border-soft bg-green-soft px-2 py-1 font-mono text-[10px] font-bold leading-none text-green"
```

## Target

Keep green as the primary action color, but add one restrained secondary accent for AI/system identity. Use it only in small metadata surfaces so the page does not become multicolor.

```css
/* target tokens in app/globals.css */
/* Brand Design Tokens */
--color-green: #1ed760;
--color-green-active: #1fdf64;
--color-green-border: #1db954;
--color-cyan: #67e8f9;
--color-cyan-soft: rgba(103, 232, 249, 0.08);
--color-cyan-border-soft: rgba(103, 232, 249, 0.18);
```

Suggested usage:

```tsx
/* target featured project gradient */
? " bg-[linear-gradient(135deg,rgba(30,215,96,0.08)_0%,rgba(103,232,249,0.05)_48%,#181818_72%)] border border-green-border-soft"
```

```tsx
/* target role badge */
<span className="rounded-full border border-cyan-border-soft bg-cyan-soft px-2 py-0.5 text-[10px] font-bold uppercase leading-none tracking-[0.8px] text-cyan">
```

Keep keyword chips green unless the whole page starts to feel too monochrome after the role badge change. If keyword chips are changed, use cyan only for AI/system keywords and keep infrastructure/business keywords green.

## Repo Conventions To Follow

- Tokens live in `app/globals.css` under `@theme inline`.
- Existing color token names use `--color-*`; follow that so Tailwind can expose `text-cyan`, `bg-cyan-soft`, and `border-cyan-border-soft`.
- Preserve the dark neutral base: `--color-near-black`, `--color-surface`, `--color-surface-mid`.
- Do not introduce purple, beige, or orange-dominant accents.

## Steps

1. In `app/globals.css`, rename the comment `Spotify Design Tokens` to `Brand Design Tokens`.
2. Add `--color-cyan`, `--color-cyan-soft`, and `--color-cyan-border-soft` after the green tokens.
3. In `app/page.tsx`, update the featured project gradient to include a very subtle cyan stop: `rgba(103,232,249,0.05)_48%`.
4. Change the project role badge from green border/text to cyan border/background/text.
5. Review visual balance. If the page now has enough identity, stop there.
6. Optional only if needed: make AI-specific keywords cyan by adding a small helper function that returns cyan classes for keywords containing `AI`, `LLM`, `Agent`, `LangGraph`, `OCR`, or `Classifier`; otherwise keep all keyword chips green.

## Boundaries

- Do NOT replace the primary CTA green.
- Do NOT recolor all chips, bullets, links, and headings.
- Do NOT add gradients to every section.
- Do NOT change content copy.
- Do NOT introduce more than one secondary accent.

## Verification

- **Mechanical**: run `npm run lint`; expected result is no new lint errors.
- **Mechanical**: run `npm run build`; expected result is a successful Next build.
- **Feel check**: view desktop and mobile. The page should still read dark/green first, with cyan acting as a precise system accent.
- **Feel check**: scan Projects. The role badges should be easier to distinguish from keyword chips.
- **Feel check**: verify the page no longer appears as an exact Spotify clone, but still feels cohesive.
- **Done when**: one secondary accent adds identity without making the UI noisy.
