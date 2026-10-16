import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Mail, FileText } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Nilkanth World Exim",
  description: "Privacy policy regarding information collected through commercial trade inquiry forms on the Nilkanth World Exim website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EAE1] text-[#173F35] text-xs font-semibold uppercase mb-3">
              <Shield className="w-3.5 h-3.5 text-[#B89453]" />
              <span>Data & Inquiry Handling</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2540] font-editorial tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              Last updated: March 2026 • Nilkanth World Exim, Surat, Gujarat, India
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-gray-600 space-y-6 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0A2540] font-editorial">1. Overview</h2>
              <p>
                Nilkanth World Exim (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates this website to provide information about our Indian agricultural commodities export portfolio and to facilitate B2B trade inquiries. This Privacy Policy clarifies what information we collect when you use our contact form or contact us through our published channels, why we collect it, and how it is managed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0A2540] font-editorial">2. Information We Collect</h2>
              <p>
                When you initiate a commercial trade inquiry via our online contact form, we collect only the business information you voluntarily provide:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Full Name:</strong> To address you professionally.</li>
                <li><strong>Company Name:</strong> To understand the trading entity or organization you represent.</li>
                <li><strong>Business Email Address:</strong> To send trade specifications, quotations, and commercial replies.</li>
                <li><strong>Phone / WhatsApp Number:</strong> To coordinate time-sensitive inquiries when requested.</li>
                <li><strong>Country & Destination Port:</strong> To evaluate export logistics, applicable regulations, and freight routes.</li>
                <li><strong>Product of Interest & Quantity:</strong> To assess crop availability, packaging, and commercial terms.</li>
                <li><strong>Message / Requirements:</strong> Any additional parameters, purity thresholds, or custom instructions you communicate.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0A2540] font-editorial">3. Purpose of Information Collection</h2>
              <p>
                We use the submitted information solely for genuine business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>To evaluate and respond to your trade inquiries, requests for quotations (RFQs), and sample requests.</li>
                <li>To verify destination phytosanitary and export compliance requirements.</li>
                <li>To communicate trade terms, proforma invoices, and logistics updates if a transaction proceeds.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your contact information to third-party marketing companies, advertisers, or lead brokers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0A2540] font-editorial">4. Data Handling & Security</h2>
              <p>
                Inquiry details submitted through our contact form are processed securely through server-side application programming interfaces and routed directly to our designated business email inbox (<code>{siteConfig.contact.email}</code>). Access to this inbox is restricted to authorized commercial personnel at Nilkanth World Exim.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0A2540] font-editorial">5. Data Retention & Your Rights</h2>
              <p>
                We retain inquiry communications for as long as necessary to conduct ongoing business correspondence or to fulfill legitimate accounting and export recordkeeping requirements. You may at any time request that we review, update, or delete your contact details from our active correspondence database by contacting us at:
              </p>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs sm:text-sm">
                <p><strong>NILKANTH WORLD EXIM</strong></p>
                <p>D-601, Saffron Sky, Singanpore Causeway Road, Surat, Gujarat – 395004, India</p>
                <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0A2540] underline font-medium">{siteConfig.contact.email}</a></p>
                <p>Phone: {siteConfig.contact.phone}</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#0A2540] font-editorial">6. Updates to This Policy</h2>
              <p>
                We may periodically update this policy to reflect operational or regulatory changes. Any modifications will be posted directly to this page with an updated revision date.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <Link href="/" className="text-[#0A2540] font-medium hover:underline">
              ← Return to Home
            </Link>
            <Link href="/contact" className="text-[#0A2540] font-medium hover:underline">
              Contact Desk →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
