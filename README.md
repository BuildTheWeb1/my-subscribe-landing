# MySubscribe Landing Page

A modern, SEO-optimized landing page for **MySubscribe** — a free iOS app that helps users track and manage their recurring subscriptions.

## About MySubscribe

MySubscribe is a privacy-first subscription tracker for iOS that lets you:

- **Track All Subscriptions** — Add and manage all your recurring subscriptions in one place
- **Monthly Overview** — See total monthly and yearly spending at a glance
- **Payment Reminders** — Get notified before subscriptions renew
- **Privacy First** — All data stays on your device, no accounts required
- **Quick Add** — Add new subscriptions in seconds with category presets
- **Native iOS Experience** — Built with SwiftUI for a smooth, native feel

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Fonts**: [Geist](https://vercel.com/font) (via next/font)

## SEO Features

- Comprehensive metadata (Open Graph, Twitter Cards)
- JSON-LD structured data (Organization, SoftwareApplication, FAQPage)
- Dynamic sitemap and robots.txt
- Semantic HTML with proper heading hierarchy
- Optimized for Core Web Vitals and AI Overviews

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   ├── faq/            # FAQ page
│   ├── privacy/        # Privacy policy page
│   ├── sitemap.ts      # Dynamic sitemap
│   └── robots.ts       # Robots.txt
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features grid
│   ├── Screenshots.tsx # App screenshots
│   ├── CTA.tsx         # Call-to-action section
│   ├── Footer.tsx      # Site footer
│   ├── PhoneMockup.tsx # Phone frame component
│   └── JsonLd.tsx      # Structured data schemas
└── public/
    └── assets/         # Images and logo
```

## License

All rights reserved.
