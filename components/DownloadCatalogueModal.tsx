"use client";

import { useState } from "react";
import { Download, X, FileText, CheckCircle2, Printer, Shield, ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

interface DownloadCatalogueModalProps {
  buttonLabel?: string;
  className?: string;
}

export default function DownloadCatalogueModal({
  buttonLabel = "Download Product Catalogue",
  className = ""
}: DownloadCatalogueModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className || "inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0A2540] hover:bg-[#10365c] text-white text-xs sm:text-sm font-semibold shadow-md transition group"}
      >
        <FileText className="w-4 h-4 text-[#dfc384]" />
        <span>{buttonLabel}</span>
        <Download className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#071c2f] text-white flex items-center justify-between border-b border-[#163b60]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#dfc384]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-editorial">
                    Official Export Product Catalogue & Technical Specifications
                  </h3>
                  <p className="text-xs text-gray-300">
                    Nilkanth World Exim • Surat, Gujarat, India • APEDA & Spices Board Adherent
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-700">
              {/* Executive Summary */}
              <div className="p-4 bg-[#FCFBF7] rounded-xl border border-gray-200">
                <h4 className="font-bold text-[#0A2540] font-editorial text-base mb-1">
                  Commercial Sourcing Overview
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  This export summary provides technical parameters, HS classifications, container stuffing capacities, and harvest seasons for our core product range. For official proforma quotations, container bookings, and lab sample dispatch, contact our Surat export desk.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-[#0A2540]">
                  <span className="px-2 py-0.5 bg-white rounded border border-gray-200">Gateway Ports: Hazira & Mundra</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-gray-200">Pre-Shipment Inspection: SGS / Intertek Ready</span>
                  <span className="px-2 py-0.5 bg-white rounded border border-gray-200">FOB & CIF Quotes Available</span>
                </div>
              </div>

              {/* Product Technical Index Table */}
              <div className="overflow-x-auto border border-gray-200 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0A2540] text-white">
                    <tr>
                      <th className="p-3">Commodity</th>
                      <th className="p-3">Botanical Name</th>
                      <th className="p-3">HS Code</th>
                      <th className="p-3">Key Mandi Origin</th>
                      <th className="p-3">20ft FCL Capacity</th>
                      <th className="p-3">Harvest Peak</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {products.map((p) => (
                      <tr key={p.slug} className="hover:bg-gray-50 transition">
                        <td className="p-3 font-semibold text-[#0A2540]">
                          <Link href={`/products/${p.slug}`} className="hover:text-[#D92525] underline decoration-gray-300">
                            {p.name}
                          </Link>
                        </td>
                        <td className="p-3 italic text-gray-500">{p.botanicalName}</td>
                        <td className="p-3 font-mono text-gray-700">{p.hsCode}</td>
                        <td className="p-3 text-gray-600">{p.originBelts.split(",")[0]}</td>
                        <td className="p-3 font-medium text-gray-800">{p.containerCapacity.fcl20}</td>
                        <td className="p-3 text-gray-600">{p.cropSeason.split("(")[0]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Individual Commodity Specification Cards */}
              <div className="space-y-4">
                <h4 className="font-bold text-[#0A2540] font-editorial text-base">
                  Commodity Quality Parameter Sheets
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((p) => (
                    <div key={p.slug} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-bold text-sm text-[#0A2540]">{p.name}</h5>
                          <span className="text-[11px] text-gray-400 italic">{p.botanicalName}</span>
                        </div>
                        <span className="text-[10px] bg-gray-100 font-mono px-2 py-0.5 rounded text-gray-700 font-semibold">
                          HS {p.hsCode.split(" ")[0]}
                        </span>
                      </div>

                      <div className="space-y-1 pt-1 text-xs">
                        {p.specifications.slice(0, 3).map((spec, i) => (
                          <div key={i} className="flex justify-between py-0.5 border-b border-gray-100 text-[11px]">
                            <span className="text-gray-500">{spec.parameter}:</span>
                            <span className="font-medium text-gray-800">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px]">
                        <span className="text-gray-500">MOQ: <strong>{p.moq.split("(")[0]}</strong></span>
                        <Link
                          href={`/products/${p.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="text-[#D92525] hover:underline font-semibold flex items-center gap-1"
                        >
                          <span>Full Specs</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging Standards */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                <h4 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider">
                  International Transit Packaging Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-600">
                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900">High-Density PP Bags</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">25kg / 50kg tear-resistant woven poly bags with inner heat-sealed liners.</p>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900">Multi-Wall Kraft Paper</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Multi-ply paper sacks with polyethylene barriers for psyllium & ground powders.</p>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900">Jumbo Bulk Bags & Pallets</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">500kg / 1000kg FIBC jumbo bags, ISPM-15 treated fumigated wooden pallets.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certified Ocean Transit Documentation: Phytosanitary, Certificate of Origin, Bill of Lading</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handlePrint}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Catalogue</span>
                </button>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-xs font-semibold shadow transition"
                >
                  <span>Request Official RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
