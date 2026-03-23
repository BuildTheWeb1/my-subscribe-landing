"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="download" className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden border border-[rgba(0,122,255,0.15)]"
          style={{
            background: "linear-gradient(135deg, #071428 0%, #0A0A0F 100%)",
            boxShadow: "0 0 60px rgba(0, 122, 255, 0.08)",
          }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Stop Guessing. Start Knowing.
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Download{" "}
              <span className="font-bold text-white">My Subscribe</span>{" "}
              today. Free · Private · Beautifully Simple.
            </p>
            <motion.a
              href="https://apps.apple.com/app/my-subscribe/id6757849924"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Image
                src="/assets/Download_on_the_App_Store_Badge_US.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
