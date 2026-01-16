"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function CTA() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hero-gradient rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Download MySubscribe today and start tracking your subscriptions.
              It&apos;s free, private, and beautifully simple.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[#007AFF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Apple size={24} />
              Download on App Store
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
