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
              See What Your
              <span className="bg-gradient-to-r from-[#007AFF] to-[#00D4FF] bg-clip-text text-transparent">
                {" "}Subscriptions{" "}
              </span>
              Really Cost You
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              A simple iOS app that keeps all your subscriptions in one place and shows you exactly how much they cost each month, each year, and since the day you signed up. No accounts, no spreadsheets, just a clear view of where your money goes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              {/* <motion.a
                href="https://apps.apple.com/ro/app/my-subscribe/id6757849924"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NextImage
                  src="/assets/Download_on_the_App_Store_Badge_US.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                />
              </motion.a> */}
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
