interface SectionHeadingProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 rounded-full bg-secondary ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
