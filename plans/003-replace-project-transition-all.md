# 003 - Replace Project Transition All

- **Status**: TODO
- **Commit**: 1141294
- **Severity**: HIGH
- **Category**: Performance
- **Estimated scope**: 1 file, tiny

## Problem

Project cards use `transition-all` while also changing background and scale on hover/active. `transition-all` can animate unintended layout, border, shadow, or color changes later, which makes the card less predictable and can trigger avoidable rendering work.

```tsx
/* app/page.tsx:365 - current */
className={`bg-surface rounded-lg p-5 md:p-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-6 hover:bg-surface-mid hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 ease-out${
  project.featured
    ? " bg-[linear-gradient(135deg,rgba(30,215,96,0.08)_0%,#181818_40%)] border border-green-border-soft"
    : ""
}`}
```

## Target

Use explicit transition properties only.

```tsx
/* target */
className={`bg-surface rounded-lg p-5 md:p-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-6 hover:bg-surface-mid hover:scale-[1.02] active:scale-[0.99] transition-[background-color,transform] duration-200 ease-out${
  project.featured
    ? " bg-[linear-gradient(135deg,rgba(30,215,96,0.08)_0%,#181818_40%)] border border-green-border-soft"
    : ""
}`}
```

If plan 001 is already complete and the executor wants stronger token cohesion, this exact alternative is also acceptable:

```tsx
/* token-based target */
className={`bg-surface rounded-lg p-5 md:p-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-6 hover:bg-surface-mid hover:scale-[1.02] active:scale-[0.99] transition-[background-color,transform] duration-200 ease-[var(--ease-out)]${
  project.featured
    ? " bg-[linear-gradient(135deg,rgba(30,215,96,0.08)_0%,#181818_40%)] border border-green-border-soft"
    : ""
}`}
```

## Repo Conventions To Follow

- Keep Tailwind utility classes in `app/page.tsx`.
- The existing button CTAs already use `transition-transform duration-100` at `app/page.tsx:327` and `app/page.tsx:557`; follow that explicit-property style.
- Use transform and background-color only. Do not animate layout properties.

## Steps

1. Open `app/page.tsx`.
2. In the Project card class at line 365, replace `transition-all` with `transition-[background-color,transform]`.
3. Keep `duration-200` and `ease-out`, or use `ease-[var(--ease-out)]` if plan 001 is already complete.
4. Do not change the hover scale, active scale, featured gradient, border, grid, or spacing.

## Boundaries

- Do NOT touch project data.
- Do NOT change card markup.
- Do NOT add new hover effects.
- Do NOT modify Skills or Certificates cards in this plan.

## Verification

- **Mechanical**: run `npm run lint`; expected result is no new lint errors.
- **Mechanical**: run `npm run build`; expected result is a successful Next build.
- **Feel check**: hover several project cards repeatedly. They should still lift/scale with the same timing, but no unrelated visual properties should animate.
- **Feel check**: in DevTools, inspect the card and confirm `transition-property` resolves to `background-color, transform`.
- **Done when**: no `transition-all` remains on the project card and the hover feel is unchanged or slightly cleaner.
