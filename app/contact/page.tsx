import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Building2,
  FileCheck2,
  CheckCircle2
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us & B2B Inquiry Desk | Nilkanth World Exim",
  description: "Contact Nilkanth World Exim in Surat, Gujarat for bulk inquiries regarding Indian turmeric, cumin, red chilli, coriander, sesame seeds, isabgol, and moringa. Request quotation.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#071c2f] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/export-logistics.webp"
            alt="International trade and inquiry communications - Nilkanth World Exim"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06192a] via-[#06192a]/95 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/15">
              <span>B2B Commercial Communications</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-editorial tracking-tight">
              Contact Nilkanth World Exim
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Submit your commodity sourcing specifications, volume requirements, or trade inquiries. Our Surat export desk will review your details and respond with commercial options.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
      </div>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Official Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">
                    Official Business Details
                  </span>
                  <h2 className="text-2xl font-bold text-[#0A2540] font-editorial mt-1">
                    {siteConfig.name}
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Indian Spices, Agricultural Commodities & Export Trading
                  </p>
                </div>

                <div className="space-y-5 pt-3 border-t border-gray-100">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#E5EAE1] text-[#173F35] shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-[#D92525]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Registered Office</h4>
                      <address className="not-italic text-sm text-gray-800 leading-relaxed mt-1 font-medium">
                        {siteConfig.contact.address.line1},<br />
                        {siteConfig.contact.address.line2},<br />
                        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} – {siteConfig.contact.address.postalCode},<br />
                        {siteConfig.contact.address.country}
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#E5EAE1] text-[#173F35] shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-[#B89453]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Direct Telephone</h4>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="text-sm font-semibold text-[#0A2540] hover:text-[#D92525] transition mt-1 block"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      <span className="text-xs text-gray-400">Available Mon–Sat (9:00 AM – 7:00 PM IST)</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#E5EAE1] text-[#173F35] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-[#B89453]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Official Email</h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm font-semibold text-[#0A2540] hover:text-[#D92525] transition mt-1 block break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                      <span className="text-xs text-gray-400">For formal inquiries, RFQs, & specifications</span>
                    </div>
                  </div>

                  {/* Director / Commercial Leadership */}
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-gradient-to-r from-amber-50/60 via-white to-emerald-50/40 border border-amber-200/80 shadow-sm">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 border-amber-300/80 shadow-sm">
                      <Image
                        src={siteConfig.business.image}
                        alt={`${siteConfig.business.director} - Director, Nilkanth World Exim`}
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89453]">Commercial Leadership</h4>
                        <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-semibold bg-emerald-100 text-emerald-800 rounded">Verified</span>
                      </div>
                      <p className="text-sm font-bold text-[#0A2540] mt-0.5 truncate">
                        {siteConfig.business.director}
                      </p>
                      <span className="text-xs text-gray-500 block">{siteConfig.business.designation} • Nilkanth World Exim</span>
                    </div>
                  </div>

                  {/* GSTIN / Government Tax Registration */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#E5EAE1] text-[#173F35] shrink-0 mt-0.5">
                      <FileCheck2 className="w-5 h-5 text-[#B89453]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">GST Registration (GSTIN)</h4>
                      <p className="text-sm font-mono font-bold text-[#0A2540] mt-1 tracking-wider">
                        {siteConfig.business.gstin}
                      </p>
                      <span className="text-xs text-gray-400">Registered Taxpayer • State: 24 (Gujarat, India)</span>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                      <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                        Instant WhatsApp Trade Desk
                      </h4>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Need quick confirmation on product arrivals, crop availability, or preliminary sample terms? Connect directly with our trade team.
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow transition"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Start WhatsApp Chat (+91 81606 13430)</span>
                    </a>
                  </div>
                </div>

                {/* Official Social Media Channels */}
                <div className="pt-3 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                    Official Social Channels
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 hover:border-pink-300 hover:bg-pink-50/50 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-semibold text-gray-900 group-hover:text-[#D92525] transition truncate">
                          Instagram
                        </span>
                        <span className="block text-[11px] text-gray-500 truncate">
                          @nilkanth.world.exim
                        </span>
                      </div>
                    </a>

                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-semibold text-gray-900 group-hover:text-[#1877F2] transition truncate">
                          Facebook
                        </span>
                        <span className="block text-[11px] text-gray-500 truncate">
                          Official Profile
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time & Inquiry Protocol Reassurance */}
              <div className="bg-[#0A2540] text-white rounded-2xl p-6 space-y-3 border border-[#10365c]">
                <div className="flex items-center gap-2 text-[#dfc384] text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Trade Desk SLA</span>
                </div>
                <h4 className="font-bold text-base font-editorial">24-Hour Inquiry Turnaround</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  All commercial inquiries submitted with complete commodity, quantity, and target destination parameters are reviewed and answered within 24 business hours.
                </p>
              </div>

              {/* Embedded Location Map Frame */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D92525]" />
                    <span className="text-xs font-semibold text-[#0A2540]">Location Map — Surat, Gujarat</span>
                  </div>
                  <span className="text-[11px] text-gray-400">PIN: 395004</span>
                </div>
                <div className="w-full h-64 bg-gray-100">
                  <iframe
                    title="Nilkanth World Exim Location Map Surat"
                    src={siteConfig.contact.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Complete Interactive Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
