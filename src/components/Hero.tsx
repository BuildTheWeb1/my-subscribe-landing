"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-32 pb-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0A0A0F 0%, #0C1220 50%, #0A0A0F 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 bg-[rgba(0,122,255,0.12)] border border-[rgba(0,122,255,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] shadow-[0_0_6px_#007AFF]" />
              <span className="text-xs font-semibold text-[#60B4FF]">iOS App · Free Download</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
            >
              See What Your
              <span className="bg-gradient-to-r from-[#007AFF] to-[#00D4FF] bg-clip-text text-transparent">
                {" "}Subscriptions{" "}
              </span>
              Really Cost You
            </h1>

            <p className="text-base text-white/50 mb-6 max-w-lg leading-relaxed">
              No accounts. No spreadsheets. Just a clear view of where your money goes.
            </p>

            {/* Glass social proof card */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl backdrop-blur-sm p-4 mb-8 max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#FF9500] text-sm tracking-wide">★★★★★</span>
                <span className="text-xs text-white/40 font-medium">5.0 · App Store</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[rgba(0,122,255,0.18)] border border-[rgba(0,122,255,0.25)] text-[#60B4FF] text-xs font-semibold px-3 py-1 rounded-full">
                  🔒 No Account
                </span>
                <span className="bg-[rgba(52,199,89,0.12)] border border-[rgba(52,199,89,0.2)] text-[#4ADE80] text-xs font-semibold px-3 py-1 rounded-full">
                  ✓ Free
                </span>
                <span className="bg-white/[0.06] border border-white/10 text-white/50 text-xs font-semibold px-3 py-1 rounded-full">
                  📱 On-Device
                </span>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <motion.a
                href="https://apps.apple.com/app/my-subscribe/id6757849924"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/Download_on_the_App_Store_Badge_US.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                />
              </motion.a>
              <motion.a
                href="#features"
                className="text-sm text-white/40 underline underline-offset-4 decoration-white/20 hover:text-white/60 transition-colors"
              >
                See how it works ↓
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <PhoneMockup type="home-filled" size="large" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
