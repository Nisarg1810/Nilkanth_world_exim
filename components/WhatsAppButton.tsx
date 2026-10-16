"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

export default function WhatsAppButton({
  customMessage = "Hello Nilkanth World Exim, I would like to inquire about your products.",
  className = "",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappDigits}?text=${encodeURIComponent(
    customMessage
  )}`;

  return (
    <aside
      aria-label="Contact options"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group ${className}`}
    >
      <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0A2540] text-white text-xs py-1.5 px-3 rounded-lg shadow-lg pointer-events-none whitespace-nowrap">
        <span>Quick Trade Inquiry (+91 81606 13430)</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nilkanth World Exim on WhatsApp"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#D92525] border-2 border-white rounded-full animate-ping" />
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#D92525] border-2 border-white rounded-full" />
      </a>
    </aside>
  );
}
