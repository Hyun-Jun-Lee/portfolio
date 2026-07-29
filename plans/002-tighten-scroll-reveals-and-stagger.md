# 002 - Tighten Scroll Reveals And Stagger

- **Status**: TODO
- **Commit**: 1141294
- **Severity**: MEDIUM
- **Category**: Easing & Duration
- **Estimated scope**: 3 files, small

## Problem

The portfolio repeats scroll reveal animations across most sections. Current reveal motion uses 600ms transitions and some call sites use 100-120ms stagger gaps, which can make content feel delayed while scrolling through a long page.

```tsx
/* app/components/AnimateOnScroll.tsx:45 - current */
transform: isVisible ? "translateY(0)" : "translateY(16px)",
opacity: isVisible ? 1 : 0,
transition: `transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
```

```tsx
/* app/components/StaggerReveal.tsx:48 - current */
opacity: visible ? 1 : 0,
transform: visible ? "translateY(0)" : "translateY(20px)",
transition: `transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms, opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms`,
```

```tsx
/* app/page.tsx:454 - current */
<StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerMs={120}>
```

```tsx
/* app/page.tsx:479 - current */
<StaggerReveal className="flex flex-col" staggerMs={120}>
```

```tsx
/* app/page.tsx:530 - current */
<StaggerReveal className="flex flex-wrap gap-2.5" staggerMs={100}>
```

## Target

Reveal animations should feel crisp and informational, not theatrical.

```tsx
/* target AnimateOnScroll */
transform: shouldReduceMotion ? "none" : isVisible ? "translateY(0)" : "translateY(12px)",
opacity: isVisible ? 1 : 0,
transition: shouldReduceMotion
  ? `opacity 160ms var(--ease-out) ${delay}ms`
  : `transform var(--duration-reveal) var(--ease-out) ${delay}ms, opacity var(--duration-reveal) var(--ease-out) ${delay}ms`,
```

```tsx
/* target StaggerReveal */
transform: shouldReduceMotion ? "none" : visible ? "translateY(0)" : "translateY(12px)",
transition: shouldReduceMotion
  ? `opacity 160ms var(--ease-out) ${i * staggerMs}ms`
  : `transform var(--duration-reveal) var(--ease-out) ${i * staggerMs}ms, opacity var(--duration-reveal) var(--ease-out) ${i * staggerMs}ms`,
```

Update page call sites:

```tsx
<StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerMs={50}>
<StaggerReveal className="flex flex-col" staggerMs={50}>
<StaggerReveal className="flex flex-wrap gap-2.5" staggerMs={40}>
```

## Repo Conventions To Follow

- This plan depends on `001-add-motion-tokens-and-reduced-motion.md`.
- Use `--duration-reveal: 300ms` and `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` from `app/globals.css`.
- Stagger delays should stay in the 30-80ms range.
- Keep the existing IntersectionObserver threshold and root margin unless visual testing shows a clear issue.

## Steps

1. In `app/components/AnimateOnScroll.tsx`, reduce hidden offset from `16px` to `12px`.
2. Replace the hardcoded `600ms cubic-bezier(0.16, 1, 0.3, 1)` with `var(--duration-reveal) var(--ease-out)`.
3. In `app/components/StaggerReveal.tsx`, reduce hidden offset from `20px` to `12px`.
4. Replace hardcoded transition timing with the same tokens.
5. In `app/page.tsx`, change `staggerMs={120}` for Skills and Experience to `staggerMs={50}`.
6. In `app/page.tsx`, change `staggerMs={100}` for Certificates to `staggerMs={40}`.

## Boundaries

- Do NOT change section spacing or grid/card markup.
- Do NOT add new reveal effects such as blur, rotation, or scale.
- Do NOT animate the Projects list unless a separate plan explicitly adds it.

## Verification

- **Mechanical**: run `npm run lint`; expected result is no new lint errors.
- **Mechanical**: run `npm run build`; expected result is a successful Next build.
- **Feel check**: scroll slowly from Projects through Certificates. Section headings and items should appear quickly, with a visible but compact cascade.
- **Feel check**: use DevTools Animations at 10% playback. Confirm stagger delays do not make later items feel unavailable.
- **Done when**: repeated section reveals feel lighter, faster, and still intentional.
