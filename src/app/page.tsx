import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import RenewalsSection from "@/components/RenewalsSection";
import WidgetSection from "@/components/WidgetSection";
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
      <Screenshots />
      <RenewalsSection />
      <WidgetSection />
      <CTA />
    </>
  );
}
