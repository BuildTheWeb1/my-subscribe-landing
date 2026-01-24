interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MySubscribe App",
  url: "https://my-subscribe.app",
  logo: "https://my-subscribe.app/assets/logo.png",
  description: "MySubscribe helps you track, manage, and optimize all your subscriptions in one beautiful iOS app.",
  sameAs: ["https://x.com/buildtheweb1"],
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "MySubscribe",
  operatingSystem: "iOS",
  applicationCategory: "FinanceApplication",
  description: "Track all your subscriptions in one place. Free iOS app that shows exactly what you're paying for monthly and yearly. Privacy-first with no accounts needed.",
  url: "https://my-subscribe.app",
  downloadUrl: "https://apps.apple.com/ro/app/my-subscribe/id6757849924",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
  featureList: [
    "Track unlimited subscriptions",
    "See monthly and yearly costs",
    "Privacy-first - data stays on device",
    "No accounts required",
    "Native iOS experience",
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MySubscribe",
  url: "https://my-subscribe.app",
  description: "Track your subscriptions effortlessly with MySubscribe - the free, private iOS app for managing recurring expenses.",
  publisher: {
    "@type": "Organization",
    name: "MySubscribe App",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://my-subscribe.app/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
