"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const screenshots: { type: "home-filled" | "add" | "details"; title: string }[] = [
  {
    type: "home-filled",
    title: "Beautiful Overview",
  },
  {
    type: "add",
    title: "Easy to Add",
  },
  {
    type: "details",
    title: "Detailed Insights",
  },
];

export default function Screenshots() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1012] mb-4">
            A Quick Look at Your Money, Any Time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A clean, intuitive interface designed for effortless subscription management
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <PhoneMockup type={screenshot.type} size="small" />
              <p className="mt-4 font-semibold text-[#0F1012]">{screenshot.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
