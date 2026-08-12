"use client";

import { motion } from "framer-motion";
import { CreditCard, PieChart, Calendar, LayoutGrid, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "One place for everything",
    description: "Add and manage all your recurring subscriptions in one place with a beautiful card-based interface.",
    color: "#007AFF",
  },
  {
    icon: PieChart,
    title: "Clear Overview",
    description: "Instantly see how much you’re spending each month and each year across all subscriptions. Switch display currency with a tap.",
    color: "#34C759",
  },
  {
    icon: Calendar,
    title: "Renewal Calendar",
    description: "See exactly what renews and when. Browse a monthly calendar and get a 30-day ahead view of upcoming payments so nothing sneaks up on you.",
    color: "#FF2D55",
  },
  {
    icon: LayoutGrid,
    title: "Home Screen Widget",
    description: "Add a widget to your Home Screen for an at-a-glance view of your monthly total, subscription count, and next renewals — without opening the app.",
    color: "#34C759",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your device. No accounts, no cloud sync, complete privacy.",
    color: "#60B4FF",
  },
  {
    icon: TrendingUp,
    title: "Paid So Far",
    description: "See the total you’ve paid each service since day one — not just the monthly rate. A reality check that makes you think twice.",
    color: "#E07868",
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

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-[#0D0D14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            All Your Subscriptions, Finally Organized
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            <span className="font-bold text-white/70">My Subscribe</span> is built to answer a few simple questions:
          </p>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            What am I paying for? How much is it every month? And is it still worth it?
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white/[0.03] border border-white/[0.07] p-8 rounded-2xl card-hover hover:bg-white/[0.05] hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon size={28} style={{ color: feature.color }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/55 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
