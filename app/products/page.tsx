import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, PhoneCall, Filter, Sparkles } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Export Product Catalogue | Indian Spices, Seeds & Agro Commodities",
  description: "Browse the export agricultural product portfolio of Nilkanth World Exim: Turmeric, Cumin Seeds, Red Chilli, Coriander Seeds, Sesame Seeds, Isabgol (Psyllium Husk), and Moringa. Sourced in India for international markets.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#071c2f] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spices-detail.webp"
            alt="Nilkanth World Exim Indian Spices and Commodities Export Catalogue"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06192a] via-[#06192a]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5">
            <Breadcrumbs variant="dark" items={[{ label: "Products" }]} />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/15">
              <span>B2B Export Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-editorial tracking-tight">
              Our Product Portfolio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Explore our selection of Indian spices, seeds, and agricultural commodities. Each commodity is sourced from primary producing regions and handled according to customer specifications.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS CATALOGUE GRID ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6 mb-12">
            <div>
              <span className="text-xs uppercase font-semibold text-[#B89453] tracking-wider">
                Full Collection ({products.length} Products)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-editorial mt-1">
                Selected Indian Commodities
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A2540] hover:bg-[#10365c] text-white text-xs sm:text-sm font-semibold shadow-sm transition"
              >
                <span>Request Commercial RFQ</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B89453]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* Sourcing & Specifications Reassurance Box */}
          <div className="mt-16 bg-white rounded-2xl border border-gray-200/90 p-8 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EAE1] text-[#173F35] text-xs font-semibold uppercase">
                  <FileText className="w-3.5 h-3.5 text-[#B89453]" />
                  <span>Technical Data & Samples</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] font-editorial">
                  Specifications Available on Request
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Commodity attributes such as purity percentages (e.g. 99% vs. 99.5% Sortex cumin), curcumin concentrations in turmeric, ASTA color values in chillies, mesh granulation in moringa/isabgol, and allowable moisture tolerances vary by harvest season and destination import guidelines. We provide customized technical data sheets and discuss sample provisions upon receiving your commercial inquiry.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/contact?inquiryType=Price%20Quotation"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A2540] hover:bg-[#10365c] text-white text-sm font-semibold rounded-lg shadow transition"
                >
                  <span>Request Specifications Sheet</span>
                  <ArrowRight className="w-4 h-4 text-[#B89453]" />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20request%20specifications%20for%20your%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow transition"
                >
                  <span>Inquire via WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B2B INQUIRY CTA BANNER ── */}
      <section className="py-16 bg-[#06192a] text-white border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial">
            Have a Specific Crop Parameter or Bulk Container Requirement?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Share your required commodity, estimated metric tons or container loads, destination seaport, and packaging specifications with Nilkanth World Exim.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-lg transition"
            >
              <span>Submit Sourcing Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
