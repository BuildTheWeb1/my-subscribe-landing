# Landing Page Dark Mode Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the MySubscribe landing page from a basic light-mode design to a premium full-dark experience (Linear/Raycast aesthetic) with 3 new sections and minor structural improvements to increase App Store downloads and perceived credibility.

**Architecture:** All changes are confined to Next.js React components and a single CSS file. No new dependencies are needed — the project already has Framer Motion, Lucide, and Tailwind. Three new components are created (`PaidSoFarSection`, `ReviewQuote`, `InlineFAQ`) and seven existing ones are restyled. The Screenshots section is removed and replaced by the new PaidSoFarSection.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lucide icons, `next/image`

---

## File Map

| Action | File | What changes |
|--------|------|--------------|
| Modify | `src/app/globals.css` | `--background` → dark, update `card-hover`, remove `hero-gradient` |
| Modify | `src/app/layout.tsx` | Add `theme-color` meta |
| Modify | `src/components/Header.tsx` | Dark nav, mobile "Get App" pill |
| Modify | `src/components/Hero.tsx` | Dark restyle, eyebrow, glass proof card, shorter subheadline |
| Modify | `src/components/Features.tsx` | Dark glass cards |
| Create | `src/components/PaidSoFarSection.tsx` | New spotlight section |
| Modify | `src/components/RenewalsSection.tsx` | Dark restyle + mid-page CTA nudge |
| Modify | `src/components/WidgetSection.tsx` | Dark restyle |
| Modify | `src/components/CTA.tsx` | Dark gradient card, remove `hero-gradient` class |
| Create | `src/components/ReviewQuote.tsx` | Single 5-star review card |
| Create | `src/components/InlineFAQ.tsx` | 3-question flat FAQ |
| Modify | `src/app/page.tsx` | New section order, remove Screenshots import, add new sections |

---

## Task 1: Global CSS — Dark Foundation

**Files:**
- Modify: `src/app/globals.css`

This task establishes the dark color foundation that every subsequent task builds on. Do this first so you can visually verify the page goes dark before touching any component.

- [ ] **Step 1: Update `--background` CSS variable and `card-hover`**

Replace the entire `globals.css` with:

```css
@import "tailwindcss";

:root {
  --background: #0A0A0F;
  --foreground: #FFFFFF;

  /* MySubscribe Theme Colors */
  --primary-blue: #007AFF;
  --primary-blue-light: #00D4FF;
  --accent-green: #34C759;
  --accent-pink: #FF2D55;
  --mint: #DDF7F6;
  --light-blue: #CCEAF7;
  --dark: #0F1012;
  --coral: #E07868;
  --dark-blue-gray: #2B3744;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary-blue);
  --color-primary-light: var(--primary-blue-light);
  --color-accent-green: var(--accent-green);
  --color-accent-pink: var(--accent-pink);
  --color-mint: var(--mint);
  --color-light-blue: var(--light-blue);
  --color-dark: var(--dark);
  --color-coral: var(--coral);
  --color-dark-blue-gray: var(--dark-blue-gray);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, sans-serif;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Card hover effects */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.05);
}
```

Key changes from original:
- `--background` changed from `#ffffff` to `#0A0A0F`
- `--foreground` changed from `#0F1012` to `#FFFFFF`
- `--coral` updated from `#C96F5E` to `#E07868` (spec accent-warm)
- `.hero-gradient` class **removed entirely**
- `card-hover:hover` box-shadow changed from blue to white-tinted

- [ ] **Step 2: Run dev server and verify dark background**

```bash
npm run dev
```

Open `http://localhost:3000`. The page background should be `#0A0A0F` (very dark, nearly black). If any section is still white, check that the CSS variable change propagated — Tailwind v4 reads the variable at build time.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: dark mode CSS foundation — background, card-hover, remove hero-gradient"
```

---

## Task 2: Layout — Theme Color Meta

**Files:**
- Modify: `src/app/layout.tsx`

Adds the iOS Safari browser chrome color meta tag so the address bar matches the dark page instead of flashing white.

- [ ] **Step 1: Add viewport export with themeColor**

In `src/app/layout.tsx`, add a `viewport` export after the `metadata` export (Next.js 14 App Router separates viewport config from metadata):

```typescript
import type { Metadata, Viewport } from "next";
// ... (keep all existing imports)

// Add this new export after the existing `metadata` export:
export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};
```

The full file becomes:

```typescript
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://my-subscribe.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MySubscribe - iOS Subscription Tracker App | Manage Recurring Expenses",
    template: "%s | MySubscribe",
  },
  description: "Track all your subscriptions in one place. MySubscribe is a free, privacy-first iOS app that shows exactly what you're paying for monthly and yearly. No accounts needed. Download now.",
  keywords: ["subscription tracker", "subscription manager", "iOS subscription app", "track subscriptions", "recurring payments tracker", "subscription cost calculator", "manage subscriptions iPhone", "subscription organizer", "monthly subscription tracker", "subscription budget app"],
  authors: [{ name: "MySubscribe App" }],
  creator: "MySubscribe App",
  publisher: "MySubscribe App",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MySubscribe",
    title: "MySubscribe - iOS Subscription Tracker | See What You Really Pay",
    description: "Free iOS app that tracks all your subscriptions in one place. See monthly and yearly costs instantly. Privacy-first, no accounts. Download on App Store.",
    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "MySubscribe - Subscription Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MySubscribe - iOS Subscription Tracker | See What You Really Pay",
    description: "Free iOS app that tracks all your subscriptions in one place. See monthly and yearly costs instantly. Privacy-first, no accounts. Download on App Store.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Finance",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "style: add dark theme-color meta for iOS Safari"
```

---

## Task 3: Header — Dark Restyle + Mobile CTA Pill

**Files:**
- Modify: `src/components/Header.tsx`

Converts the header from frosted white to dark, and adds a persistent "Get App" pill button on mobile so the CTA is never absent.

- [ ] **Step 1: Replace Header.tsx**

```typescript
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/[0.06]">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="MySubscribe Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <span className="font-bold text-xl text-white">MySubscribe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/app/my-subscribe/id6757849924"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/Download_on_the_App_Store_Badge_US.svg"
                alt="Download on the App Store"
                width={120}
                height={40}
              />
            </a>
          </div>

          {/* Mobile: Get App pill + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://apps.apple.com/app/my-subscribe/id6757849924"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#007AFF] to-[#0060DD] text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,122,255,0.35)] hover:opacity-90 transition-opacity"
            >
              Get App
            </a>
            <button
              className="p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-4 bg-[#0D0D14] rounded-xl mt-3 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Visually verify in browser**

Open `http://localhost:3000`. Check:
- Header background is dark (nearly black), not white
- Logo text "MySubscribe" is white
- Nav links are muted white, turn white on hover
- On mobile (resize to < 768px): "Get App" blue pill is visible next to hamburger icon
- Mobile menu opens with dark `#0D0D14` background

- [ ] **Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "style: header dark restyle + mobile Get App pill"
```

---

## Task 4: Hero — Dark Restyle with Eyebrow and Glass Social Proof Card

**Files:**
- Modify: `src/components/Hero.tsx`

The hero is the most important section. Key changes: dark gradient background on the section itself, new eyebrow pill, shortened subheadline, glass social proof card between subheadline and CTA, secondary CTA becomes a text link.

- [ ] **Step 1: Replace Hero.tsx**

```typescript
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-32 pb-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0A0A0F 0%, #0C1220 50%, #0A0A0F 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 bg-[rgba(0,122,255,0.12)] border border-[rgba(0,122,255,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] shadow-[0_0_6px_#007AFF]" />
              <span className="text-xs font-semibold text-[#60B4FF]">iOS App · Free Download</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
            >
              See What Your
              <span className="bg-gradient-to-r from-[#007AFF] to-[#00D4FF] bg-clip-text text-transparent">
                {" "}Subscriptions{" "}
              </span>
              Really Cost You
            </h1>

            <p className="text-base text-white/50 mb-6 max-w-lg leading-relaxed">
              No accounts. No spreadsheets. Just a clear view of where your money goes.
            </p>

            {/* Glass social proof card */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl backdrop-blur-sm p-4 mb-8 max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#FF9500] text-sm tracking-wide">★★★★★</span>
                <span className="text-xs text-white/40 font-medium">5.0 · App Store</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[rgba(0,122,255,0.18)] border border-[rgba(0,122,255,0.25)] text-[#60B4FF] text-xs font-semibold px-3 py-1 rounded-full">
                  🔒 No Account
                </span>
                <span className="bg-[rgba(52,199,89,0.12)] border border-[rgba(52,199,89,0.2)] text-[#4ADE80] text-xs font-semibold px-3 py-1 rounded-full">
                  ✓ Free Forever
                </span>
                <span className="bg-white/[0.06] border border-white/10 text-white/50 text-xs font-semibold px-3 py-1 rounded-full">
                  📱 On-Device
                </span>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <motion.a
                href="https://apps.apple.com/app/my-subscribe/id6757849924"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/Download_on_the_App_Store_Badge_US.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ opacity: 0.7 }}
                className="text-sm text-white/40 underline underline-offset-4 decoration-white/20 hover:text-white/60 transition-colors"
              >
                See how it works ↓
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <PhoneMockup type="home-filled" size="large" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visually verify in browser**

Check:
- Hero section has a dark gradient background (deep navy-black)
- Blue eyebrow pill appears above the headline with a glowing dot
- Headline font is heavier and slightly tighter
- Subheadline is short (one line)
- Glass card with ★★★★★ and three badge pills appears between subheadline and CTA
- Secondary CTA is now a text link "See how it works ↓", not an outlined button

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "style: hero dark restyle — eyebrow, glass proof card, shortened subheadline"
```

---

## Task 5: Features — Dark Glass Cards

**Files:**
- Modify: `src/components/Features.tsx`

Converts the white card grid to dark glass cards. Uses Tailwind hover utilities directly on the card element (not `card-hover` class) for the background change on hover.

- [ ] **Step 1: Replace Features.tsx**

```typescript
"use client";

import { motion } from "framer-motion";
import { CreditCard, PieChart, Calendar, LayoutGrid, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "One place for everything",
    description: "Add and manage all your recurring subscriptions in one place with a beautiful card-based interface.",
    color: "#007AFF",
  },
  {
    icon: PieChart,
    title: "Clear Overview",
    description: "Instantly see how much you're spending each month and each year across all subscriptions. Switch display currency with a tap.",
    color: "#34C759",
  },
  {
    icon: Calendar,
    title: "Renewal Calendar",
    description: "See exactly what renews and when. Browse a monthly calendar and get a 30-day ahead view of upcoming payments so nothing sneaks up on you.",
    color: "#FF2D55",
  },
  {
    icon: LayoutGrid,
    title: "Home Screen Widget",
    description: "Add a widget to your Home Screen for an at-a-glance view of your monthly total, subscription count, and next renewals — without opening the app.",
    color: "#34C759",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your device. No accounts, no cloud sync, complete privacy.",
    color: "#60B4FF",
  },
  {
    icon: TrendingUp,
    title: "Paid So Far",
    description: "See the total you've paid each service since day one — not just the monthly rate. A reality check that makes you think twice.",
    color: "#E07868",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            All Your Subscriptions, Finally Organized
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            <span className="font-bold text-white/70">My Subscribe</span> is built to answer a few simple questions:
          </p>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            What am I paying for? How much is it every month? And is it still worth it?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white/[0.03] border border-white/[0.07] p-8 rounded-2xl card-hover hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon size={28} style={{ color: feature.color }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/40 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visually verify**

Check:
- Section background is `#0D0D14` (slightly lighter than hero)
- Cards have a barely-visible dark glass surface with subtle border
- Icon colors retained (blue, green, pink, etc.)
- Card lifts slightly on hover (translateY) with brighter border/background

- [ ] **Step 3: Commit**

```bash
git add src/components/Features.tsx
git commit -m "style: features dark glass card restyle"
```

---

## Task 6: PaidSoFarSection — New Spotlight Component

**Files:**
- Create: `src/components/PaidSoFarSection.tsx`

New section that gives "Paid So Far" its own dedicated spotlight, positioned after the Features grid for maximum emotional impact.

- [ ] **Step 1: Create PaidSoFarSection.tsx**

```typescript
"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function PaidSoFarSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-block bg-[rgba(232,120,104,0.12)] border border-[rgba(232,120,104,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold text-[#E07868] uppercase tracking-widest">
                New Perspective
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
              The Total You&apos;ve Paid.{" "}
              <span className="text-[#E07868]">Since Day One.</span>
            </h2>

            <p className="text-white/45 text-lg leading-relaxed mb-8">
              $9.99/month sounds small until you see $239 paid for a streaming
              service you open twice a year. MySubscribe shows you that number
              for every subscription you track.
            </p>

            {/* Illustrative stat card */}
            <div className="bg-[rgba(232,120,104,0.08)] border border-[rgba(232,120,104,0.15)] rounded-2xl p-6">
              <p className="text-xs text-white/40 mb-1">Example · Streaming Service A</p>
              <p className="text-4xl font-black text-[#E07868] mb-1">$239.76</p>
              <p className="text-sm text-white/35">
                paid since Jan 2022 &nbsp;·&nbsp; $9.99/mo &nbsp;·&nbsp; used: occasionally
              </p>
            </div>
          </motion.div>

          {/* Phone mockup side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup type="details" size="large" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

**Note:** This uses `PhoneMockup type="details"` which maps to `screen-insights.png`. Before launch, confirm this screenshot shows the "paid so far" total prominently. If it doesn't, a new image asset is needed.

- [ ] **Step 2: Verify the component renders (it won't be visible on the page yet — that happens in Task 12)**

Import it temporarily in `page.tsx` just to check for TypeScript errors:

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/PaidSoFarSection.tsx
git commit -m "feat: add PaidSoFarSection spotlight component"
```

---

## Task 7: RenewalsSection — Dark Restyle + Mid-Page CTA Nudge

**Files:**
- Modify: `src/components/RenewalsSection.tsx`

Dark restyle of the existing renewals section, plus a mid-page "Get the app free →" text CTA at the bottom to close the dead zone between hero and final CTA.

- [ ] **Step 1: Replace RenewalsSection.tsx**

```typescript
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, ListOrdered, BellOff } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const rows = [
  {
    icon: CalendarDays,
    color: "#007AFF",
    title: "Monthly Calendar",
    description:
      "See every subscription renewal plotted on a monthly grid. Tap any day to see exactly what's due and the daily total.",
  },
  {
    icon: ListOrdered,
    color: "#FF2D55",
    title: "30-Day Ahead View",
    description:
      "A rolling list of everything renewing in the next 30 days, sorted by date with the actual billed amount shown.",
  },
  {
    icon: BellOff,
    color: "#34C759",
    title: "No Surprise Charges",
    description:
      "Know the cost before it hits. Yearly subscriptions show the full annual amount so you're never caught off guard.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function RenewalsSection() {
  return (
    <section className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Never Miss a Renewal
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            A built-in calendar shows every renewal date at a glance. The 30-day upcoming list keeps the next payments front and center.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {rows.map((row) => (
              <motion.div
                key={row.title}
                variants={itemVariants}
                className="flex items-start gap-5"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${row.color}20` }}
                >
                  <row.icon size={24} style={{ color: row.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {row.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">{row.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup type="renewal" size="large" />
          </motion.div>
        </div>

        {/* Mid-page CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border-t border-white/[0.05] mt-16 pt-8 text-center"
        >
          <a
            href="https://apps.apple.com/app/my-subscribe/id6757849924"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007AFF] font-semibold text-sm hover:text-[#60B4FF] transition-colors underline underline-offset-4 decoration-[#007AFF]/30"
          >
            Get the app free →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visually verify**

Check:
- Section is `#0D0D14` (dark, alternating from PaidSoFarSection)
- Icon tiles retain their colors (blue, pink, green) at lower opacity
- "Get the app free →" blue text link appears below the content with a top hairline border

- [ ] **Step 3: Commit**

```bash
git add src/components/RenewalsSection.tsx
git commit -m "style: renewals dark restyle + mid-page CTA nudge"
```

---

## Task 8: WidgetSection — Dark Restyle

**Files:**
- Modify: `src/components/WidgetSection.tsx`

Dark restyle of the widget section. Highlighted middle card uses a blue-tinted dark glass.

- [ ] **Step 1: Replace WidgetSection.tsx**

```typescript
"use client";

import { motion } from "framer-motion";

const cards = [
  {
    badge: "Small",
    title: "Quick Glance",
    description: "Monthly total and subscription count at a glance.",
    highlight: false,
  },
  {
    badge: "Medium",
    title: "Next Renewals",
    description: "Monthly total plus your next upcoming renewals with amounts.",
    highlight: true,
  },
  {
    badge: "Large",
    title: "Full Overview",
    description: "Complete summary with more upcoming renewals listed out.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WidgetSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Always on Your Home Screen
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            MySubscribe widgets put your monthly total, subscription count, and upcoming renewals one glance away — no need to open the app.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                card.highlight
                  ? "bg-[rgba(9,124,224,0.12)] border border-[rgba(9,124,224,0.25)]"
                  : "bg-white/[0.03] border border-white/[0.07]"
              }`}
            >
              <span className="inline-block bg-gradient-to-r from-[#097CE0] to-[#0938E0] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
                {card.badge}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/40 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/30 mt-10 text-sm"
        >
          Widgets update automatically whenever you add or edit a subscription.
        </motion.p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visually verify**

Check:
- Section is `#0A0A0F`
- Middle card has a blue-tinted glass background and blue border
- Outer cards have the standard dark glass appearance
- Badge pills retain their blue gradient

- [ ] **Step 3: Commit**

```bash
git add src/components/WidgetSection.tsx
git commit -m "style: widget section dark restyle"
```

---

## Task 9: CTA — Dark Gradient Card

**Files:**
- Modify: `src/components/CTA.tsx`

Replaces the `hero-gradient` class (which was removed from globals.css) with an inline dark gradient. The CTA card gets a blue-glow border.

- [ ] **Step 1: Replace CTA.tsx**

```typescript
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="download" className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden border border-[rgba(0,122,255,0.15)]"
          style={{
            background: "linear-gradient(135deg, #071428 0%, #0A0A0F 100%)",
            boxShadow: "0 0 60px rgba(0, 122, 255, 0.08)",
          }}
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Stop Guessing. Start Knowing.
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Download{" "}
              <span className="font-bold text-white">My Subscribe</span>{" "}
              today. Free · Private · Beautifully Simple.
            </p>
            <motion.a
              href="https://apps.apple.com/app/my-subscribe/id6757849924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Image
                src="/assets/Download_on_the_App_Store_Badge_US.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Visually verify**

Check:
- CTA section is dark (no blue gradient from old `hero-gradient`)
- The card has a deep navy gradient (`#071428` → `#0A0A0F`)
- Subtle blue border glow around the card
- App Store badge centered below copy

- [ ] **Step 3: Commit**

```bash
git add src/components/CTA.tsx
git commit -m "style: CTA dark gradient card, remove hero-gradient dependency"
```

---

## Task 10: ReviewQuote — New Social Proof Component

**Files:**
- Create: `src/components/ReviewQuote.tsx`

A single 5-star App Store review displayed in a glass card. **Replace the placeholder quote with the real App Store review text before shipping.**

- [ ] **Step 1: Create ReviewQuote.tsx**

```typescript
"use client";

import { motion } from "framer-motion";

// TODO: Replace with real App Store review text before launch
// Retrieve from App Store Connect > Reviews
const review = {
  text: "Finally an app that shows me exactly what I'm spending on subscriptions. Simple, clean, and does exactly what it promises.",
  attribution: "Verified App Store Review",
};

export default function ReviewQuote() {
  return (
    <section className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold text-white/30 uppercase tracking-widest text-center mb-10"
        >
          What Users Say
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] mx-auto bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
        >
          <div className="flex gap-0.5 mb-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#FF9500] text-lg">★</span>
            ))}
          </div>
          <p className="text-white/70 text-lg italic leading-relaxed mb-6">
            &ldquo;{review.text}&rdquo;
          </p>
          <p className="text-white/30 text-sm font-semibold">
            — {review.attribution}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ReviewQuote.tsx
git commit -m "feat: add ReviewQuote component with placeholder text"
```

---

## Task 11: InlineFAQ — New Inline FAQ Component

**Files:**
- Create: `src/components/InlineFAQ.tsx`

Surfaces the 3 highest-conversion FAQ questions directly on the home page, above the final CTA, so users can resolve objections without navigating away.

- [ ] **Step 1: Create InlineFAQ.tsx**

```typescript
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const questions = [
  {
    q: "Is it free?",
    a: "Yes, completely free. No in-app purchases, no subscription required to use the app.",
  },
  {
    q: "Is my data private?",
    a: "100%. Everything stays on your device. No accounts, no cloud sync, no data collection whatsoever.",
  },
  {
    q: "Do I have to enter subscriptions manually?",
    a: "Yes — but it takes seconds per subscription and you only do it once. No bank connections, no automatic scanning.",
  },
];

export default function InlineFAQ() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-extrabold text-white mb-12 tracking-tight"
        >
          Quick Answers
        </motion.h2>

        <div className="flex flex-col">
          {questions.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`py-6 ${
                index < questions.length - 1
                  ? "border-b border-white/[0.06]"
                  : ""
              }`}
            >
              <h3 className="text-base font-semibold text-white mb-2">
                {item.q}
              </h3>
              <p className="text-white/45 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/faq"
            className="text-[#007AFF] text-sm font-semibold hover:text-[#60B4FF] transition-colors"
          >
            See all FAQs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Check for TypeScript errors**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/InlineFAQ.tsx
git commit -m "feat: add InlineFAQ component — 3 top objections surfaced on home page"
```

---

## Task 12: Wire Up page.tsx — New Section Order

**Files:**
- Modify: `src/app/page.tsx`

This is the final wiring task. Removes the Screenshots import, adds the 3 new components, and puts everything in the correct order.

- [ ] **Step 1: Replace page.tsx**

```typescript
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PaidSoFarSection from "@/components/PaidSoFarSection";
import RenewalsSection from "@/components/RenewalsSection";
import WidgetSection from "@/components/WidgetSection";
import ReviewQuote from "@/components/ReviewQuote";
import InlineFAQ from "@/components/InlineFAQ";
import CTA from "@/components/CTA";
import JsonLd, { softwareApplicationSchema, webSiteSchema, organizationSchema } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd data={webSiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareApplicationSchema} />
      <Hero />
      <Features />
      <PaidSoFarSection />
      <RenewalsSection />
      <WidgetSection />
      <ReviewQuote />
      <InlineFAQ />
      <CTA />
    </>
  );
}
```

- [ ] **Step 2: Run full build to check for errors**

```bash
npm run build
```

Expected: build succeeds with no TypeScript or import errors. If `Screenshots` was the only consumer of the Screenshots component, there will be no unused-import warnings.

- [ ] **Step 3: Full visual review in browser**

```bash
npm run dev
```

Open `http://localhost:3000` and scroll top to bottom. Verify section order:
1. Header — dark, "Get App" pill on mobile
2. Hero — dark gradient, eyebrow, glass proof card
3. Features — dark glass 6-card grid
4. Paid So Far — coral accent, stat card, phone mockup
5. Renewals — dark, bullet rows, phone mockup, "Get the app free →" nudge
6. Widget — dark, 3-column cards, blue highlight on middle
7. Review Quote — single 5-star card on `#0D0D14`
8. Inline FAQ — 3 questions on `#0A0A0F`
9. CTA — dark gradient card with blue glow border

Also verify:
- No white flash on page load
- Sections visually alternate between `#0A0A0F` and `#0D0D14` (subtle depth variation)
- All Framer Motion entrance animations still fire correctly on scroll

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire up new page structure — dark redesign complete"
```

---

## Pre-Launch Checklist

Before deploying, complete these items that require real content:

- [ ] **Replace ReviewQuote placeholder** — retrieve actual text from App Store Connect > Ratings & Reviews. Update `src/components/ReviewQuote.tsx` line with the `review` constant.
- [ ] **Verify `screen-insights.png`** — open `public/assets/screen-insights.png` and confirm the screen prominently shows the "paid so far" / total amount paid figure. If it does not, create a new screenshot and add it as a new asset.
- [ ] **Final cross-device check** — test on an actual iPhone (Safari) to verify the `theme-color` meta turns the browser chrome dark, and the "Get App" mobile pill is tappable at a comfortable size.
