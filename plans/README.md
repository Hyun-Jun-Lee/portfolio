# Animation And Design Improvement Plans

These plans capture all recommendations from the July 27, 2026 motion/design audit. They are intentionally source-edit plans only; each executor should read the target plan, apply only that scope, then run the listed verification.

## Recommended Order

1. `001-add-motion-tokens-and-reduced-motion.md`
2. `002-tighten-scroll-reveals-and-stagger.md`
3. `003-replace-project-transition-all.md`
4. `004-polish-copy-email-feedback.md`
5. `005-animate-mobile-menu-entry.md`
6. `006-add-secondary-brand-accent.md`

## Plan Index

| # | Plan | Severity | Status | Depends On |
| --- | --- | --- | --- | --- |
| 001 | Add Motion Tokens And Reduced Motion | MEDIUM | TODO | None |
| 002 | Tighten Scroll Reveals And Stagger | MEDIUM | TODO | 001 |
| 003 | Replace Project Transition All | HIGH | TODO | None |
| 004 | Polish Copy Email Feedback | MEDIUM | TODO | 001 recommended |
| 005 | Animate Mobile Menu Entry | LOW | TODO | 001 recommended |
| 006 | Add Secondary Brand Accent | LOW | TODO | None |

## Notes For Executors

- Do not combine unrelated visual changes while executing a plan.
- Prefer exact transition properties over `transition-all`.
- Keep UI animation under 300ms except deliberate or marketing motion.
- Honor `prefers-reduced-motion` by removing translate/position movement while preserving opacity and color feedback.
- Run `npm run lint` and `npm run build` after each plan or after a small batch.

## Final Validation Pass

After all plans are complete:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Start the app with `npm run dev`.
4. Check desktop around `1440x1100`.
5. Check mobile around `390x1000`.
6. Confirm `out/index.html` is regenerated only if the project deploy process depends on static export output.
7. Confirm no new `transition-all` remains in `app/`.
8. Confirm reduced-motion mode removes vertical reveal/menu movement.
