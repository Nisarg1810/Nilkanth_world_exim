import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
  className?: string;
}

export default function Breadcrumbs({
  items,
  variant = "light",
  className = "",
}: BreadcrumbsProps) {
  const isDark = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className={`inline-block ${className}`}>
      <ol
        className={`inline-flex items-center flex-wrap gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-colors ${
          isDark
            ? "bg-white/10 border border-white/15 text-gray-300 shadow-sm"
            : "bg-white border border-gray-200 text-gray-600 shadow-xs"
        }`}
      >
        <li className="inline-flex items-center">
          <Link
            href="/"
            className={`inline-flex items-center gap-1.5 transition ${
              isDark
                ? "text-gray-300 hover:text-white"
                : "text-gray-600 hover:text-[#0A2540]"
            }`}
          >
            <Home className="w-3.5 h-3.5 text-[#B89453]" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                className={`w-3 h-3 ${isDark ? "text-gray-400" : "text-gray-400"}`}
              />
              {isLast || !item.href ? (
                <span
                  className={`font-semibold ${
                    isDark ? "text-amber-300" : "text-[#0A2540]"
                  }`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-[#0A2540]"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
