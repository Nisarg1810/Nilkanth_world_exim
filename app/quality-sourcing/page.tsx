import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Search,
  Package,
  FileCheck2,
  Ship,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Quality & Sourcing Approach | Indian Agricultural Trade Standards",
  description: "Learn about Nilkanth World Exim's structured procurement process, specification alignment, customized export packaging, and pre-shipment documentation for Indian agricultural commodities.",
};

export default function QualitySourcingPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#071c2f] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/quality-control.webp"
            alt="Quality inspection and sourcing approach - Nilkanth World Exim"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06192a] via-[#06192a]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumbs variant="dark" items={[{ label: "Quality & Sourcing" }]} />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/15">
              <span>Trade Methodology</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-editorial tracking-tight">
              Quality & Sourcing Approach
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              How Nilkanth World Exim evaluates international specifications, coordinates farm-belt sourcing, and confirms trade documentation before order execution.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY NOTICE ── */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-[#FCFBF7] rounded-2xl border-l-4 border-[#0A2540] border border-gray-200 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-[#0A2540] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-1">
              <h4 className="font-bold text-[#0A2540] text-base font-editorial">
                Our Commitment to Transparent Trade Language
              </h4>
              <p>
                At Nilkanth World Exim, we do not make unsubstantiated claims of owning testing laboratories or certified private manufacturing plants. Instead, we operate as a dedicated B2B sourcing and export trading company. We coordinate directly with reputable agricultural processors and growers, ensuring that product specifications, physical parameters, and destination compliance documents are verified and mutually agreed upon prior to contract commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5-STEP SOURCING PROCESS ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Process Workflow"
            title="A Thoughtful Approach to"
            subtitle="Export Procurement"
            description="Our structured 5-step operational framework ensures clarity, transparency, and product alignment from initial inquiry to destination port dispatch."
          />

          <div className="mt-16 space-y-10">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center text-xl font-bold font-editorial shrink-0 shadow-md">
                  01
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">Step 1</span>
                  <h3 className="text-xl font-bold text-[#0A2540] font-editorial">Requirement Analysis</h3>
                </div>
              </div>
              <div className="lg:col-span-9 space-y-3 text-sm text-gray-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                <p>
                  Every commercial agricultural trade inquiry begins with an in-depth review of buyer parameters. We clarify whether the product is intended for spice extraction, retail packing, grinding, culinary blending, or industrial applications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Target moisture limits and physical purity</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Whole crop vs. milled / granulated form</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Single-crop vs. multi-commodity consignment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Port of destination customs constraints</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center text-xl font-bold font-editorial shrink-0 shadow-md">
                  02
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">Step 2</span>
                  <h3 className="text-xl font-bold text-[#0A2540] font-editorial">Specifications & Availability</h3>
                </div>
              </div>
              <div className="lg:col-span-9 space-y-3 text-sm text-gray-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                <p>
                  Agricultural availability and quality characteristics are closely tied to regional crop harvest seasons across India. We evaluate current market arrivals in Gujarat and Rajasthan to present realistic specification ranges:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Sortex-cleaned purities (99% / 99.5% / 99.9%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Machine-cleaned economic alternatives</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Seasonal price index and delivery timelines</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Sample dispatch for physical buyer review</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center text-xl font-bold font-editorial shrink-0 shadow-md">
                  03
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">Step 3</span>
                  <h3 className="text-xl font-bold text-[#0A2540] font-editorial">Packaging Coordination</h3>
                </div>
              </div>
              <div className="lg:col-span-9 space-y-3 text-sm text-gray-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                <p>
                  Proper packaging preserves spice aroma, volatile oils, and moisture barriers during ocean voyage transit. Packaging specifications are confirmed prior to stuffing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Polypropylene (PP) bags (25kg / 50kg) with inner liners</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Multi-wall Kraft paper bags for sensitive seeds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Fibre drums & foil vacuum pouches for moringa / isabgol</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Buyer-specific stencil marking & batch coding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center text-xl font-bold font-editorial shrink-0 shadow-md">
                  04
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">Step 4</span>
                  <h3 className="text-xl font-bold text-[#0A2540] font-editorial">Documentation & Compliance</h3>
                </div>
              </div>
              <div className="lg:col-span-9 space-y-3 text-sm text-gray-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                <p>
                  Export compliance involves precise regulatory coordination based on the import policies of the destination nation:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Phytosanitary Certificate issued by Indian authorities</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Commercial Invoice and detailed Packing List</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Certificate of Origin (Non-Preferential / Preferential)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Fumigation Certificate (Methyl Bromide / Aluminium Phosphide)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center text-xl font-bold font-editorial shrink-0 shadow-md">
                  05
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">Step 5</span>
                  <h3 className="text-xl font-bold text-[#0A2540] font-editorial">Shipment & Logistics Coordination</h3>
                </div>
              </div>
              <div className="lg:col-span-9 space-y-3 text-sm text-gray-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8">
                <p>
                  Located in Surat, Gujarat, we coordinate container stuffing, customs clearance at port, and carrier dispatch:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Direct routing via Hazira Port (Surat) or Mundra Port</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Container desiccant bags to prevent cargo sweat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>Bill of Lading tracking updates communicated to buyer</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453]" />
                    <span>FOB, CFR, or CIF Incoterms mutually agreed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#06192a] text-white border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial">
            Discuss Your Target Specifications With Us
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            Whether you require sample evaluations, custom packaging options, or specific purity thresholds, our team is ready to discuss your order parameters.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-md transition"
            >
              Discuss Requirements
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20discuss%20quality%20specifications.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition"
            >
              WhatsApp Desk (+91 81606 13430)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
