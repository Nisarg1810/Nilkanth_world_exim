import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site-config";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serifFont = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nilkanth World Exim | Indian Spices & Agricultural Products",
    template: "%s | Nilkanth World Exim",
  },
  description: siteConfig.description,
  keywords: [
    "Nilkanth World Exim",
    "Indian spices export",
    "Turmeric exporter India",
    "Cumin seeds Gujarat export",
    "Red chilli supplier Surat",
    "Coriander seeds India",
    "Sesame seeds export",
    "Isabgol Psyllium Husk Gujarat",
    "Moringa leaf powder exporter",
    "Indian agricultural commodities B2B"
  ],
  authors: [{ name: "Nilkanth World Exim" }],
  creator: "Nilkanth World Exim",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Nilkanth World Exim | Indian Spices & Agricultural Products",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-spices.webp",
        width: 1200,
        height: 630,
        alt: "Nilkanth World Exim - Indian Spices and Agricultural Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilkanth World Exim | Indian Spices & Agricultural Products",
    description: siteConfig.description,
    images: ["/images/hero-spices.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/images/nilkanth-world-exim-logo.png`,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}`,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.postalCode,
      "addressCountry": "IN"
    },
    "taxID": siteConfig.business.gstin,
    "vatID": siteConfig.business.gstin,
    "founder": {
      "@type": "Person",
      "name": siteConfig.business.director,
      "jobTitle": siteConfig.business.designation
    },
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.facebook
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phoneRaw,
      "contactType": "sales",
      "email": siteConfig.contact.email,
      "availableLanguage": ["English", "Hindi", "Gujarati"]
    }
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FCFBF7] text-[#1B201D]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
