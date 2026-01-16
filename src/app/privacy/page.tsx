import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MySubscribe Privacy Policy - Learn how we protect your data. All subscription data is stored locally on your device with no cloud sync or external data storage.",
  alternates: {
    canonical: "https://mysubscribe.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy - MySubscribe",
    description: "Learn how MySubscribe protects your data. All subscription data is stored locally on your device.",
    url: "https://mysubscribe.app/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
