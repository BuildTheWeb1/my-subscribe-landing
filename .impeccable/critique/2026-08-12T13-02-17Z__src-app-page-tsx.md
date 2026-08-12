---
target: src/app/page.tsx (homepage + faq + privacy)
total_score: 26
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 2
timestamp: 2026-08-12T13-02-17Z
slug: src-app-page-tsx
---
Method: dual-agent (A: ade29e1a89b2ad154 · B: af7b64a5bd7ddc7af)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Mobile hamburger open/closed state relies only on icon swap |
| 2 | Match System / Real World | 4 | Real subscription names (Netflix, Spotify, Claude, Adobe) ground the copy |
| 3 | User Control and Freedom | 3 | No back-to-top, but page is short; nav closes correctly on link click |
| 4 | Consistency and Standards | 3 | Footer uses `text-gray-400` instead of DESIGN.md's `white/NN` opacity rule |
| 5 | Error Prevention | 3 | No forms; external links correctly use `rel="noopener"` |
| 6 | Recognition Rather Than Recall | 4 | 3-item nav, CTA repeated at every scroll milestone |
| 7 | Flexibility and Efficiency | n/a | Marketing site, no power-user paths apply |
| 8 | Aesthetic and Minimalist Design | 3 | WidgetSection is text-only despite being about a visual object |
| 9 | Error Recovery | n/a | No error states on a static marketing page |
| 10 | Help and Documentation | 3 | FAQ + Privacy function well as documentation |
| **Total** | | **26/32** | **Good (81%)** |

## Design Specificity Verdict

**LLM assessment**: Mostly product-specific. Real screenshots with recognizable subscription names (Netflix, Spotify, Claude, Adobe) are the strongest specificity signal on the page. The weak spot is WidgetSection — three abstract text cards labeled Small/Medium/Large with no widget mockup image, which could describe any app with a home-screen widget. ReviewQuote ships a single hardcoded review with a `// TODO: Replace with real App Store review text before launch` comment still in source — placeholder content presented as genuine social proof.

**Deterministic scan**: CLI static scan found 3 findings (1 real `gradient-text` anti-pattern on the Hero "Subscriptions" span, 2 undocumented-color advisories). Live browser overlay scan (computed styles, all 3 routes) found 14 anti-patterns on the homepage alone: `dark-glow` ×4, `gradient-text` ×2, `ai-color-palette` ×4, `low-contrast` ×3 (a widget-badge gradient measuring 4.2:1, below WCAG AA), `line-length` ×3, and a site-wide `skipped-heading` defect (h1/h2 → h4 "Links" in Footer, skipping h3, present identically on Home/FAQ/Privacy). Privacy page's body copy runs ~96 chars/line, worse than Home's ~89, from a missing `max-w` constraint. One `marquee` finding was judged and confirmed a false positive — a self-inflicted artifact of the injection method (the detector's own regex literal leaking into the scanned DOM), not a real anti-pattern; verified via `grep -rn "marquee" src/` returning zero matches. This aligns with and sharpens the flow's own baseline detector run (42 blocking findings site-wide across `dark-glow`, `gradient-text`, `ai-color-palette`, `low-contrast`, `line-length`, `skipped-heading`, `body-text-viewport-edge`).

**Visual overlays**: Not applicable this run — no user-visible browser tab was kept open for the user; findings are reported directly here.

## Overall Impression

A disciplined, coherent dark "iOS control room" system that mostly earns its specificity through real screenshots and consequence-driven copy — but it's undercut by a handful of concrete, fixable defects: an under-designed WidgetSection, a placeholder review shipped with its TODO comment intact, a footer that quietly breaks the system's own color rule, and a cluster of detector-confirmed AI-tell anti-patterns (glow shadows, gradient text, low-contrast badges) that the upcoming fix pipeline (layout/typeset/colorize/polish/animate) is well-positioned to resolve directly.

## What's Working

1. **Real, recognizable screenshots** (Netflix, Spotify, Claude, Adobe) — does more for credibility than any copy could.
2. **Consistent visual system** — glass cards, opacity-white text, and iOS-accent colors hold up across breakpoints and routes without breakage.
3. **Copy with teeth** — specific dollar figures and consequence-driven framing rather than generic SaaS speak.

## Priority Issues

1. **[P1] WidgetSection has no widget visual.** A section about a visual home-screen object renders as three text-only cards. **Why it matters**: it's the least convincing, least product-specific section on the page, sitting in the primary scroll path. **Fix**: add a widget-size mockup using the same visual language as `PhoneMockup.tsx`. **Suggested command**: `/impeccable layout` (or a manual content fix outside this run's refine scope — flagging for the user).

2. **[P1] Detector-confirmed AI-tell cluster: glow shadows, gradient text, ai-color-palette.** 42 baseline findings site-wide (8 `dark-glow`, 6 `gradient-text`, 8 `ai-color-palette`, 13 `low-contrast`, 3 `line-length`, 2 `skipped-heading`, 2 `body-text-viewport-edge`), confirmed live via computed styles on top of the static scan. **Why it matters**: these are the default "cool AI slop" tells the whole Impeccable methodology exists to catch, and a measurable WCAG AA failure (4.2:1 contrast on a widget badge) is a real accessibility bug, not just taste. **Fix**: remove/replace glow shadows with neutral elevation, convert gradient text to solid color, raise the low-contrast text opacity floor, fix `line-length` containers. **Suggested command**: `/impeccable colorize` + `/impeccable polish`.

3. **[P2] Placeholder review ships as social proof with a live TODO.** `ReviewQuote.tsx` has `// TODO: Replace with real App Store review text before launch` and a single unverifiable quote (no name, date, or link). **Why it matters**: presenting synthetic testimony as genuine review content is a trust risk right before the CTA. **Fix**: this is a content/copy decision outside this design-only run's scope — flagging for the user rather than inventing a fake review; consider `/impeccable clarify` once real review content is sourced.

4. **[P2] Footer breaks its own design system.** `Footer.tsx` uses `text-gray-400`/`border-gray-800` while DESIGN.md's "Opacity-Not-Gray Rule" and every other component use `white/NN` opacity tokens. **Why it matters**: a visible seam in a system that otherwise polices this carefully. **Fix**: replace with `white/45`-family tokens and `border-white/[0.06]`. **Suggested command**: `/impeccable colorize`.

5. **[P3] Site-wide skipped heading level + header translucency bleed + hero mobile density.** `h1`/`h2` → `h4` "Links" in Footer (skipping h3) on all three routes; header's `bg-[#0A0A0F]/80` lets scrolled section colors bleed through behind the nav; mobile hero stacks 5-6 elements before the phone mockup. **Fix**: bump Footer heading to `h3`, raise header background opacity to `/90`-`/95`, consider collapsing the hero proof row on mobile. **Suggested command**: `/impeccable layout` + `/impeccable typeset`.

## Persona Red Flags

**Jordan (first-timer)**: Reaches WidgetSection expecting to see the promised widget and gets three text cards instead — has to imagine it, exactly where understanding should be locking in. Reaches ReviewQuote and sees one unverifiable quote with no name/date — reads as filler, not proof.

**Riley (stress tester)**: Notices the header's translucent bleed-through of coral colors behind "MySubscribe" while scrolling — would flag this as "did the header get corrupted?" Notices all 5 App Store CTAs point to the identical untagged URL — no way for the team to know which CTA converts.

**Casey (distracted mobile user)**: First mobile viewport packs eyebrow + 3-line H1 + subhead + 3-badge proof card + CTA + secondary link — six items before the product visual even starts, increasing bounce risk in the 2-second scan window. The low-opacity (`white/40`) "See how it works ↓" secondary link risks going unnoticed entirely next to the higher-contrast App Store badge.

## Minor Observations

- FAQ page and inline FAQ teaser have overlapping-but-differently-worded questions ("Is it free?" vs "Is MySubscribe free?") — possibly accidental drift.
- Privacy page's `prose prose-lg max-w-none` wrapper should be checked against the site's dark-mode opacity system for list markers/link colors.
- Mid-page CTA nudge in RenewalsSection ("Get the app free →") is visually quiet (`text-sm`, thin underline) — may be under-noticed.

## Questions to Consider

1. If "total paid since day one" is the real differentiator, why does PaidSoFarSection sit as feature #6 of 6 instead of leading the hero?
2. Every CTA points to an identical untagged App Store URL — how will the team ever know which placement drives installs?
3. Was WidgetSection cut for a real reason, or is it simply the one section that never got its visual pass?
