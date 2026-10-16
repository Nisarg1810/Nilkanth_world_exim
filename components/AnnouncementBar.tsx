import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#06192a] text-[#E5EAE1] text-xs font-medium border-b border-[#163b60]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="inline-block w-2 h-2 rounded-full bg-[#D92525] animate-pulse" />
          <span className="text-[#dfc384] font-semibold tracking-wide uppercase text-[11px]">
            International Trade Desk:
          </span>
          <span className="text-gray-300">
            Connecting Indian Agricultural Products with Global Markets
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-300">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Call Nilkanth World Exim"
          >
            <Phone className="w-3.5 h-3.5 text-[#B89453]" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Email Nilkanth World Exim"
          >
            <Mail className="w-3.5 h-3.5 text-[#B89453]" />
            <span className="hidden sm:inline">{siteConfig.contact.email}</span>
          </a>
          <span className="text-gray-600 hidden md:inline">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-[#D92525]" />
            <span>Surat, Gujarat, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
