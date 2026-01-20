"use client";

import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F1012] mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg mb-8">
              Last updated: January 2026
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#0F1012] mb-4">
                Your Privacy Matters
              </h2>
              <p className="text-gray-600 mb-4">
                MySubscribe is designed with privacy as a core principle. We believe your 
                financial data should stay on your device and under your control.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#0F1012] mb-4">
                Data Storage
              </h2>
              <p className="text-gray-600 mb-4">
                All your subscription data is stored locally on your device using secure 
                on-device storage. We do not collect, transmit, or store any of your 
                personal or financial information on external servers.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>No cloud sync or external data storage</li>
                <li>No user accounts required</li>
                <li>No tracking or analytics</li>
                <li>No third-party data sharing</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#0F1012] mb-4">
                What We Don&apos;t Collect
              </h2>
              <p className="text-gray-600 mb-4">
                MySubscribe does not collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personal identification information</li>
                <li>Financial or payment information</li>
                <li>Usage analytics or behavior data</li>
                <li>Device identifiers</li>
                <li>Location data</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#0F1012] mb-4">
                Data Deletion
              </h2>
              <p className="text-gray-600 mb-4">
                Since all data is stored locally on your device, you have complete control 
                over your data. You can delete individual subscriptions within the app or 
                remove all data by uninstalling the application.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#0F1012] mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. Any changes will be 
                reflected on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#0F1012] mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please reach out on{" "}
                <a 
                  href="https://x.com/buildtheweb1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#007AFF] hover:text-[#0066DD] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @buildtheweb1
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
