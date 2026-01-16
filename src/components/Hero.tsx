"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F1012] leading-tight mb-6">
              Track Your
              <span className="bg-gradient-to-r from-[#007AFF] to-[#00D4FF] bg-clip-text text-transparent">
                {" "}Subscriptions{" "}
              </span>
              Effortlessly
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Take control of your recurring expenses. MySubscribe helps you
              track, manage, and optimize all your subscriptions in one
              beautiful app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-[#0066DD] transition-colors shadow-lg shadow-blue-500/25"
              >
                Download for iOS
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-200 text-[#0F1012] px-8 py-4 rounded-full font-semibold text-center hover:border-[#007AFF] hover:text-[#007AFF] transition-colors"
              >
                Learn More
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
