import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Printer,
  Download,
  ArrowRight,
  Shield,
  CheckCircle2,
  Box,
  Calendar,
  Globe2,
  Anchor,
  PhoneCall,
  Mail
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import DownloadCatalogueModal from "@/components/DownloadCatalogueModal";

export const metadata: Metadata = {
  title: "Export Product Catalogue & Technical Specifications | Nilkanth World Exim",
  description: "Official Nilkanth World Exim export commodity catalogue with HS codes, container stuffing capacities, harvest seasons, and quality parameters for Turmeric, Cumin, Chilli, Coriander, Sesame, Isabgol, and Moringa.",
};

export default function CataloguePage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: "Export Catalogue & Specifications" },
          ]}
        />
      </div>

      {/* ── CATALOGUE HEADER ── */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#071c2f] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold uppercase tracking-wider border border-white/15">
                <FileText className="w-3.5 h-3.5" />
                <span>Export Sourcing Reference Document</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-editorial tracking-tight">
                Export Product Catalogue & Specification Directory
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                Comprehensive technical parameters, botanical classifications, container stuffing loads, and harvest seasons for our core Indian agricultural commodities. Built for international procurement officers and food blenders.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <DownloadCatalogueModal
                  buttonLabel="Open Interactive Catalogue Modal"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D92525] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold shadow-md transition"
                />

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition"
                >
                  <span>Request Bulk Quote (RFQ)</span>
                  <ArrowRight className="w-4 h-4 text-[#dfc384]" />
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> APEDA & Spices Board Adherent
                </span>
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-[#dfc384]" /> Hazira & Mundra Seaports
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-sky-400" /> FOB / CIF / CFR Trade Terms
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTER COMMODITIES INDEX TABLE ── */}
      <section className="py-6 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-editorial mb-2">
              Master Commodity Classification & Freight Metrics
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Official Harmonized System (HS) codes, container payload capacities, and primary agricultural belts.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0A2540] text-white text-xs">
                  <tr>
                    <th className="p-3.5">Commodity</th>
                    <th className="p-3.5">Botanical Name</th>
                    <th className="p-3.5">HS Code</th>
                    <th className="p-3.5">Primary Origin Belt</th>
                    <th className="p-3.5">20ft FCL Capacity</th>
                    <th className="p-3.5">40ft HC Capacity</th>
                    <th className="p-3.5">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((p) => (
                    <tr key={p.slug} className="hover:bg-gray-50 transition">
                      <td className="p-3.5 font-bold text-[#0A2540]">
                        <Link href={`/products/${p.slug}`} className="hover:text-[#D92525] underline decoration-gray-300">
                          {p.name}
                        </Link>
                      </td>
                      <td className="p-3.5 italic text-gray-500">{p.botanicalName}</td>
                      <td className="p-3.5 font-mono text-gray-700">{p.hsCode}</td>
                      <td className="p-3.5 text-gray-600">{p.originBelts.split(",")[0]}</td>
                      <td className="p-3.5 font-semibold text-gray-800">{p.containerCapacity.fcl20}</td>
                      <td className="p-3.5 text-gray-600">{p.containerCapacity.fcl40}</td>
                      <td className="p-3.5">
                        <Link
                          href={`/contact?product=${encodeURIComponent(p.name)}`}
                          className="px-3 py-1 bg-[#E5EAE1] hover:bg-[#0A2540] text-[#173F35] hover:text-white rounded text-xs font-semibold transition"
                        >
                          RFQ
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILED COMMODITY CARDS WITH FULL SPECS ── */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-semibold text-[#B89453] tracking-wider">
              Technical Documentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-editorial mt-1">
              Detailed Commodity Quality Sheets
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Physical parameters, purity percentages, moisture ceilings, and export packaging specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.slug} className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Top banner */}
                  <div className="p-5 bg-gradient-to-r from-[#071c2f] to-[#163b60] text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#dfc384] uppercase font-semibold tracking-wider">
                        HS {p.hsCode.split(" ")[0]} • {p.category}
                      </span>
                      <h3 className="text-xl font-bold font-editorial">{p.name}</h3>
                      <p className="text-xs text-gray-300 italic">{p.botanicalName}</p>
                    </div>
                    <div className="text-right text-xs">
                      <span className="block text-gray-300">MOQ:</span>
                      <strong className="text-white">{p.moq.split("(")[0]}</strong>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {p.shortDescription}
                    </p>

                    {/* Specifications table */}
                    <div className="border border-gray-100 rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 text-gray-700">
                          <tr>
                            <th className="p-2.5">Parameter</th>
                            <th className="p-2.5">Specification</th>
                            <th className="p-2.5">Method</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {p.specifications.map((spec, i) => (
                            <tr key={i} className="hover:bg-gray-50/50">
                              <td className="p-2.5 font-medium text-gray-800">{spec.parameter}</td>
                              <td className="p-2.5 font-semibold text-[#0A2540]">{spec.value}</td>
                              <td className="p-2.5 text-gray-400 text-[11px]">{spec.method || "ISO / ASTA"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Packaging Options */}
                    <div className="pt-2">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider block mb-1">
                        Export Packaging:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.packagingOptions.map((pack, i) => (
                          <span key={i} className="text-[11px] px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-md border border-gray-200">
                            {pack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-xs font-semibold text-[#0A2540] hover:text-[#D92525] flex items-center gap-1"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    href={`/contact?product=${encodeURIComponent(p.name)}`}
                    className="px-4 py-2 bg-[#D92525] hover:bg-[#b91c1c] text-white rounded-lg text-xs font-semibold shadow-sm transition"
                  >
                    Request Quote & Sample
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPORT CONTACT CTA ── */}
      <section className="py-14 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase font-semibold text-[#B89453] tracking-wider">
            Commercial Export Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-editorial">
            Have Specific Microbiological or Granulation Requirements?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our trade desk works directly with optical Sortex cleaning facilities, steam sterilization units, and grinding mills across Gujarat to tailor commodity consignments to your exact import standard.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#10365c] text-white text-sm font-semibold shadow-md transition"
            >
              <span>Submit Commercial Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#dfc384]" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20am%20reviewing%20your%20export%20catalogue%20and%20would%20like%20to%20discuss%20specifications.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition"
            >
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
