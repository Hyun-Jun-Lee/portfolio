# 005 - Animate Mobile Menu Entry

- **Status**: TODO
- **Commit**: 1141294
- **Severity**: LOW
- **Category**: Missed Opportunity, Spatial Consistency
- **Estimated scope**: 1 file, small

## Problem

The mobile menu appears instantly when `mobileOpen` becomes true. Because the menu is spatially connected to the fixed nav bar, a short downward reveal would explain where it came from and reduce the abruptness.

```tsx
/* app/components/Navigation.tsx:107 - current */
{/* Mobile menu */}
{mobileOpen && (
  <div className="md:hidden absolute top-16 left-0 right-0 bg-near-black border-t border-border-gray px-5 pb-5 pt-2">
    <div className="flex flex-col gap-1">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={() => setMobileOpen(false)}
          className={`text-sm font-bold py-3 px-4 rounded-full transition-colors duration-150 ${
            activeSection === id
              ? "text-white bg-surface-mid"
              : "text-silver hover:text-white"
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  </div>
)}
```

## Target

Add a small enter animation using opacity and transform only. Since the menu unmounts immediately on close, this plan only covers entry. Do not add a complex exit state unless a later plan asks for it.

```tsx
/* target */
{mobileOpen && (
  <div className="md:hidden absolute top-16 left-0 right-0 bg-near-black border-t border-border-gray px-5 pb-5 pt-2 animate-[mobileMenuIn_180ms_var(--ease-out)_both] motion-reduce:animate-[mobileMenuFade_120ms_ease_both]">
    ...
  </div>
)}
```

Add keyframes in `app/globals.css`:

```css
@keyframes mobileMenuIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mobileMenuFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## Repo Conventions To Follow

- The project already defines keyframes in `app/globals.css:62`.
- Keep movement under 200ms for a small menu.
- Use `var(--ease-out)` from plan 001. If plan 001 is not done, use `cubic-bezier(0.23, 1, 0.32, 1)` directly in the Tailwind arbitrary animation.
- Use transform and opacity only.

## Steps

1. In `app/globals.css`, add `@keyframes mobileMenuIn` and `@keyframes mobileMenuFade` after the existing reveal keyframes.
2. In `app/components/Navigation.tsx`, append `animate-[mobileMenuIn_180ms_var(--ease-out)_both]` to the mobile menu container at line 109.
3. Add `motion-reduce:animate-[mobileMenuFade_120ms_ease_both]` to the same container.
4. Keep the existing conditional rendering `{mobileOpen && (...)}`.
5. Keep link click behavior `onClick={() => setMobileOpen(false)}` unchanged.

## Boundaries

- Do NOT add Framer Motion or any animation dependency.
- Do NOT implement exit animation in this plan.
- Do NOT change desktop navigation behavior.
- Do NOT change section labels or hrefs.

## Verification

- **Mechanical**: run `npm run lint`; expected result is no new lint errors.
- **Mechanical**: run `npm run build`; expected result is a successful Next build.
- **Feel check**: open the page at 390px width, tap the menu button, and confirm the menu appears from the nav with a short downward motion.
- **Feel check**: toggle the menu rapidly. Entry should not feel delayed; close may remain instant by design for now.
- **Feel check**: emulate reduced motion and confirm the menu fades in without vertical movement.
- **Done when**: the mobile menu entry feels spatially attached to the nav and remains fast.
