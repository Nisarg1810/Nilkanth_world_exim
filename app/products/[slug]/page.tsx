import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  Package,
  Layers,
  FileText,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Box,
  Calendar,
  MapPin,
  Clock,
  Printer
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
import DownloadCatalogueModal from "@/components/DownloadCatalogueModal";
import { products, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Export Specifications & Bulk Quotation | Nilkanth World Exim`,
    description: `${product.name} (HS ${product.hsCode}): ${product.seoDescription}`,
    openGraph: {
      title: `${product.name} Technical Specifications | Nilkanth World Exim`,
      description: product.seoDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products
  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />
      </div>

      {/* ── PRODUCT HERO & KEY DETAILS ── */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Product Photograph (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                  <Image
                    src={product.image}
                    alt={`Export grade ${product.name} - Nilkanth World Exim`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-[#dfc384] text-xs font-mono px-2.5 py-1 rounded-md border border-white/20">
                    HS {product.hsCode.split(" ")[0]}
                  </div>
                </div>

                {/* Key Quick Metrics Strip */}
                <div className="p-4 bg-white rounded-xl border border-gray-200 text-xs text-gray-600 space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-400">Botanical Spec:</span>
                    <strong className="italic text-[#0A2540]">{product.botanicalName}</strong>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-400">MOQ (Minimum Order):</span>
                    <strong className="text-gray-900">{product.moq}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Shelf Life:</span>
                    <strong className="text-gray-900">{product.shelfLife.split("when")[0]}</strong>
                  </div>
                </div>

                {/* Download Spec Sheet / Catalogue Modal Trigger */}
                <div className="pt-1">
                  <DownloadCatalogueModal
                    buttonLabel={`Download ${product.name} Spec Sheet`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A2540] hover:bg-[#10365c] text-white text-xs sm:text-sm font-semibold shadow-md transition"
                  />
                </div>
              </div>
            </div>

            {/* Right: Overview & Specifications (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">
                    Indian Agro Commodity
                  </span>
                  {product.hindiName && (
                    <span className="text-xs font-medium text-gray-400">
                      • {product.hindiName}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] font-editorial mt-1 tracking-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  {product.fullDescription}
                </p>
              </div>

              {/* Sourcing & Harvest Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-white rounded-xl border border-gray-200 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B89453] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Procurement Belts:</span>
                    <p className="text-gray-600 mt-0.5">{product.originBelts}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#B89453] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Crop Harvest Calendar:</span>
                    <p className="text-gray-600 mt-0.5">{product.cropSeason}</p>
                  </div>
                </div>
              </div>

              {/* Container Stuffing Capacity */}
              <div className="bg-gradient-to-br from-[#071c2f] to-[#10365c] text-white p-5 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#dfc384] flex items-center gap-2">
                    <Box className="w-4 h-4" />
                    <span>Ocean Container Stuffing Capacities</span>
                  </h3>
                  <span className="text-[11px] text-gray-300">Hazira / Mundra Seaport</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                    <p className="text-gray-300">20ft FCL Container:</p>
                    <p className="font-bold text-white text-sm mt-0.5">{product.containerCapacity.fcl20}</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                    <p className="text-gray-300">40ft HC Container:</p>
                    <p className="font-bold text-white text-sm mt-0.5">{product.containerCapacity.fcl40}</p>
                  </div>
                </div>
              </div>

              {/* TECHNICAL SPECIFICATIONS TABLE */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-[#0A2540] font-editorial text-base sm:text-lg flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#B89453]" />
                      <span>Technical Specification Parameters</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Standard commercial baseline. Custom purity grades & certifications available on request.
                    </p>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Batch Tested
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#0A2540] text-white text-xs">
                      <tr>
                        <th className="p-3 sm:p-3.5 font-semibold">Quality Parameter</th>
                        <th className="p-3 sm:p-3.5 font-semibold">Standard Export Value</th>
                        <th className="p-3 sm:p-3.5 font-semibold">Testing Method / Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition">
                          <td className="p-3 sm:p-3.5 font-medium text-gray-900">{spec.parameter}</td>
                          <td className="p-3 sm:p-3.5 font-semibold text-[#0A2540]">{spec.value}</td>
                          <td className="p-3 sm:p-3.5 text-gray-500 text-xs">{spec.method || "ISO / ASTA Norms"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* General Product Characteristics */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <h3 className="text-base font-bold text-[#0A2540] font-editorial flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#B89453]" />
                  <span>Physical & Sensory Characteristics</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-700">
                  {product.characteristics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Forms & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2.5">
                  <h4 className="text-sm font-bold text-[#0A2540] font-editorial flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D92525]" />
                    <span>Available Commercial Forms</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {product.availableForms.map((form, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B89453] font-bold">•</span>
                        <span>{form}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2.5">
                  <h4 className="text-sm font-bold text-[#0A2540] font-editorial flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#B89453]" />
                    <span>Export Packaging Options</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {product.packagingOptions.map((pack, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D92525] font-bold">•</span>
                        <span>{pack}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications Notice Block */}
              <div className="p-4 bg-[#FCFBF7] border-l-4 border-[#0A2540] rounded-r-xl border border-gray-200 text-xs text-gray-600 leading-relaxed">
                <div className="flex items-center gap-2 font-semibold text-[#0A2540] mb-1">
                  <FileText className="w-4 h-4 text-[#B89453]" />
                  <span>Commercial Specifications Notice</span>
                </div>
                <p>{product.specificationsNotice}</p>
              </div>

              {/* Quick Inquiry CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-md transition"
                >
                  <span>Request Export Quote for {product.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20request%20an%20export%20quote%20and%20sample%20for%20${encodeURIComponent(
                    product.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT-SPECIFIC INQUIRY FORM ── */}
      <section id="inquiry" className="py-14 sm:py-20 bg-white border-y border-gray-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">
              Direct Trade Desk • Surat, Gujarat
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-editorial mt-1">
              Request Commercial Terms & Samples for {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-lg mx-auto">
              Select Incoterms (FOB/CIF), required container volume, packaging specification, and destination port. Our export desk will calculate ocean freight and provide a proforma offer.
            </p>
          </div>

          <ContactForm initialProduct={product.name} />
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="py-14 sm:py-18 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase font-semibold text-[#B89453] tracking-wider">
                Explore More
              </span>
              <h3 className="text-2xl font-bold text-[#0A2540] font-editorial mt-1">
                Related Agricultural Commodities
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-[#0A2540] hover:text-[#D92525] flex items-center gap-1"
            >
              <span>All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProd) => (
              <ProductCard key={relProd.slug} product={relProd} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
