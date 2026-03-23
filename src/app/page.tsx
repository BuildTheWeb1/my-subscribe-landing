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
