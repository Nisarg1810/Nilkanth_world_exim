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
  ChevronRight,
  Globe2,
  Award,
  FlaskConical,
  Star,
  MapPin,
  Box,
  FileText
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ── SECTION 1: HERO BANNER ── */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center bg-[#071c2f] overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-spices.webp"
            alt="Nilkanth World Exim - Export Grade Indian Spices and Agricultural Commodities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Layered Gradient Overlays for optimal text contrast and brand ambiance */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06192a]/95 via-[#06192a]/85 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06192a] via-transparent to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#D92525] animate-pulse" />
              <span>Direct Agro Sourcing Desk • Surat, Gujarat • APEDA & Spices Board</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15] font-editorial drop-shadow-md">
              India’s Premier Spices & Agro Commodities for{" "}
              <span className="text-[#dfc384] italic font-normal">Global Markets</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-gray-200 leading-relaxed max-w-2xl font-light">
              Direct procurement from fertile Indian agricultural belts, processed under rigorous optical Sortex grading up to 99.9% purity, packaged for ocean transit, and dispatched via western deep-water gateway ports.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Explore Products & Specs</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-lg bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm font-semibold text-sm sm:text-base transition-all"
              >
                <span>Request B2B Quotation</span>
              </Link>
            </div>

            {/* Commodity Fast-Nav Chips */}
            <div className="mt-6 pt-5 border-t border-white/15">
              <span className="text-[11px] uppercase tracking-wider text-gray-300 font-semibold block mb-2">
                Export Commodities Available for Immediate Inquiries:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/25 border border-white/15 text-white text-xs font-medium transition"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sourcing Anchors */}
            <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-white/90 text-xs">
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">Surat, IN</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Export Commercial Hub</p>
              </div>
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">7 Key Crops</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Specialized Agro Portfolio</p>
              </div>
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">Sortex 99.9%</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Optical Machine Cleaned</p>
              </div>
              <div className="p-2 sm:p-0">
                <p className="text-[#dfc384] font-bold text-sm sm:text-base">Hazira & Mundra</p>
                <p className="text-gray-300 text-[11px] sm:text-xs">Gateway Port Stuffing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: TRUST & CERTIFICATIONS BANNER ── */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">
              International Trade Standards & Compliance
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-editorial mt-0.5">
              Certified Export Sourcing & Quality Protocols
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {siteConfig.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-3.5 rounded-xl border border-gray-200 bg-[#FCFBF7] hover:border-[#0A2540] transition flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mx-auto mb-2 text-[#0A2540] group-hover:scale-110 transition-transform">
                    <Award className="w-4 h-4 text-[#B89453]" />
                  </div>
                  <h3 className="font-bold text-xs text-[#0A2540] leading-snug">{cert.shortCode}</h3>
                  <p className="text-[10px] text-gray-500 line-clamp-2 mt-1">{cert.description}</p>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200/60">
                  <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {cert.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PRODUCT PORTFOLIO ── */}
      <section id="products" className="py-14 sm:py-20 bg-[#FCFBF7] scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Product Portfolio"
            title="Our Export"
            subtitle="Commodities"
            description="Explore our specialized portfolio of Indian spices, seeds, and botanicals with technical specifications, HS classifications, and container capacities."
          />

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}

            {/* Custom Mix Container Card */}
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

          {/* Full Specifications Reassurance Bar */}
          <div className="mt-12 p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase font-semibold text-[#B89453] tracking-wider">
                Commodity Specifications & Sourcing
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] font-editorial">
                Need Detailed Parameter Sheets or Custom Packaging?
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Review complete technical data, harvest calendars, and container loading capacities for all commodities.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/products"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#10365c] text-white text-xs sm:text-sm font-semibold shadow-md transition"
              >
                <span>View Full Product Directory</span>
                <ChevronRight className="w-4 h-4 text-[#dfc384]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ABOUT NILKANTH WORLD EXIM ── */}
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
                Your Direct Partner for Indian <span className="text-[#B89453] italic font-normal">Agricultural Commodities</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                <strong>NILKANTH WORLD EXIM</strong> is based in Surat, Gujarat, operating at the intersection of
                abundant regional agricultural produce and international trade routes. Our core focus centers on Indian
                spices, agricultural seeds, and commodities for overseas business customers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Direct procurement from primary farm mandis</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mechanical destoning & optical Sortex grading</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">Incoterms 2020: FOB, CIF & CFR ocean quotes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#B89453] shrink-0 mt-0.5" />
                  <span className="text-gray-700">SGS / Intertek pre-shipment sampling available</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0A2540] hover:bg-[#10365c] text-white text-sm font-medium shadow-md transition group"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-4 h-4 text-[#B89453] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 hover:border-[#0A2540] text-gray-700 text-sm font-medium transition"
                >
                  <span>Commercial Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: QUALITY ASSURANCE 5-STEP PROTOCOL ── */}
      <section className="py-16 sm:py-24 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Quality Assurance Protocol"
            title="Our 5-Step"
            subtitle="Export Quality Workflow"
            description="From primary crop belts to seaport container stuffing, every consignment adheres to systematic grading and quality controls."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {siteConfig.qualityAssuranceSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-[#0A2540] transition"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-[#0A2540] text-[#dfc384] text-xs font-bold rounded-lg mb-3">
                    Step {step.step}
                  </span>
                  <h3 className="font-bold text-sm text-[#0A2540] font-editorial mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Benchmark</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-white rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2.5">
              <FlaskConical className="w-5 h-5 text-[#B89453] shrink-0" />
              <span>Independent Laboratory Sampling: Buyers may nominate third-party survey agencies (SGS, Intertek, Geo-Chem) for physical sampling prior to container dispatch.</span>
            </div>
            <Link
              href="/quality-sourcing"
              className="text-[#0A2540] font-bold hover:text-[#D92525] shrink-0 underline"
            >
              Explore Full Protocol
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: GENUINE CLIENT TESTIMONIALS & CREDIBILITY ── */}
      <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="International Client Feedback"
            title="Trusted by Overseas"
            subtitle="Importers & Food Processors"
            description="Read verified feedback from B2B buyers sourcing Indian spices and agricultural commodities through Nilkanth World Exim."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.testimonials.map((test) => (
              <div
                key={test.id}
                className="p-6 rounded-2xl bg-[#FCFBF7] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Volume Mention Tag */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E5EAE1] text-[#173F35] text-[10px] font-semibold mb-3">
                    {test.volumeMention}
                  </span>

                  {/* Quote */}
                  <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/80">
                  <h4 className="font-bold text-xs text-[#0A2540]">{test.clientName}</h4>
                  <p className="text-[11px] text-gray-500 font-medium">{test.designation}</p>
                  <p className="text-[11px] text-gray-700 font-semibold mt-0.5">{test.company}</p>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-gray-400">
                    <span>{test.location}</span>
                    <span>{test.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: EXPORT & LOGISTICS GATEWAY ── */}
      <section className="py-16 sm:py-24 bg-[#06192a] text-white">
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
                Export arrangements, phytosanitary clearance, fumigation certificates, packaging, and multimodal logistics are coordinated directly through India’s most efficient maritime terminals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <Anchor className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Key Gateway Ports</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Direct access to Hazira Port (Surat, 25km), Mundra Port, and JNPT (Nhava Sheva, Mumbai).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <Package className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Container Optimization</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    20ft FCL (up to 18 MT) & 40ft High Cube (up to 26 MT) container stuffing options.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <FileCheck className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Export Documentation</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary, and Bill of Lading.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#10365c]/40 border border-[#163b60]">
                  <Truck className="w-5 h-5 text-[#dfc384] mb-2" />
                  <h4 className="font-semibold text-white text-sm">Safe Transit Protection</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Moisture barrier liners, woven polypropylene, multi-wall Kraft paper, and container desiccants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: COMMERCIAL INQUIRY FORM BANNER ── */}
      <section className="py-16 sm:py-24 bg-[#F8F5EE] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#173F35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="relative max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold tracking-wider uppercase border border-white/15">
                Ready to Initiate a Trade Dialogue?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-editorial tracking-tight">
                Request an Export Quotation or Lab Sample
              </h2>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
                Submit your target commodity specifications, required Incoterms (FOB/CIF), and destination seaport. Our Surat export desk responds within 24 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white font-semibold text-sm sm:text-base shadow-lg transition"
                >
                  <span>Submit Official RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base transition"
                >
                  <span>Inquire via WhatsApp Desk</span>
                </a>
              </div>

              <div className="pt-6 text-xs text-gray-300 flex items-center justify-center gap-6 flex-wrap">
                <span>• Direct Surat Commercial Desk</span>
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
