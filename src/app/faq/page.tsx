"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is MySubscribe?",
    answer:
      "MySubscribe is a simple, beautiful iOS app that helps you track and manage all your recurring subscriptions in one place. See your total monthly and yearly spending at a glance.",
  },
  {
    question: "Is MySubscribe free?",
    answer:
      "Yes! MySubscribe is completely free to download and use. There are no hidden fees, subscriptions, or in-app purchases required to use the core features.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All your subscription data is stored locally on your device. We don't collect, transmit, or store any of your personal or financial information on external servers. Your data stays with you.",
  },
  {
    question: "Can I sync my data across devices?",
    answer:
      "Currently, MySubscribe stores data locally on your device for maximum privacy. Cloud sync is being considered for a future update as an optional feature.",
  },
  {
    question: "What categories are available?",
    answer:
      "MySubscribe includes categories like Streaming, Software, Fitness, Productivity, Gaming, Music, News, Cloud Storage, and Other. Each category has its own icon for easy identification.",
  },
  {
    question: "Can I track both monthly and yearly subscriptions?",
    answer:
      "Yes! You can add subscriptions with either monthly or yearly billing cycles. The app automatically calculates and displays both your monthly spending and yearly projections.",
  },
  {
    question: "How do I delete a subscription?",
    answer:
      "You can delete a subscription by tapping on it to view the details, then using the delete option. You can also swipe to delete from the main list view.",
  },
  {
    question: "Is MySubscribe available on Android?",
    answer:
      "Currently, MySubscribe is only available for iOS devices (iPhone). An Android version may be considered in the future based on user demand.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-[#0F1012] pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F1012] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Everything you need to know about MySubscribe
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:support@mysubscribe.app"
            className="inline-flex items-center gap-2 text-[#007AFF] font-medium hover:underline"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
}
