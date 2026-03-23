"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function PaidSoFarSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="inline-block bg-[rgba(232,120,104,0.12)] border border-[rgba(232,120,104,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-bold text-[#E07868] uppercase tracking-widest">
                New Perspective
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-6">
              The Total You&apos;ve Paid.{" "}
              <span className="text-[#E07868]">Since Day One.</span>
            </h2>

            <p className="text-white/45 text-lg leading-relaxed mb-8">
              $9.99/month sounds small until you see $239 paid for a streaming
              service you open twice a year. MySubscribe shows you that number
              for every subscription you track.
            </p>

            {/* Illustrative stat card */}
            <div className="bg-[rgba(232,120,104,0.08)] border border-[rgba(232,120,104,0.15)] rounded-2xl p-6">
              <p className="text-xs text-white/40 mb-1">Example · Streaming Service A</p>
              <p className="text-4xl font-black text-[#E07868] mb-1">$239.76</p>
              <p className="text-sm text-white/35">
                paid since Jan 2022 &nbsp;·&nbsp; $9.99/mo &nbsp;·&nbsp; used: occasionally
              </p>
            </div>
          </motion.div>

          {/* Phone mockup side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup type="details" size="large" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
