type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light"
}: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-accent" : "text-accent";
  const descriptionClass = tone === "dark" ? "text-slate-300" : "text-muted";

  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className={`mb-2 text-sm font-medium uppercase tracking-[0.12em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-3 text-base leading-relaxed md:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
