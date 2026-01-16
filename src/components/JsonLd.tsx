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
  url: "https://mysubscribe.app",
  logo: "https://mysubscribe.app/assets/logo.png",
  description: "MySubscribe helps you track, manage, and optimize all your subscriptions in one beautiful iOS app.",
  sameAs: [],
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MySubscribe",
  operatingSystem: "iOS",
  applicationCategory: "FinanceApplication",
  description: "Take control of your recurring expenses. MySubscribe helps you track, manage, and optimize all your subscriptions in one beautiful iOS app.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MySubscribe",
  url: "https://mysubscribe.app",
  description: "Track your subscriptions effortlessly with MySubscribe - the free, private iOS app for managing recurring expenses.",
  publisher: {
    "@type": "Organization",
    name: "MySubscribe App",
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
