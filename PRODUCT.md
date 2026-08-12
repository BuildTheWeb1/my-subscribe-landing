# Product: MySubscribe Landing Page

*Captured by inference from the incumbent codebase (metadata, README, component copy) — no live user interview was run for this pass. Re-run `/impeccable init` with the actual stakeholder to confirm or correct these assumptions.*

## What this is

A marketing/SEO landing site (Persuade mode) for **MySubscribe**, a free, privacy-first iOS app that tracks recurring subscriptions. The site's job is to get a visitor to download the app from the App Store — every section on the homepage (`src/app/page.tsx`) builds toward the App Store badge CTA.

## Audience

Individuals who suspect they're overspending on subscriptions and want a simple way to see the full picture — total monthly/yearly cost, upcoming renewals, and lifetime spend per service — without creating an account or trusting a cloud service with financial data.

## Core value proposition

"See what your subscriptions really cost you." Three durable pillars, repeated across Hero, Features, and Footer copy:
- **No accounts, no cloud sync** — privacy-first, on-device only.
- **Free** — no in-app purchases, no paywall to use the app.
- **Clarity over spreadsheets** — a native iOS interface replaces manual tracking.

## Product surfaces (site structure)

- **Homepage** (`/`): Hero → Features → PaidSoFarSection → RenewalsSection → WidgetSection → ReviewQuote → InlineFAQ → CTA.
- **FAQ** (`/faq`): full accordion FAQ, mirrors and extends `InlineFAQ`.
- **Privacy** (`/privacy`): privacy policy content.
- Fixed Header and Footer are shared across all routes.

## App feature set (as marketed)

1. Centralized subscription tracking with a card-based interface.
2. Monthly/yearly cost overview with currency switching.
3. Renewal calendar with a 30-day-ahead upcoming view.
4. iOS Home Screen widget (small/medium/large) showing totals and next renewals.
5. "Paid So Far" lifetime-spend view per subscription.
6. On-device privacy — no accounts, no cloud sync.

## Distribution

- Single distribution channel: Apple App Store (`https://apps.apple.com/app/my-subscribe/id6757849924`).
- No web app, no Android version referenced anywhere in the codebase.

## Brand constraints observed

- Product category is self-declared as **Finance** (`layout.tsx` metadata `category: "Finance"`).
- Visual identity deliberately echoes iOS system colors and native app chrome (see `DESIGN.md`) — the site is meant to feel like an extension of the app, not a generic SaaS marketing template.
- Social proof (App Store review quote in `ReviewQuote.tsx`) is currently a placeholder — code comment flags it as `TODO: Replace with real App Store review text before launch`. Treat as unconfirmed content, not durable product truth.

## Assumptions made (record for correction)

- Target audience skews toward general consumers managing personal (not business) subscriptions — inferred from tone ("streaming service," "spreadsheets") and absence of any team/business language.
- "Free" is treated as a permanent product fact (no pricing tiers exist anywhere in code or copy); if a paid tier is ever planned, this file and the Hero/Footer copy will need to change together.
- No stated target region beyond `en_US` locale and USD-styled example figures (`$239.76`, `$9.99/mo`) in `PaidSoFarSection.tsx`, despite in-app currency switching being marketed.
