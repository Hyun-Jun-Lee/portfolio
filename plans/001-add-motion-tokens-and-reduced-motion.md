# 001 - Add Motion Tokens And Reduced Motion

- **Status**: TODO
- **Commit**: 1141294
- **Severity**: MEDIUM
- **Category**: Accessibility, Cohesion & Tokens
- **Estimated scope**: 3 files, small

## Problem

Motion values are hardcoded in each component, and movement-based animations do not honor reduced-motion preferences. This makes later animation tuning inconsistent and can make the page uncomfortable for motion-sensitive users.

```css
/* app/globals.css:39 - current */
html {
  scroll-behavior: smooth;
}
```

```css
/* app/globals.css:56 - current */
/* Hero entrance - MOTION_INTENSITY 6 */
.reveal-on-load {
  opacity: 0;
  animation: reveal 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

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

## Target

Add shared motion tokens to `app/globals.css` and use them from the reveal components. Reduced motion should remove position movement and smooth scrolling while preserving quick opacity/color feedback.

```css
/* target tokens in app/globals.css inside @theme inline */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--duration-press: 160ms;
--duration-hover: 150ms;
--duration-reveal: 300ms;
```

```css
/* target reduced motion in app/globals.css */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal-on-load {
    animation-duration: 160ms;
    animation-name: reveal-reduced;
  }
}

@keyframes reveal-reduced {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

```tsx
/* target JS behavior */
const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
setShouldReduceMotion(motionQuery.matches);
```

For reduced motion, both reveal components must use:

```tsx
transform: shouldReduceMotion ? "none" : visible ? "translateY(0)" : "translateY(12px)",
transition: `opacity 160ms var(--ease-out) ${delay}ms`,
```

## Repo Conventions To Follow

- Global design tokens live in `app/globals.css` under `@theme inline`.
- The project already uses CSS custom properties for colors, fonts, radii, and shadows in `app/globals.css:3`.
- Keep Tailwind class usage in components; only inline styles that are already inline should remain inline.
- Use exact easing values from the audit rule catalog:
  - `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`
  - `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`

## Steps

1. In `app/globals.css`, add the motion tokens inside `@theme inline` after the font tokens.
2. Change `.reveal-on-load` to use `var(--duration-reveal)` and `var(--ease-out)`.
3. Add the `@media (prefers-reduced-motion: reduce)` block and `@keyframes reveal-reduced`.
4. In `app/components/AnimateOnScroll.tsx`, add a `shouldReduceMotion` state initialized from `window.matchMedia("(prefers-reduced-motion: reduce)")`.
5. In `AnimateOnScroll`, when reduced motion is true, use `transform: "none"` and an opacity-only transition.
6. Repeat the same reduced-motion behavior in `app/components/StaggerReveal.tsx`.

## Boundaries

- Do NOT change page content, layout, project data, or visual color choices in this plan.
- Do NOT add new dependencies.
- Do NOT remove the existing IntersectionObserver behavior.
- If Tailwind does not accept the new CSS custom properties in arbitrary values, keep the motion values in inline styles and reference the CSS variables there.

## Verification

- **Mechanical**: run `npm run lint`; expected result is no new lint errors.
- **Mechanical**: run `npm run build`; expected result is a successful Next build.
- **Feel check**: open the page normally and confirm hero and section reveals still fade in.
- **Feel check**: in Chrome DevTools Rendering, emulate `prefers-reduced-motion: reduce`; reload and confirm scroll jumps normally, reveal elements fade without vertical movement, and buttons still have color/opacity feedback.
- **Done when**: motion values are centralized, reduced-motion users do not get translate-based entrance movement, and normal users see the same visual hierarchy with faster, cleaner timing.
