import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const siteUrl = "https://mysubscribe.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MySubscribe - Track Your Subscriptions Effortlessly",
    template: "%s | MySubscribe",
  },
  description: "Take control of your recurring expenses. MySubscribe helps you track, manage, and optimize all your subscriptions in one beautiful iOS app. Free, private, and simple.",
  keywords: ["subscription tracker", "subscription manager", "iOS app", "expense tracker", "recurring payments", "budget app", "subscription management"],
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
    title: "MySubscribe - Track Your Subscriptions Effortlessly",
    description: "Take control of your recurring expenses. MySubscribe helps you track, manage, and optimize all your subscriptions in one beautiful iOS app.",
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
    title: "MySubscribe - Track Your Subscriptions Effortlessly",
    description: "Take control of your recurring expenses. MySubscribe helps you track, manage, and optimize all your subscriptions in one beautiful iOS app.",
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
      </body>
    </html>
  );
}
