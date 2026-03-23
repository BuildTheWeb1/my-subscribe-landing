"use client";

import { motion } from "framer-motion";
import { CalendarDays, ListOrdered, BellOff } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const rows = [
  {
    icon: CalendarDays,
    color: "#007AFF",
    title: "Monthly Calendar",
    description:
      "See every subscription renewal plotted on a monthly grid. Tap any day to see exactly what's due and the daily total.",
  },
  {
    icon: ListOrdered,
    color: "#FF2D55",
    title: "30-Day Ahead View",
    description:
      "A rolling list of everything renewing in the next 30 days, sorted by date with the actual billed amount shown.",
  },
  {
    icon: BellOff,
    color: "#34C759",
    title: "No Surprise Charges",
    description:
      "Know the cost before it hits. Yearly subscriptions show the full annual amount so you're never caught off guard.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function RenewalsSection() {
  return (
    <section className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Never Miss a Renewal
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            A built-in calendar shows every renewal date at a glance. The 30-day upcoming list keeps the next payments front and center.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {rows.map((row) => (
              <motion.div
                key={row.title}
                variants={itemVariants}
                className="flex items-start gap-5"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${row.color}20` }}
                >
                  <row.icon size={24} style={{ color: row.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {row.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">{row.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup type="renewal" size="large" />
          </motion.div>
        </div>

        {/* Mid-page CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border-t border-white/[0.05] mt-16 pt-8 text-center"
        >
          <a
            href="https://apps.apple.com/app/my-subscribe/id6757849924"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007AFF] font-semibold text-sm hover:text-[#60B4FF] transition-colors underline underline-offset-4 decoration-[#007AFF]/30"
          >
            Get the app free →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
