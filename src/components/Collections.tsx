import { collections } from "@/data/catalog";

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Departments
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            Shop by <span className="text-gold italic">category</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted">
          A full men&apos;s wardrobe under one roof — from kicks to coats.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {collections.map((c, i) => (
          <a
            key={c.id}
            href="#shop"
            className={`sheen group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-border p-6 ${
              i % 2 === 1 ? "lg:mt-8" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${c.swatch} transition-transform duration-700 group-hover:scale-110`}
            />
            {c.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <span className="absolute right-5 top-5 text-xs uppercase tracking-widest text-accent-soft">
              {c.count}
            </span>
            <div className="relative">
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-foreground/70">
                {c.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Explore
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
