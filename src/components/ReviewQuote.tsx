"use client";

import { motion } from "framer-motion";

// TODO: Replace with real App Store review text before launch
// Retrieve from App Store Connect > Reviews
const review = {
  text: "Finally an app that shows me exactly what I'm spending on subscriptions. Simple, clean, and does exactly what it promises.",
  attribution: "Verified App Store Review",
};

export default function ReviewQuote() {
  return (
    <section className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-bold text-white/30 uppercase tracking-widest text-center mb-10"
        >
          What Users Say
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] mx-auto bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
        >
          <div className="flex gap-0.5 mb-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#FF9500] text-lg">★</span>
            ))}
          </div>
          <p className="text-white/70 text-lg italic leading-relaxed mb-6">
            &ldquo;{review.text}&rdquo;
          </p>
          <p className="text-white/30 text-sm font-semibold">
            — {review.attribution}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
