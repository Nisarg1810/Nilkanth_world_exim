import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock, FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/data/products";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#06192a] text-gray-300 border-t-2 border-[#b89453]/40">
      {/* Top Banner with Quick Trade Metrics & Reassurance */}
      <div className="border-b border-gray-800 bg-[#04121e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-3 bg-[#10365c]/40 rounded-lg border border-[#163b60]">
                <ShieldCheck className="w-6 h-6 text-[#b89453]" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Product-Focused Sourcing</h4>
                <p className="text-xs text-gray-400">Direct coordination with authentic Indian agricultural belts</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-3 bg-[#10365c]/40 rounded-lg border border-[#163b60]">
                <Clock className="w-6 h-6 text-[#d92525]" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Prompt Inquiry Response</h4>
                <p className="text-xs text-gray-400">Export inquiries answered within 24 business hours</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="p-3 bg-[#10365c]/40 rounded-lg border border-[#163b60]">
                <FileText className="w-6 h-6 text-[#b89453]" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Documented Trade Terms</h4>
                <p className="text-xs text-gray-400">Mutual confirmation of specifications, packaging & logistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm">
              <div className="relative h-14 w-44">
                <Image
                  src="/images/nilkanth-world-exim-logo.png"
                  alt="Nilkanth World Exim Logo"
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md pt-2">
              <strong className="text-white font-medium">NILKANTH WORLD EXIM</strong> is an Indian agricultural export
              trading business based in Surat, Gujarat. We coordinate sourcing, packaging, and international shipping
              arrangements for premium Indian spices, seeds, and agro commodities.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p>• Sourcing Belts: Gujarat, Rajasthan, Central & South India</p>
              <p>• Port Proximity: Hazira Port (Surat), Mundra Port, Nhava Sheva (JNPT)</p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#b89453] pl-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white hover:underline transition">Product Catalogue</Link>
              </li>
              <li>
                <Link href="/quality-sourcing" className="hover:text-white hover:underline transition">Quality & Sourcing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition">Contact & Inquiry</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white hover:underline transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#d92525] pl-2">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="hover:text-[#dfc384] transition flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-[#dfc384] transition" />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#b89453] pl-2">
              Business Office
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d92525] shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-gray-300">
                  {siteConfig.contact.address.line1},<br />
                  {siteConfig.contact.address.line2},<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} – {siteConfig.contact.address.postalCode},<br />
                  {siteConfig.contact.address.country}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b89453] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-xs hover:text-white transition"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b89453] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs hover:text-white transition break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-medium transition"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Transparency Note */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-xs text-gray-400 leading-relaxed">
          <p>
            <strong>Export & Sourcing Disclaimer:</strong> Nilkanth World Exim coordinates agricultural commodity trade.
            All trade terms, product specifications, physical parameters, packaging selections, laboratory certificates
            (if mandated by destination customs), and delivery schedules are confirmed individually prior to order
            acceptance and contract execution.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gray-200 transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition">
              Business Inquiries
            </Link>
            <span className="text-gray-600">Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
