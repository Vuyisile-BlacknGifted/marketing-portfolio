type ProjectCardProps = {
  title: string;
  description: string;
  impact: string;
  links: Array<{ label: string; url: string }>;
};

export function ProjectCard({ title, description, impact, links }: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-border/80 bg-surface p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl md:p-9">
      <h3 className="text-2xl font-semibold tracking-tight text-darkText">{title}</h3>
      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted md:text-base">
        {description}
      </p>
      <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">Impact</p>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-darkText md:text-base">
          {impact}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-darkText transition hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

type LinkGroupProps = {
  title: string;
  links: Array<{ label: string; url: string }>;
};

export function LinkGroup({ title, links }: LinkGroupProps) {
  return (
    <article className="rounded-2xl border border-border/80 bg-surface p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-darkText">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-white px-3 py-2 text-sm text-darkText transition hover:border-greenDeep/50 hover:bg-greenDeep hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

type MediaPlaceholderCardProps = {
  category: string;
  title: string;
  helper: string;
  previewLabel: string;
};

export function MediaPlaceholderCard({
  category,
  title,
  helper,
  previewLabel
}: MediaPlaceholderCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface p-5 shadow-soft transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-greenDeep">{category}</p>
      <h4 className="mt-3 text-base font-semibold text-darkText">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{helper}</p>
      <div className="mt-4 rounded-xl border border-dashed border-border bg-slate px-3 py-6 text-center text-sm text-muted transition group-hover:border-accent/30 group-hover:bg-accent/5">
        {previewLabel}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/70 opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
          Click To Preview
        </span>
      </div>
    </article>
  );
}
