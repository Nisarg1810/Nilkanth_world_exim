import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Box, Calendar } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

        {/* Category & HS Code Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="bg-[#0A2540]/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
            {product.category}
          </span>
          <span className="bg-black/60 backdrop-blur-sm text-[#dfc384] text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
            HS {product.hsCode.split(" ")[0]}
          </span>
        </div>

        {/* Botanical / Native Name Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white drop-shadow-md">
          {product.hindiName && (
            <span className="text-xs font-medium tracking-wide">
              {product.hindiName}
            </span>
          )}
          <span className="text-[11px] text-gray-300 italic truncate max-w-[150px]">
            {product.botanicalName}
          </span>
        </div>
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

          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-3">
            {product.shortDescription}
          </p>

          {/* Quick Trade Specs Strip */}
          <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 bg-gray-50 rounded-lg text-[11px] text-gray-600 border border-gray-100">
            <div className="flex items-center gap-1.5 truncate">
              <Box className="w-3.5 h-3.5 text-[#B89453] shrink-0" />
              <span className="truncate">{product.containerCapacity.fcl20.split("(")[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Calendar className="w-3.5 h-3.5 text-[#B89453] shrink-0" />
              <span className="truncate">{product.cropSeason.split(" ")[0]} Peak</span>
            </div>
          </div>

          {/* Key characteristics preview */}
          <div className="space-y-1.5 mb-5 pt-1 text-xs text-gray-500">
            {product.characteristics.slice(0, 2).map((char, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
            <span>Full Specs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="px-3.5 py-1.5 text-xs font-semibold bg-[#0A2540] text-white hover:bg-[#D92525] rounded-md transition shadow-sm"
          >
            Request RFQ
          </Link>
        </div>
      </div>
    </article>
  );
}
