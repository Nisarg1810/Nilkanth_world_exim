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
  ShieldAlert,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
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
    title: `${product.name} Export Sourcing | Indian Spices & Commodities`,
    description: product.seoDescription,
    openGraph: {
      title: `${product.name} | Nilkanth World Exim Export Sourcing`,
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

  // Related products (all except current)
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
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
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
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200 text-xs text-gray-500 flex items-center justify-between">
                  <span>Product Code: <strong>NWE-{product.slug.toUpperCase().slice(0, 4)}</strong></span>
                  <span>Origin: <strong>India</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Overview & Characteristics (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
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

              {/* General Product Characteristics */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#0A2540] font-editorial flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#B89453]" />
                  <span>General Product Characteristics</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  {product.characteristics.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B89453] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Forms & Packaging */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <h4 className="text-base font-bold text-[#0A2540] font-editorial flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D92525]" />
                    <span>Available Forms</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                    {product.availableForms.map((form, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B89453] font-bold">•</span>
                        <span>{form}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <h4 className="text-base font-bold text-[#0A2540] font-editorial flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#B89453]" />
                    <span>Packaging Options</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
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
              <div className="p-5 bg-[#FCFBF7] border-l-4 border-[#0A2540] rounded-r-xl border border-gray-200 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <div className="flex items-center gap-2 font-semibold text-[#0A2540] mb-1">
                  <FileText className="w-4 h-4 text-[#B89453]" />
                  <span>Commercial Specifications Notice</span>
                </div>
                <p>{product.specificationsNotice}</p>
              </div>

              {/* Quick Inquiry Anchors */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D92525] hover:bg-[#b91c1c] text-white text-sm font-semibold shadow-md transition"
                >
                  <span>Request Quote for {product.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappDigits}?text=Hello%20Nilkanth%20World%20Exim,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                    product.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition"
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
      <section id="inquiry" className="py-16 sm:py-20 bg-white border-y border-gray-200 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-[#B89453] uppercase tracking-wider">
              Direct Trade Desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-editorial mt-1">
              Request Commercial Terms for {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-lg mx-auto">
              Submit your required form, estimated volume, packaging choice, and destination port. Our export desk will prepare a quotation.
            </p>
          </div>

          <ContactForm initialProduct={product.name} />
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="py-16 sm:py-20 bg-[#FCFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {relatedProducts.map((relProd) => (
              <ProductCard key={relProd.slug} product={relProd} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
