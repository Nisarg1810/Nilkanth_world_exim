"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Globe2, PhoneCall } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-200"
          : "bg-white py-3 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0A2540] rounded-lg p-1"
            title="Nilkanth World Exim Homepage"
          >
            <div className="relative h-14 sm:h-16 w-36 sm:w-44 flex items-center">
              <Image
                src="/images/nilkanth-world-exim-logo.png"
                alt="Nilkanth World Exim - Export Trading Company Logo"
                fill
                priority
                sizes="(max-width: 640px) 150px, 180px"
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
                      ? "text-[#0A2540] font-semibold bg-[#E5EAE1]/50 border-b-2 border-[#D92525]"
                      : "text-gray-700 hover:text-[#0A2540] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-4">
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
              className="inline-flex items-center gap-2 bg-[#0A2540] text-white px-5 py-2.5 rounded-md text-sm font-medium shadow-sm hover:bg-[#10365c] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540] group"
            >
              <span>Send Inquiry</span>
              <ArrowRight className="w-4 h-4 text-[#B89453] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              href="/contact"
              className="bg-[#0A2540] text-white px-3 py-1.5 rounded text-xs font-medium"
            >
              Inquire
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium transition ${
                    isActive
                      ? "text-[#0A2540] font-bold bg-[#E5EAE1]/70 border-l-4 border-[#D92525]"
                      : "text-gray-700 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md bg-emerald-600 text-white font-medium text-sm shadow hover:bg-emerald-700 transition"
              >
                <span>WhatsApp Export Desk (+91 81606 13430)</span>
              </a>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md bg-[#0A2540] text-white font-medium text-sm shadow hover:bg-[#10365c] transition"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-4 h-4 text-[#B89453]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
