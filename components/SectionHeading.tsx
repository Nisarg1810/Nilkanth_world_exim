interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  centered = true,
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-[#10365c]/60 text-[#dfc384] border border-[#163b60]"
              : "bg-[#E5EAE1] text-[#173F35] border border-[#173F35]/10"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D92525]" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-editorial ${
          isDark ? "text-white" : "text-[#0A2540]"
        }`}
      >
        {title}{" "}
        {subtitle && (
          <span className="text-[#B89453] italic font-normal">
            {subtitle}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-4 flex items-center gap-2 ${
          centered ? "justify-center" : "justify-start"
        }`}
      >
        <span className="h-0.5 w-12 bg-[#B89453]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#D92525]" />
        <span className="h-0.5 w-6 bg-[#B89453]/50" />
      </div>
    </div>
  );
}
