# Landing Page Redesign — Design Spec
**Date:** 2026-03-23
**Project:** MySubscribe Landing Page
**Approach:** Dark Mode Restyle + Minor Restructure (Approach 2)

---

## Goals

1. **Primary:** Increase App Store download tap-through rate
2. **Primary:** Build credibility and premium feel
3. **Underlying driver:** The current page feels basic and has no visual personality — users bounce before engaging

---

## Design Direction

**Visual personality:** Bold Dark Mode — inspired by Linear, Raycast, Vercel
**Mood:** Premium, trustworthy, immersive
**Not:** Flashy, over-animated, cluttered

### Color System

| Token | Value | Usage |
|---|---|---|
| `bg-base` | `#0A0A0F` | Page background, Hero, Paid So Far, Widget, CTA sections |
| `bg-raised` | `#0D0D14` | Alternating sections (Features, Renewals, Review) |
| `border-subtle` | `rgba(255,255,255,0.06)` | Section dividers, card borders |
| `border-card` | `rgba(255,255,255,0.08)` | Glass card borders |
| `glass-fill` | `rgba(255,255,255,0.04)` | Card backgrounds |
| `text-primary` | `#FFFFFF` | Headings |
| `text-secondary` | `rgba(255,255,255,0.45)` | Body copy, subtitles |
| `text-muted` | `rgba(255,255,255,0.3)` | Labels, metadata |
| `accent-blue` | `#007AFF` | Primary CTA, links, icon backgrounds |
| `accent-blue-glow` | `rgba(0,122,255,0.45)` | Box-shadow on primary buttons |
| `accent-cyan` | `#00D4FF` | Gradient endpoint on blue accent |
| `accent-warm` | `#E07868` | Paid So Far section accent (warm coral) |
| `accent-green` | `#4ADE80` | "Free Forever" badge |
| `star-gold` | `#FF9500` | Star ratings |

### Typography

No font changes — Geist remains. Adjustments:
- Hero headline: `font-weight: 900`, `letter-spacing: -0.02em` (tighter than current `-` none)
- Section headlines: `font-weight: 800`, `letter-spacing: -0.01em`
- Body: `color: rgba(255,255,255,0.45)`, `line-height: 1.6`
- Eyebrow labels: `font-size: 11px`, `font-weight: 700`, `letter-spacing: 0.06em`, `text-transform: uppercase`

### Gradient Text

Hero "Subscriptions" word: `background: linear-gradient(90deg, #007AFF, #00D4FF)` with `-webkit-background-clip: text`. Retained from current design.

---

## Page Structure

New section order (changes from current marked):

| # | Section | Status | Notes |
|---|---|---|---|
| 1 | Header | Modified | Add "Get App" pill on mobile |
| 2 | Hero | Modified | Dark, new eyebrow, shorter subheadline, glass social proof card |
| 3 | Features Grid | Modified | Dark restyle, same 6 features |
| 4 | **Paid So Far Spotlight** | **New** | Replaces Screenshots section |
| 5 | Renewals Section | Modified | Dark restyle + mid-page CTA nudge |
| 6 | Widget Section | Modified | Dark restyle |
| 7 | **Review Quote** | **New** | Single 5-star App Store review |
| 8 | **Inline FAQ** | **New** | 3 questions flat-listed above CTA |
| 9 | CTA | Modified | Dark gradient, glowing button |

**Removed:** Screenshots section (3 phone mockups). Replaced by the Paid So Far spotlight which serves a stronger narrative purpose.

---

## Section-by-Section Spec

### 1. Header

**Current:** White/80 frosted glass, logo + nav links + App Store badge (desktop only)
**New:**
- Background: `#0A0A0F` with `backdrop-blur-md`, bottom border `rgba(255,255,255,0.06)`
- Logo and nav link colors inverted to white/muted white
- Desktop: App Store badge unchanged
- **Mobile addition:** A "Get App" pill button (`background: linear-gradient(90deg, #007AFF, #0060DD)`, `border-radius: 9999px`, `padding: 4px 12px`, `box-shadow: 0 0 10px rgba(0,122,255,0.35)`) placed beside the hamburger icon — always visible on mobile regardless of menu state
- Mobile menu background: `#0D0D14`, link colors `rgba(255,255,255,0.7)`

### 2. Hero

**Current:** Two-column (text left, phone right), 43-word subheadline, App Store badge + "Learn More" button
**New:**

**Layout:** Same two-column grid. On mobile: text stacks above phone (unchanged).

**Eyebrow tag** (new, above headline):
- Pill shape: `background: rgba(0,122,255,0.12)`, `border: 1px solid rgba(0,122,255,0.2)`, `border-radius: 9999px`
- Content: animated blue dot + "iOS App · Free Download"
- Blue dot has a subtle `box-shadow: 0 0 6px #007AFF` pulse feel

**Headline:** Unchanged copy. Tighten `letter-spacing` to `-0.02em`, `font-weight: 900`.

**Subheadline:** Shortened from 43 words to ~20:
> "No accounts. No spreadsheets. Just a clear view of where your money goes."
Color: `rgba(255,255,255,0.5)`

**Glass social proof card** (new, replaces nothing — inserted between subheadline and CTA):
- Container: `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 12px`, `backdrop-filter: blur(10px)`
- Row 1: ★★★★★ in `#FF9500` + "5.0 · App Store" in muted text
- Row 2: Three pills — "🔒 No Account" (blue tint), "✓ Free Forever" (green tint), "📱 On-Device" (neutral)

**CTA row:**
- Primary: App Store badge (unchanged asset)
- Secondary: text link "See how it works ↓" — replaces "Learn More" button. `color: rgba(255,255,255,0.4)`, underline on hover

**Background:** `linear-gradient(160deg, #0A0A0F 0%, #0C1220 50%, #0A0A0F 100%)`

### 3. Features Grid

**Current:** White cards on `#F8FAFC` background
**New:**
- Section background: `#0D0D14`
- Cards: `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.07)`, `border-radius: 16px`
- Icon backgrounds: retain existing colors but at lower opacity (~15-20%) for dark context
- Icon colors: retain existing colors
- Heading color: `white`
- Body color: `rgba(255,255,255,0.4)`
- Hover: `border-color: rgba(255,255,255,0.12)`, `background: rgba(255,255,255,0.05)` — subtle lift
- Section headline and subheadline: dark-mode colors

### 4. Paid So Far Spotlight (New Section)

**Placement:** After Features Grid, before Renewals.
**Purpose:** Give the most emotionally resonant feature — "Paid So Far" — its own section to create the "aha, I'm wasting money" moment.

**Layout:** Two-column on desktop (text left, phone right showing the details/insights screen). Single column stacked on mobile.

**Eyebrow label:** `"NEW PERSPECTIVE"` in warm coral (`#E07868`) on a low-opacity coral background pill.

**Headline:**
> "The Total You've Paid. Since Day One."
"Since Day One." in `#E07868` (warm coral accent).

**Body copy:**
> "$9.99/month sounds small until you see $239 paid for a streaming service you open twice a year. MySubscribe shows you that number for every subscription you track."

**Stat card** (illustrative, not real user data):
- Background: `rgba(201,111,94,0.08)`, border: `rgba(201,111,94,0.15)`
- Shows a sample subscription with a "total paid" figure in large warm coral text
- Label: "Example · Streaming Service" to be honest about it being illustrative

**Phone mockup:** Uses existing `PhoneMockup type="details"` component (the "Detailed Insights" screen already in the codebase).

**Background:** `#0A0A0F`

### 5. Renewals Section

**Current:** White background, text left, phone right
**New:**
- Background: `#0D0D14`
- Same layout and content
- Icon tile backgrounds: retain colors at ~20% opacity
- All text inverted to dark-mode palette
- **Mid-page CTA nudge** added at bottom of section: a centered text link `"Get the app free →"` in `#007AFF`, `font-weight: 600`, with a hairline top border `rgba(255,255,255,0.05)` separating it from the content above

### 6. Widget Section

**Current:** `#F8FAFC` background, 3 text cards, highlighted middle card
**New:**
- Background: `#0A0A0F`
- Cards: `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.07)`
- Highlighted middle card: `background: rgba(9,124,224,0.12)`, `border: 1px solid rgba(9,124,224,0.25)`
- Badge pills on cards retain the existing blue gradient
- All text inverted to dark-mode palette

### 7. Review Quote (New Section)

**Placement:** After Widget Section, before Inline FAQ.
**Purpose:** Social proof. Uses the single real 5-star App Store review.

**Layout:** Centered, max-width 600px, single card.

**Section label:** `"WHAT USERS SAY"` — small uppercase muted eyebrow.

**Card:**
- `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(255,255,255,0.08)`, `border-radius: 16px`
- ★★★★★ in gold
- Review text in `rgba(255,255,255,0.7)`, italic, `line-height: 1.7`
- Attribution: `"— Verified App Store Review"` in muted text

**Background:** `#0D0D14`

**Note:** The actual review text must be the real App Store review copy. Placeholder in spec.

### 8. Inline FAQ (New Section)

**Placement:** After Review Quote, before final CTA.
**Purpose:** Resolve the 3 highest-conversion objections inline, without requiring the user to navigate away.

**Questions shown (flat list, not accordion):**
1. "Is it free?" — Yes, completely free. No in-app purchases, no subscription required.
2. "Is my data private?" — 100%. Everything stays on your device. No accounts, no cloud, no data collection.
3. "Do I have to enter subscriptions manually?" — Yes, but it takes seconds per subscription and you only do it once.

**"See all FAQs →"** link below, pointing to `/faq`.

**Styling:**
- Background: `#0A0A0F`
- Questions: `font-weight: 600`, `color: white`, `font-size: 16px`
- Answers: `color: rgba(255,255,255,0.45)`, `line-height: 1.6`
- Dividers between questions: `border-bottom: 1px solid rgba(255,255,255,0.06)`

### 9. CTA Section

**Current:** Gradient card on white page background
**New:**
- Section background: `#0A0A0F`
- CTA card: `background: linear-gradient(135deg, #071428, #0A0A0F)`, `border: 1px solid rgba(0,122,255,0.15)`, `border-radius: 24px`
- Headline unchanged: "Stop Guessing. Start Knowing."
- Subline: "Free · Private · Beautifully Simple" (shortened from current)
- App Store badge: same asset, centered
- Subtle blue glow behind the card: `box-shadow: 0 0 60px rgba(0,122,255,0.08)`

---

## Global CSS Changes

### globals.css

- Set `body` background to `#0A0A0F` (prevents flash of white on load)
- Remove or override the `.hero-gradient` class which currently targets the CTA section — replaced by the new dark gradient
- Retain `card-hover` class but update to dark-mode values: `box-shadow` uses `rgba(255,255,255,0.05)` instead of the current light shadow

### layout.tsx

- Update `<html>` background color meta if present
- No structural changes needed

---

## What Is NOT Changing

- Font family (Geist)
- All existing copy (except Hero subheadline shortened)
- App Store link URL
- PhoneMockup components (reused as-is)
- FAQ page (`/faq`) — only 3 questions surfaced inline on home
- Privacy page
- SEO / JSON-LD / sitemap (no changes)
- Animation library (Framer Motion — all existing animations retained)
- Lucide icon set

---

## New Components Required

| Component | Description |
|---|---|
| `PaidSoFarSection.tsx` | New dedicated spotlight section for "Paid So Far" feature |
| `ReviewQuote.tsx` | Single review card component |
| `InlineFAQ.tsx` | 3-question flat FAQ with "See all" link |

Existing components modified in-place:
- `Header.tsx` — mobile "Get App" pill
- `Hero.tsx` — eyebrow, shortened subheadline, glass card, secondary CTA copy
- `Features.tsx` — dark restyle
- `RenewalsSection.tsx` — dark restyle + CTA nudge
- `WidgetSection.tsx` — dark restyle
- `CTA.tsx` — dark restyle
- `page.tsx` — new section order, remove Screenshots, add new sections

---

## Out of Scope

- Google Play / Android support
- Testimonials beyond the single real review
- Animation overhaul (existing Framer Motion animations are kept)
- Dark/light mode toggle
- Pricing section
