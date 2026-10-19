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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Brand & Bio (2 cols wide on desktop) */}
          <div className="sm:col-span-2 space-y-4">
            <div className="bg-white p-2.5 sm:p-3 rounded-lg inline-block shadow-sm">
              <div className="relative h-14 sm:h-16 w-44 sm:w-52">
                <Image
                  src="/images/nilkanth-world-exim-logo.png"
                  alt="Nilkanth World Exim Logo"
                  fill
                  sizes="210px"
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

            {/* Business Credibility & Tax Identification */}
            <div className="pt-3 text-xs border-t border-gray-800/80 space-y-1.5">
              <div className="flex items-center gap-1.5 text-gray-300">
                <span className="text-gray-400">Director:</span>
                <span className="text-white font-medium">{siteConfig.business.director}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <span className="text-gray-400">GSTIN:</span>
                <span className="font-mono text-[#dfc384] font-medium tracking-wide">{siteConfig.business.gstin}</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-white/10 text-gray-300 hover:text-white text-xs transition-all duration-300 group shadow-sm"
                title="Follow Nilkanth World Exim on Instagram"
              >
                <svg className="w-3.5 h-3.5 text-pink-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#1877F2] border border-white/10 text-gray-300 hover:text-white text-xs transition-all duration-300 group shadow-sm"
                title="Connect with Nilkanth World Exim on Facebook"
              >
                <svg className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
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
                <Link href="/products" className="hover:text-white hover:underline transition">Product Portfolio</Link>
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
