"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality & Sourcing", href: "/quality-sourcing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 bg-white py-2.5 sm:py-3.5 border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#0A2540] rounded-lg p-0.5"
            title="Nilkanth World Exim Homepage"
          >
            <div className="relative h-14 sm:h-16 w-44 sm:w-52 flex items-center">
              <Image
                src="/images/nilkanth-world-exim-logo.png"
                alt="Nilkanth World Exim - Export Trading Company Logo"
                fill
                priority
                sizes="(max-width: 640px) 180px, 210px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#0A2540] font-semibold bg-[#E5EAE1]/60 border-b-2 border-[#D92525]"
                      : "text-gray-700 hover:text-[#0A2540] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 hover:bg-emerald-100 transition"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WhatsApp Desk
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A2540] text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm hover:bg-[#10365c] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540] group"
            >
              <span>Send Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#B89453] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center lg:hidden gap-1.5 sm:gap-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="bg-[#0A2540] hover:bg-[#10365c] text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-sm transition"
            >
              Inquire
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0A2540] transition"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#D92525]" /> : <Menu className="w-6 h-6 text-[#0A2540]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop & Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[68px] sm:top-[74px] z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-down Drawer */}
          <div className="relative bg-white shadow-2xl border-b border-gray-200 max-h-[calc(100vh-74px)] overflow-y-auto animate-fadeIn">
            <div className="px-5 pt-4 pb-8 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block pb-1">
                Menu Navigation
              </span>

              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition ${
                      isActive
                        ? "text-[#0A2540] font-bold bg-[#E5EAE1]/80 border-l-4 border-[#D92525]"
                        : "text-gray-800 hover:text-[#0A2540] hover:bg-gray-50 active:bg-gray-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm hover:bg-gray-200 transition"
                >
                  <Phone className="w-4 h-4 text-[#B89453]" />
                  <span>Call Us: {siteConfig.contact.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow hover:bg-emerald-700 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Export Desk</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#0A2540] text-white font-semibold text-sm shadow hover:bg-[#10365c] transition"
                >
                  <span>Request Commercial Quotation</span>
                  <ArrowRight className="w-4 h-4 text-[#B89453]" />
                </Link>

                <p className="text-center text-[11px] text-gray-400 pt-2">
                  D-601, Saffron Sky, Singanpore Causeway Rd, Surat, Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
