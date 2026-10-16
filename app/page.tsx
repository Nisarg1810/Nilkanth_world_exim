import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Handshake,
  FileCheck,
  Truck,
  Anchor,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ── SECTION 3: HERO BANNER ── */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#071c2f] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-spices.webp"
            alt="Nilkanth World Exim - Indian Spices and Agricultural Export Commodities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Layered Gradient Overlays for optimal text contrast and brand ambiance */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06192a]/95 via-[#06192a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06192a] via-transparent to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#D92525] animate-pulse" />
              <span>Direct Indian Agro Sourcing Desk • Surat, Gujarat</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15] font-editorial drop-shadow-md">
              India’s Finest Spices & Agricultural Products for{" "}
              <span className="text-[#dfc384] italic font-normal">Global Markets</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-light">
              Discover a curated range of Indian spices and agricultural commodities, supported by a commitment to
              professional service, transparent communication, and dependable business relationships.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm font-medium text-sm sm:text-base transition-all"
              >
                <span>Request an Inquiry</span>
              </Link>
            </div>

            {/* Sourcing Anchors */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-white/90 text-xs">
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">Surat, IN</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Commercial Operations</p>
              </div>
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">7 Key Crops</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Focused Agro Portfolio</p>
              </div>
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">B2B Standard</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Custom Packaging</p>
              </div>
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">Port Access</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Hazira & Mundra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PRODUCT PORTFOLIO ── */}
      <section id="products" className="py-14 sm:py-20 bg-[#FCFBF7] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Product Portfolio"
            title="Our Export"
            subtitle="Commodities"
            description="Explore our selection of Indian spices, seeds, and agricultural products for business sourcing requirements."
          />

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}

            {/* Inquiry Card placeholder at end of grid */}
            <div className="bg-gradient-to-br from-[#06192a] to-[#10365c] rounded-xl p-6 sm:p-8 text-white flex flex-col justify-between border border-[#163b60] shadow-sm">
              <div>
                <div className="p-3 bg-white/10 rounded-lg w-fit mb-4">
                  <Sparkles className="w-6 h-6 text-[#dfc384]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-editorial">Looking for Mixed or Multi-Product Consignments?</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 leading-relaxed">
                  We coordinate combined container stuffing (FCL & LCL) across spices, seeds, and botanical products tailored to your order requirements.
                </p>
              </div>

              <div className="pt-5 sm:pt-6">
                <Link
                  href="/contact?product=Multiple%20Products"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-xs font-semibold uppercase tracking-wider transition"
                >
                  <span>Request Custom Mix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0A2540] hover:text-[#D92525] transition"
            >
              <span>View Full Product Catalogue & Specifications</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ABOUT NILKANTH WORLD EXIM ── */}
      <section className="py-14 sm:py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Visual Frame */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white">
                <Image
                  src="/images/about-export.webp"
                  alt="Agricultural sourcing and quality handling scene - Nilkanth World Exim"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Float badge on desktop / clean card on mobile */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-[#06192a] text-white p-4 sm:p-5 rounded-xl shadow-xl border border-[#163b60] sm:max-w-xs">
                <p className="text-xs uppercase tracking-wider text-[#dfc384] font-semibold">Strategic Location</p>
                <p className="text-xs sm:text-sm font-medium mt-1">Surat, Gujarat — Hub of western Indian agricultural corridors</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EAE1] text-[#173F35] text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92525]" />
                <span>About Our Business</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] font-editorial tracking-tight">
                Your Partner for Indian <span className="text-[#B89453] italic font-normal">Agricultural Commodities</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                <strong>NILKANTH WORLD EXIM</strong> is based in Surat, Gujarat, operating at the intersection of
                abundant regional agricultural produce and international trade routes. Our core focus centers on Indian
                spices, agricultural seeds, and commodities for overseas business customers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Product-focused sourcing from primary farm markets</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clear and transparent business communication</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Systematic B2B inquiry handling & tracking</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedication to building long-term business relationships</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A2540] hover:bg-[#10365c] text-white text-sm font-medium shadow-md transition group"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-4 h-4 text-[#B89453] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY WORK WITH US? ── */}
      <section className="py-20 sm:py-24 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Approach"
            title="Why Work"
            subtitle="With Us?"
            description="Our commercial operations are built on four foundational pillars designed to give international buyers reliability, clarity, and consistency."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {/* Pillar 1 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200/90 shadow-sm card-hover-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E5EAE1] flex items-center justify-center text-[#173F35] mb-5">
                  <Layers className="w-6 h-6 text-[#173F35]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] font-editorial mb-3">
                  Focused Product Portfolio
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Instead of diluting our attention across hundreds of commodities, we maintain sharp operational focus on seven high-demand Indian crops: Turmeric, Cumin, Chilli, Coriander, Sesame, Isabgol, and Moringa.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#B89453]">
                Crop Specialization
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200/90 shadow-sm card-hover-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E5EAE1] flex items-center justify-center text-[#173F35] mb-5">
                  <PhoneCall className="w-6 h-6 text-[#173F35]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] font-editorial mb-3">
                  Customer-Oriented Communication
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  International trade requires prompt, transparent dialogue. We provide timely updates on market arrivals, crop season variations, physical specifications, and logistics lead times.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#B89453]">
                Transparent Dialogue
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200/90 shadow-sm card-hover-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E5EAE1] flex items-center justify-center text-[#173F35] mb-5">
                  <FileCheck className="w-6 h-6 text-[#173F35]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] font-editorial mb-3">
                  Professional Inquiry Handling
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Every inquiry receives dedicated commercial assessment. We review buyer specifications, packaging requirements, port of discharge constraints, and mutually agreed terms before confirming orders.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#B89453]">
                Detailed Order Scrutiny
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200/90 shadow-sm card-hover-lift flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#E5EAE1] flex items-center justify-center text-[#173F35] mb-5">
                  <Handshake className="w-6 h-6 text-[#173F35]" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] font-editorial mb-3">
                  Business Relationship Focus
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We seek enduring partnerships with global importers, blenders, and distributors. We prioritize repeat collaboration over one-off transactions by maintaining consistency in every shipment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#B89453]">
                Long-Term Alliances
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: QUALITY AND SOURCING APPROACH ── */}
      <section className="py-20 sm:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text side */}
            <div className="space-y-6 order-2 lg:order-1">
              <SectionHeading
                badge="Sourcing Framework"
                title="A Thoughtful Approach to"
                subtitle="Product Sourcing"
                centered={false}
              />

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Rather than offering generic assurances, Nilkanth World Exim follows a structured, step-by-step
                trade protocol designed to align product delivery with buyer expectations:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0A2540] text-white text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Understanding Customer Product Requirements</h4>
                    <p className="text-xs text-gray-600">Clarifying desired purity levels, mesh sizing, moisture thresholds, and visual appearance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0A2540] text-white text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Discussing Available Specifications</h4>
                    <p className="text-xs text-gray-600">Cross-checking seasonal crop arrivals and commercial grades matching the buyer’s application.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0A2540] text-white text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Coordinating Product Sourcing</h4>
                    <p className="text-xs text-gray-600">Engaging established growers and sorting facilities in Gujarat, Rajasthan, and South India.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0A2540] text-white text-xs font-bold shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Communicating Applicable Packaging & Shipment Terms</h4>
                    <p className="text-xs text-gray-600">Selecting suitable packaging (PP, Kraft paper, Jute, liners) and agreeing on incoterms (FOB/CIF).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0A2540] text-white text-xs font-bold shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Confirming Relevant Trade Terms & Documentation</h4>
                    <p className="text-xs text-gray-600">Phytosanitary documentation, fumigation, and certificate verification prior to container dispatch.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-sm font-medium shadow-md transition"
                >
                  Discuss Your Requirements
                </Link>

                <Link
                  href="/quality-sourcing"
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:text-[#0A2540] text-sm font-medium transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Image side */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/quality-control.webp"
                  alt="Quality inspection and grading of agricultural seeds - Nilkanth World Exim"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 leading-relaxed">
                <em>*Notice: Product specifications, physical parameters, and applicable documentation are confirmed individually for each order based on customer requirements and seasonal availability.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: EXPORT AND LOGISTICS ── */}
      <section className="py-20 sm:py-24 bg-[#06192a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Frame */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#163b60]">
              <Image
                src="/images/export-logistics.webp"
                alt="Commercial container shipping terminal and export logistics - Nilkanth World Exim"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <SectionHeading
                badge="Maritime & Freight Handling"
                title="Supporting Your Agricultural"
                subtitle="Trade Requirements"
                centered={false}
                theme="dark"
              />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Export-related arrangements, documentation, packaging, and logistics are subject to product availability,
                destination requirements, applicable regulations, and mutually agreed order terms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <Anchor className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Key Gateway Ports</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Direct access to Hazira Port (Surat), Mundra Port, and JNPT (Nhava Sheva, Mumbai).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <Package className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Container Optimization</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    FCL (Full Container Load) and customized mixed LCL container stuffing options.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <FileCheck className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Export Documentation</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Invoice, Packing List, Certificate of Origin, Phytosanitary, and Bill of Lading coordination.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <Truck className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Safe Transit Packaging</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Moisture barrier liners, durable woven bags, and container desiccant controls.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-400">
                <span>Inquiries evaluated according to trade sanctions, port accessibility, and bilateral regulations.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: INQUIRY CTA ── */}
      <section className="py-20 sm:py-24 bg-[#F8F5EE] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#173F35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Background Texture Detail */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-[#D92525]/10 blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold tracking-wider uppercase border border-white/15">
                Start a Business Dialogue
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial tracking-tight">
                Looking for Indian Spices or Agricultural Products?
              </h2>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
                Share your product requirements with Nilkanth World Exim to begin a business inquiry. Our trade desk will respond with technical parameters and quotation options.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white font-medium text-sm sm:text-base shadow-lg transition"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm sm:text-base transition"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>

              <div className="pt-6 text-xs text-gray-300 flex items-center justify-center gap-6 flex-wrap">
                <span>• Direct Response from Surat Desk</span>
                <span>• Phone: +91 81606 13430</span>
                <span>• Email: nilkanthworldexim@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
