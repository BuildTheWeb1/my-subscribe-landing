---
name: MySubscribe
description: Free, privacy-first iOS subscription tracker landing site
colors:
  background: "#0A0A0F"
  surface-alt: "#0D0D14"
  surface-deep: "#0F1012"
  hero-gradient-deep: "#0C1220"
  cta-gradient-deep: "#071428"
  foreground: "#FFFFFF"
  primary-blue: "#007AFF"
  primary-blue-light: "#00D4FF"
  primary-blue-hover: "#60B4FF"
  accent-green: "#34C759"
  accent-pink: "#FF2D55"
  coral: "#E07868"
  star-gold: "#FF9500"
  mint: "#DDF7F6"
  light-blue: "#CCEAF7"
  dark-blue-gray: "#2B3744"
typography:
  display:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  pill: "9999px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
spacing:
  section-y: "96px"
  section-x: "24px"
  card-padding: "32px"
  gap-sm: "16px"
  gap-md: "24px"
  gap-lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary-blue}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card-glass:
    backgroundColor: "rgba(255,255,255,0.03)"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  pill-badge:
    backgroundColor: "rgba(0,122,255,0.12)"
    textColor: "{colors.primary-blue-hover}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: MySubscribe

## Overview

**Creative North Star: "The Midnight Ledger"**

MySubscribe's landing site is a near-black, iOS-native control room for money you forgot you were spending. The palette borrows directly from iOS system colors (`#007AFF` blue, `#34C759` green, `#FF2D55` red/pink) so the site feels like an extension of the app rather than a marketing wrapper around it. Every surface is dark (`#0A0A0F` to `#0D0D14`), and structure comes from translucent "glass" panels — low-opacity white fills with faint borders and backdrop blur — rather than from shadows or hard edges. Depth is atmospheric: soft color-gradient glows behind phone mockups and CTA panels stand in for elevation.

Text hierarchy is carried almost entirely by white opacity steps (`white/30` through `white/70`, plus solid white for headings) instead of a gray palette, which keeps every screen feeling like one continuous dark surface. Section backgrounds alternate between `#0A0A0F` and `#0D0D14` in a two-tone rhythm to separate content blocks without introducing borders or new hues.

The system currently reuses raw hex values inline (Tailwind arbitrary values and `style` props) more often than it references the CSS custom properties already declared in `globals.css`. This is documented as observed fact, not prescribed; new work should prefer the token layer.

**Key Characteristics:**
- iOS system-color palette on a near-black canvas
- Glassmorphic panels (translucent fill + hairline border + blur) instead of shadows for structure
- Opacity-stepped white for the entire text hierarchy — no gray scale
- Two-tone section background rhythm (`#0A0A0F` / `#0D0D14`) instead of borders to separate sections
- Soft color-glow halos behind phone mockups and the closing CTA, used sparingly

## Colors

The palette pairs iOS system accent hues with a near-black neutral base; accents are used narrowly and each is tied to a specific meaning across the site.

### Primary
- **iOS Blue** (`#007AFF`): the site's primary accent — nav CTA pill, hero eyebrow, hero headline emphasis span ("Subscriptions"), links, primary gradient stop. Appears on the download badge surroundings, "Get App" pill, and inline links (`text-[#007AFF]`, hover shifts to `#60B4FF`). The hero headline emphasis was a `bg-clip-text` gradient (blue → cyan) prior to the colorize pass; it is now solid iOS Blue — gradient text reads as a generic AI-tell, and solid iOS Blue is already the documented standalone-usable accent.
- **Cyan Glow** (`#00D4FF`): paired with iOS Blue in gradients only (phone mockup halo, "Get App" pill background) — never used standalone.

### Secondary
- **Success Green** (`#34C759`): "Free" and privacy-adjacent signals (hero "Free" pill, Features icon accents for positive/organizational items).
- **Renewal Pink/Red** (`#FF2D55`): calendar and renewal-related accents (Features "Renewal Calendar" icon, RenewalsSection "30-Day Ahead View" icon).
- **Ledger Coral** (`#E07868`): the "Paid So Far" section's signature color — eyebrow badge, headline emphasis span, and the illustrative stat card's big dollar figure. Scoped to that single section/theme, not reused elsewhere.
- **Rating Gold** (`#FF9500`): star ratings only (Hero social-proof stars, ReviewQuote stars). Used inline as a raw hex, not declared as a CSS var.

### Neutral
- **Void Black** (`#0A0A0F`): primary page/section background (body, Hero, CTA, WidgetSection, PaidSoFarSection, InlineFAQ, FAQ page).
- **Panel Black** (`#0D0D14`): alternate section background (Features, RenewalsSection, ReviewQuote, mobile nav dropdown, FAQ card) — used to create rhythm between adjacent sections without a border.
- **Footer Black** (`#0F1012`): footer-only background, distinct third neutral for the page's closing band.
- **Hero Gradient Deep** (`#0C1220`): the darker midpoint stop in the Hero's `linear-gradient(160deg, #0A0A0F 0%, #0C1220 50%, #0A0A0F 100%)` background — a deliberate two-tone atmospheric treatment scoped to the Hero section only, not a flat section background.
- **CTA Gradient Deep** (`#071428`): the darker stop in the closing CTA panel's `linear-gradient(135deg, #071428 0%, #0A0A0F 100%)` background — same atmospheric-gradient pattern as the Hero, scoped to the CTA panel only.
- **Pure White** (`#FFFFFF`): headings and highest-emphasis text; also the base for the opacity-stepped body/label text (`white/45` minimum for real body copy, `white/50`–`white/70` for emphasized text).

### Reserved (declared, not currently rendered)
- **Mint** (`#DDF7F6`), **Light Blue** (`#CCEAF7`), **Dark Blue-Gray** (`#2B3744`): declared as CSS custom properties in `globals.css` (`--mint`, `--light-blue`, `--dark-blue-gray`) but not referenced by any component today. Treat as available-but-unassigned; don't repurpose without deciding what they mean first.

### Named Rules
**The Opacity-Not-Gray Rule.** Body and label text is never a separate gray hex — it's always `white` at a reduced Tailwind opacity step. Real informational copy (descriptions, captions, attributions) stays at `white/55` or higher to clear WCAG AA 4.5:1 against both section backgrounds; steps below `/45` are reserved for large or purely decorative text. This keeps every panel visually part of the same dark surface instead of introducing a competing neutral, without sacrificing legibility. Applies uniformly, including the Footer — which previously used `text-gray-400`/`border-gray-800` and has been converted to `white/50`/`border-white/[0.06]` to match.

**The Narrow-Accent Rule.** Each non-blue accent (green, pink, coral) is scoped to one feature or section and is not reused as a general-purpose color elsewhere on the page.

## Typography

**Display Font:** Geist Sans (with system-ui, sans-serif fallback)
**Mono Font:** Geist Mono (declared via `--font-geist-mono`; not observed in current UI copy)

**Character:** A single geometric sans (Geist) carries the entire site — headings lean maximally heavy (`font-black`/`font-extrabold`) with tight tracking, while body copy stays regular weight at generous line-height. The contrast between very heavy display type and very light, low-opacity body text is the primary typographic hierarchy device, more than size variation.

### Hierarchy
- **Display** (font-black, `text-4xl md:text-5xl lg:text-6xl`, tight leading, `tracking-tight`): Hero H1 only.
- **Headline** (font-black/font-extrabold, `text-3xl md:text-4xl`, `tracking-tight`): section H2s (Features, CTA, PaidSoFarSection, RenewalsSection, WidgetSection).
- **Title** (font-semibold, `text-xl`): card/feature titles (Features, RenewalsSection rows, WidgetSection cards).
- **Body** (font-normal, `text-base`–`text-lg`, `leading-relaxed`): paragraph copy; long-form copy stays under ~65ch via `max-w-lg`/`max-w-2xl` containers.
- **Label** (font-bold/font-semibold, `text-xs`, sometimes `tracking-widest uppercase`): eyebrow tags, pill badges, "What Users Say" kicker.

### Named Rules
**The Weight-Over-Size Rule.** Headings jump straight to `font-black`/`font-extrabold`; there is no medium-weight heading tier. Emphasis is created by weight and opacity contrast, not by an expanded size scale.

## Layout

Single-column, section-stacked page. Each section is a full-bleed `<section>` with `py-24 px-6` (mobile pages use `pt-32 pb-20 px-6` for the fixed-header offset), and an inner `max-w-6xl mx-auto` content container (narrower `max-w-3xl`/`max-w-4xl` for FAQ-style and CTA-style single-column content). Two-column feature sections use `grid grid-cols-1 lg:grid-cols-2 gap-12` (text column + phone-mockup column), collapsing to a single stacked column below `lg`. Card grids use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`. The header is `fixed` with a translucent blurred bar (`bg-[#0A0A0F]/80 backdrop-blur-md`), so page content must always start below it via top padding.

## Elevation & Depth

The system is flat by default — no conventional card drop-shadows. Depth is instead conveyed two ways: (1) translucent "glass" panels (low-opacity white background + hairline white border + `backdrop-blur`) that read as a raised layer against the black canvas without a shadow, and (2) soft, large-radius color-gradient blur halos (`blur-3xl`/`blur-xl`) placed behind hero/phone-mockup art and the closing CTA panel to suggest ambient glow rather than a physical light source.

### Shadow Vocabulary
- **Card hover lift** (`box-shadow: 0 8px 24px rgba(255,255,255,0.05)`, paired with `translateY(-4px)`): the only interactive elevation change, applied via the `.card-hover` utility class on Features cards.
- **CTA ambient glow** (`box-shadow: 0 0 48px rgba(0,122,255,0.05)`): large diffuse, low-alpha blue glow behind the closing download panel — kept soft and wide rather than saturated, so it reads as ambient light, not a chromatic halo.
- **Pill glow** (`box-shadow: 0 0 8px rgba(0,122,255,0.18)` / `0 0 4px rgba(0,122,255,0.55)`): small, low-alpha glow on the mobile "Get App" pill and the hero eyebrow status dot. Deliberately understated — a solid-color, full-opacity glow at this tight a radius reads as the generic "AI slop" halo, so alpha is capped well below 0.6.

### Named Rules
**The Glass-Not-Shadow Rule.** Structural cards (feature cards, stat cards, glass social-proof card, FAQ container) are distinguished from the background by translucency and a hairline border, never by a drop shadow. Shadows are reserved for glow/ambient effects and the single hover-lift state.

## Shapes

Corners are large and consistently rounded — nothing in the UI uses sharp 0px corners. Pills (`rounded-full`) mark every badge, tag, and small CTA. Cards step up through `rounded-xl` (12px, small glass panels) → `rounded-2xl` (16px, feature/stat/FAQ cards, icon tiles) → `rounded-3xl` (24px, the closing CTA panel). The phone mockup uses an outsized, iPhone-echoing radius scale (`rounded-[2rem]` inner screen up to `rounded-[3.5rem]` outer glow) that is unique to that component. Borders, where present, are hairline and low-contrast (`border-white/[0.06]` to `border-white/[0.12]`, or a tinted `rgba()` matching the section's accent color at ~15–25% alpha) — never solid full-opacity strokes.

## Components

### Buttons / CTAs
- **Shape:** Primary CTAs are the native App Store badge image (not a styled button); in-app text CTAs are pill-shaped (`rounded-full`).
- **Primary (mobile "Get App"):** blue-to-blue gradient (`from-[#007AFF] to-[#0060DD]`), white bold text, `px-4 py-2`, paired with a tight blue glow shadow.
- **Secondary / Ghost:** underlined text links in `white/40` rising to `white/60` on hover ("See how it works ↓"), or solid accent-color text links (`text-[#007AFF]` → `text-[#60B4FF]` on hover, e.g. "Get the app free →", "See all FAQs →").
- **Hover / Focus:** interactive elements use `whileHover={{ scale: 1.05 }}` / `whileTap={{ scale: 0.95 }}` (Framer Motion) rather than color-only hover states where the element is an image/badge; text links use color and underline-decoration transitions.

### Pill Badges / Tags
- **Style:** `rounded-full`, tinted background at the accent's own hue (`rgba(accent, 0.12–0.18)`), matching-hue border at `rgba(accent, 0.2–0.25)`, and accent-colored text — e.g. blue "iOS App · Free Download" eyebrow, green "✓ Free" pill, gradient "Small/Medium/Large" widget-size badges.
- **State:** no interactive/selected state observed; these are static informational tags.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px) is the default for content cards; `rounded-xl` (12px) for smaller glass panels; `rounded-3xl` (24px) reserved for the single closing CTA panel.
- **Background:** translucent white fill (`bg-white/[0.03]` at rest, `bg-white/[0.05]` on hover for Features cards) or an accent-tinted `rgba()` fill for highlighted variants (e.g. WidgetSection's "highlight" card at `rgba(9,124,224,0.12)`).
- **Shadow Strategy:** none at rest; see Elevation & Depth for the hover-lift exception.
- **Border:** hairline, `white/[0.06]`–`white/[0.12]`, or accent-tinted to match a highlighted card's fill.
- **Internal Padding:** `p-8` (32px) is the standard card padding; smaller glass panels (hero social-proof card) use `p-4` (16px).

### Icon Tiles
- **Style:** square-ish rounded tile (`w-14 h-14 rounded-2xl` for feature cards, `w-12 h-12 rounded-2xl` for list rows), background is the icon's own accent color at ~12% alpha (`${color}20` hex-alpha suffix), icon rendered in the full-strength accent color via `lucide-react`.

### Phone Mockup (signature component)
A recurring hero visual: a stylized iPhone frame (`PhoneMockup.tsx`) showing real app screenshots. Built from three stacked layers — an outer `blur-3xl` gradient glow (`from-[#007AFF] to-[#00D4FF]`, 40% opacity), a mid `blur-xl` gradient wash, and an inner dark bezel (`bg-[#1a1a2e]`) with a thin blue ring (`ring-1 ring-[#007AFF]/30`) framing the actual screenshot. Two sizes exist (`small`/`large`); it is the site's only 3D/skeuomorphic element against an otherwise flat, glass-panel UI.

### Navigation
- **Style:** fixed, translucent blurred bar (`bg-[#0A0A0F]/80 backdrop-blur-md`, hairline bottom border `border-white/[0.06]`). Desktop links are `white/50` rising to solid white on hover, medium weight, no active-state underline observed. Mobile collapses to a logo + gradient "Get App" pill + hamburger, expanding into a `#0D0D14` rounded dropdown panel animated via Framer Motion height/opacity.

### FAQ Accordion
- **Style:** hairline-divided rows (`border-b border-white/[0.06]`) inside a `#0D0D14` rounded container; question in solid white, chevron icon rotates 180° on open (Framer Motion), answer text at `white/55` with a smooth height/opacity expand transition.

## Do's and Don'ts

### Do:
- **Do** keep body/label text as white at a Tailwind opacity step (`/30`–`/70`) rather than introducing a gray hex.
- **Do** use translucent glass panels (`bg-white/[0.03–0.08]` + hairline border + optional `backdrop-blur`) for card structure instead of drop shadows.
- **Do** alternate section backgrounds between `#0A0A0F` and `#0D0D14` to create rhythm without adding borders between sections.
- **Do** scope non-blue accent colors (green, pink, coral) to a single feature/section rather than reusing them site-wide.
- **Do** pair icon tiles with a `${accentHex}20` (≈12% alpha) background fill so the icon color reads as a tint, not a solid block.

### Don't:
- **Don't** add hard drop-shadows to resting cards — shadows are reserved for hover-lift and ambient glow effects only (see Elevation & Depth).
- **Don't** use sharp/0px corners anywhere; the smallest radius in active use is `rounded-xl` (12px), pills are `rounded-full`.
- **Don't** repurpose the reserved Mint / Light Blue / Dark Blue-Gray tokens without first deciding what they represent — they exist in `globals.css` but nothing currently renders them.
- **Don't** introduce a new heading weight between the current `font-semibold` (titles) and `font-black`/`font-extrabold` (headlines/display) tiers; the jump is intentional.
