"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const questions = [
  {
    q: "Is it free?",
    a: "Yes, completely free. No in-app purchases, no subscription required to use the app.",
  },
  {
    q: "Is my data private?",
    a: "100%. Everything stays on your device. No accounts, no cloud sync, no data collection whatsoever.",
  },
  {
    q: "Do I have to enter every subscription manually?",
    a: "Not all of them. MySubscribe includes a curated service catalog with popular apps pre-loaded — just pick and confirm. For anything not in the catalog, manual entry takes seconds and you only do it once.",
  },
];

export default function InlineFAQ() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-extrabold text-white mb-12 tracking-tight"
        >
          Quick Answers
        </motion.h2>

        <div className="flex flex-col">
          {questions.map((item, index) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`py-6 ${
                index < questions.length - 1
                  ? "border-b border-white/[0.06]"
                  : ""
              }`}
            >
              <h3 className="text-base font-semibold text-white mb-2">
                {item.q}
              </h3>
              <p className="text-white/45 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/faq"
            className="text-[#007AFF] text-sm font-semibold hover:text-[#60B4FF] transition-colors"
          >
            See all FAQs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
