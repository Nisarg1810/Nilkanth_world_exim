import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Package
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us | Indian Spices & Commodity Export Trading",
  description: "Learn about Nilkanth World Exim, an agricultural export business based in Surat, Gujarat, specializing in turmeric, cumin, red chilli, coriander, sesame, isabgol, and moringa.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* ── 1. PAGE HERO ── */}
      <section className="relative bg-[#071c2f] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-export.webp"
            alt="Agricultural sourcing and commodity management - Nilkanth World Exim"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06192a] via-[#06192a]/90 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dfc384] text-xs font-semibold tracking-wider uppercase mb-4 border border-white/15">
              <span>Company Introduction</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-editorial tracking-tight">
              About Nilkanth World Exim
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Facilitating reliable international B2B sourcing for premium Indian agricultural commodities and authentic spices from Surat, Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <Breadcrumbs items={[{ label: "About Us" }]} />
      </div>

      {/* ── 2. COMPANY INTRODUCTION ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EAE1] text-[#173F35] text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D92525]" />
                <span>Our Identity</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2540] font-editorial leading-snug">
                Connecting Indian Agriculture With Global Trade
              </h2>

              <div className="p-5 bg-[#FCFBF7] border-l-4 border-[#B89453] rounded-r-lg text-gray-800 text-base sm:text-lg leading-relaxed font-normal italic">
                “Nilkanth World Exim is a Surat, Gujarat-based business focused on Indian spices and agricultural commodities. Our product portfolio includes turmeric, cumin, red chilli, coriander, sesame seeds, isabgol, and moringa. We aim to make product inquiries and business coordination straightforward for customers seeking Indian agricultural products.”
              </div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Operating as an export trading enterprise, Nilkanth World Exim coordinates procurement directly from established agricultural mandis, growers, and cleaning mills across Gujarat, Rajasthan, and primary Indian crop belts. We bridge the gap between Indian farm origin and international buyer requirements by managing commercial verification, custom packaging, and freight handling.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89453] shrink-0" />
                  <span>Based in Surat, Gujarat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89453] shrink-0" />
                  <span>B2B Commercial Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89453] shrink-0" />
                  <span>Proximity to Major Container Ports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89453] shrink-0" />
                  <span>Transparent Documentation</span>
                </div>
              </div>

              {/* Verified Business Credentials */}
              <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div>
                  <span className="block font-bold text-[#0A2540] uppercase tracking-wider text-[11px]">Director / Leadership</span>
                  <span className="text-sm font-semibold text-gray-900 mt-0.5 block">{siteConfig.business.director}</span>
                </div>
                <div>
                  <span className="block font-bold text-[#0A2540] uppercase tracking-wider text-[11px]">GST Identification Number</span>
                  <span className="text-sm font-mono font-bold text-[#B89453] mt-0.5 block">{siteConfig.business.gstin}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100">
                <Image
                  src="/images/spices-detail.webp"
                  alt="Assorted Indian spices and commodities - Nilkanth World Exim"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Certifications & Trade Accreditations Strip */}
          <div className="mt-14 pt-10 border-t border-gray-100">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">
                Official Trade Recognition & Certifications
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-editorial mt-1">
                Adhering to Indian & International Trade Benchmarks
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {siteConfig.certifications.map((c) => (
                <div key={c.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A2540] text-[#dfc384] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#0A2540]">{c.name}</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">{c.issuer}</p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BUSINESS FOCUS & PRODUCT PORTFOLIO ── */}
      <section className="py-16 sm:py-20 bg-[#FCFBF7] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Commodity Portfolio"
            title="Our Business Focus &"
            subtitle="Products"
            description="We deliberately focus on seven core Indian agricultural products where western and regional Indian supply chains hold consistent international demand."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.slug} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-[#0A2540] text-base font-editorial">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.shortDescription}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#B89453] font-semibold">{p.category}</span>
                  <Link href={`/products/${p.slug}`} className="text-xs text-[#0A2540] hover:text-[#D92525] font-medium flex items-center gap-1">
                    <span>Specs</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Strategic Sourcing Hub Box */}
            <div className="bg-[#0A2540] text-white p-6 rounded-xl flex flex-col justify-between border border-[#10365c]">
              <div>
                <Building2 className="w-8 h-8 text-[#dfc384] mb-3" />
                <h4 className="font-bold text-lg font-editorial">Surat Trade Gateway</h4>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Surat provides immediate proximity to Hazira Port, Western Dedicated Freight Corridors, and agricultural transit from Gujarat’s spice centers.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dfc384] hover:underline"
                >
                  <span>Connect with Surat Desk</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. APPROACH TO CUSTOMER RELATIONSHIPS & SOURCING ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/quality-control.webp"
                alt="Agricultural commodity verification and inquiry coordination"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <SectionHeading
                badge="B2B Principles"
                title="Our Approach to"
                subtitle="Customer Relationships"
                centered={false}
              />

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                In international agricultural commodity trading, transactions succeed on clarity and follow-through. We regard every inquiry as the beginning of a potential multi-year partnership:
              </p>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-[#0A2540]">Factual Product Declarations</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    We clearly communicate available grades, machine-cleaned purities, Sortex percentages, and moisture limits. We do not over-promise specifications that cannot be sustained consistently.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-[#0A2540]">Systematic Sourcing & Traceability</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    We coordinate sourcing from trusted regional agricultural processors, checking batch lots, packaging integrity, and container readiness prior to port delivery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-[#0A2540]">Commercial & Shipping Coordination</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    From proforma invoice to container dispatch, shipping documentation, and bill of lading release, we maintain open status channels with buyers throughout the voyage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CALL TO ACTION ── */}
      <section className="py-16 bg-[#06192a] text-white border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-editorial">
            Ready to Discuss Your Sourcing Requirements?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Contact Nilkanth World Exim today. Share your target products, required volumes, packaging parameters, and destination port.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-md transition"
            >
              Submit Business Inquiry
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20discuss%20product%20sourcing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition"
            >
              WhatsApp Us (+91 81606 13430)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
