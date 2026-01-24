import type { Metadata } from "next";
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
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "MySubscribe - Subscription Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MySubscribe - iOS Subscription Tracker | See What You Really Pay",
    description: "Free iOS app that tracks all your subscriptions in one place. See monthly and yearly costs instantly. Privacy-first, no accounts. Download on App Store.",
    images: ["/assets/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Finance",
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
