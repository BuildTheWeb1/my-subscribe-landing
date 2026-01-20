"use client";

import { motion } from "framer-motion";
import { CreditCard, PieChart, Bell, Smartphone, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Track All Subscriptions",
    description: "Add and manage all your recurring subscriptions in one place with a beautiful card-based interface.",
    color: "#007AFF",
  },
  {
    icon: PieChart,
    title: "Monthly Overview",
    description: "See your total monthly and yearly spending at a glance with clear, prominent displays.",
    color: "#34C759",
  },
  {
    icon: Bell,
    title: "Payment Reminders",
    description: "Never miss a payment with timely notifications before your subscriptions renew.",
    color: "#FF2D55",
    isComingSoon: true,
  },
  {
    icon: Smartphone,
    title: "Native iOS Experience",
    description: "Built with SwiftUI for a smooth, native experience that feels right at home on your iPhone.",
    color: "#007AFF",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your device. No accounts, no cloud sync, complete privacy.",
    color: "#2B3744",
  },
  {
    icon: Zap,
    title: "Quick Add",
    description: "Add new subscriptions in seconds with our streamlined form and category presets.",
    color: "#C96F5E",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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
    <section id="features" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1012] mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Simple yet powerful features to help you take control of your subscriptions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow card-hover"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon size={28} style={{ color: feature.color }} />
                </div>
                {feature.isComingSoon && (
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Coming Soon</span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#0F1012] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
