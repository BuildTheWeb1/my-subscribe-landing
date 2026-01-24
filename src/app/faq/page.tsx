import { Metadata } from "next";
import FAQContent from "./FAQContent";
import JsonLd, { generateFAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about MySubscribe - the free iOS subscription tracker app. Learn about features, privacy, data security, and more.",
  alternates: {
    canonical: "https://my-subscribe.app/faq",
  },
  openGraph: {
    title: "FAQ - MySubscribe",
    description: "Find answers to common questions about MySubscribe - the free iOS subscription tracker app.",
    url: "https://my-subscribe.app/faq",
  },
};

const faqs = [
  {
    question: "What is MySubscribe?",
    answer:
      "MySubscribe is a simple, beautiful iOS app that helps you track and manage all your recurring subscriptions in one place. See your total monthly and yearly spending at a glance.",
  },
  {
    question: "Is MySubscribe free?",
    answer:
      "Yes! MySubscribe is completely free to download and use. There are no hidden fees, subscriptions, or in-app purchases required to use the core features.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All your subscription data is stored locally on your device. We don't collect, transmit, or store any of your personal or financial information on external servers. Your data stays with you.",
  },
  {
    question: "Can I sync my data across devices?",
    answer:
      "Currently, MySubscribe stores data locally on your device for maximum privacy. Cloud sync is being considered for a future update as an optional feature.",
  },
  {
    question: "What categories are available?",
    answer:
      "MySubscribe includes categories like Streaming, Software, Fitness, Productivity, Gaming, Music, News, Cloud Storage, and Other. Each category has its own icon for easy identification.",
  },
  {
    question: "Can I track both monthly and yearly subscriptions?",
    answer:
      "Yes! You can add subscriptions with either monthly or yearly billing cycles. The app automatically calculates and displays both your monthly spending and yearly projections.",
  },
  {
    question: "How do I delete a subscription?",
    answer:
      "You can delete a subscription by tapping on it to view the details, then using the delete option. You can also swipe to delete from the main list view.",
  },
  {
    question: "Is MySubscribe available on Android?",
    answer:
      "Currently, MySubscribe is only available for iOS devices (iPhone). An Android version may be considered in the future based on user demand.",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(faqs)} />
      <FAQContent faqs={faqs} />
    </>
  );
}
