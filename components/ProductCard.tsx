import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm card-hover-lift flex flex-col h-full">
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={`Commercial export grade ${product.name} - Nilkanth World Exim`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-[#0A2540]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
          {product.category}
        </span>

        {/* Hindi / Native Name */}
        {product.hindiName && (
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium tracking-wide drop-shadow-md">
            {product.hindiName}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#B89453] transition-colors font-editorial">
              <Link href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            </h3>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          {/* Key characteristics preview */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-100 text-xs text-gray-500">
            {product.characteristics.slice(0, 2).map((char, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89453] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{char}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A2540] hover:text-[#D92525] transition"
          >
            <span>Product Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="px-3 py-1.5 text-xs font-medium bg-[#E5EAE1] text-[#173F35] hover:bg-[#0A2540] hover:text-white rounded-md transition"
          >
            Inquire
          </Link>
        </div>
      </div>
    </article>
  );
}
