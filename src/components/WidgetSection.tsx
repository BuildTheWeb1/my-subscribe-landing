"use client";

import { motion } from "framer-motion";

const cards = [
  {
    badge: "Small",
    title: "Quick Glance",
    description: "Monthly total and subscription count at a glance.",
    highlight: false,
  },
  {
    badge: "Medium",
    title: "Next Renewals",
    description: "Monthly total plus your next upcoming renewals with amounts.",
    highlight: true,
  },
  {
    badge: "Large",
    title: "Full Overview",
    description: "Complete summary with more upcoming renewals listed out.",
    highlight: false,
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

export default function WidgetSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Always on Your Home Screen
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            MySubscribe widgets put your monthly total, subscription count, and upcoming renewals one glance away — no need to open the app.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className={`p-8 rounded-2xl ${
                card.highlight
                  ? "bg-[rgba(9,124,224,0.12)] border border-[rgba(9,124,224,0.25)]"
                  : "bg-white/[0.03] border border-white/[0.07]"
              }`}
            >
              <span className="inline-block bg-gradient-to-r from-[#0870C8] to-[#0938E0] text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
                {card.badge}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-white/55 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/50 mt-10 text-sm"
        >
          Widgets update automatically whenever you add or edit a subscription.
        </motion.p>
      </div>
    </section>
  );
}
