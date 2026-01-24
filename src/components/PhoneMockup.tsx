"use client";

import Image from "next/image";

interface PhoneMockupProps {
  type: "home" | "home-filled" | "add" | "details";
  size?: "small" | "large";
}

const screenshotMap: Record<PhoneMockupProps["type"], string> = {
  home: "/assets/screen-home-empty.png",
  "home-filled": "/assets/screen-home-new.png",
  add: "/assets/screen-add-subscription.png",
  details: "/assets/screen-insights.png",
};

const altTextMap: Record<PhoneMockupProps["type"], string> = {
  home: "MySubscribe iOS app empty home screen showing subscription tracker interface",
  "home-filled": "MySubscribe subscription tracker displaying multiple active subscriptions with monthly costs",
  add: "Add new subscription screen in MySubscribe iOS app with category selection",
  details: "Subscription insights and cost breakdown view in MySubscribe app",
};

export default function PhoneMockup({ type, size = "small" }: PhoneMockupProps) {
  const sizeClasses = size === "large" 
    ? "w-[280px] h-[560px] md:w-[320px] md:h-[640px]" 
    : "w-[220px] h-[440px] md:w-[260px] md:h-[520px]";

  return (
    <div className={`relative ${sizeClasses}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF] to-[#00D4FF] rounded-[3rem] blur-3xl opacity-20" />
      <div className="relative bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden h-full p-2">
        <div className="bg-white rounded-[2rem] h-full overflow-hidden relative">
          <Image
            src={screenshotMap[type]}
            alt={altTextMap[type]}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 220px, 320px"
          />
        </div>
      </div>
    </div>
  );
}
