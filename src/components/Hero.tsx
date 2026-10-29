export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="animate-glow pointer-events-none absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-16 lg:pt-20">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Lagankhel · Lalitpur · Nepal
          </span>

          <h1 className="mt-7 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem]">
            Everything a
            <br />
            man needs to
            <br />
            <span className="text-gold italic">look sharp.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
            Feetzo is your complete men&apos;s store — hyped sneakers, leather
            and down jackets, pants, hoodies and more. The brands you want,
            delivered across Nepal.
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Clothes · Shoes · Style — Wear it. Live it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition-all hover:gap-3"
            >
              Shop the Store
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Visit the Store
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
            <Stat value="Jordan · Travis" label="Footwear" />
            <Stat value="Leather · Down" label="Jackets" />
            <Stat value="COD · eSewa" label="Khalti" />
          </dl>
        </div>

        {/* Visual */}
        <div
          className="animate-fade-up grid grid-cols-2 gap-4"
          style={{ animationDelay: "140ms" }}
        >
          <Tile
            label="Sneakers"
            sub="Jordan · Travis · Timberland"
            swatch="from-amber-700 via-stone-800 to-neutral-950"
            className="row-span-2 aspect-[3/5]"
          />
          <Tile
            label="Jackets"
            sub="Leather · Down"
            swatch="from-stone-600 via-neutral-800 to-black"
            className="aspect-square"
          />
          <Tile
            label="Pants"
            sub="All fits"
            swatch="from-neutral-600 via-stone-700 to-neutral-900"
            className="aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-lg font-medium text-foreground">
        {value}
      </dt>
      <dd className="mt-0.5 text-xs uppercase tracking-wider text-muted">
        {label}
      </dd>
    </div>
  );
}

function Tile({
  label,
  sub,
  swatch,
  className,
}: {
  label: string;
  sub: string;
  swatch: string;
  className: string;
}) {
  return (
    <div
      className={`sheen group relative overflow-hidden rounded-2xl border border-border ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${swatch} transition-transform duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
      <div className="absolute inset-x-4 bottom-4">
        <p className="font-display text-xl font-medium text-foreground">
          {label}
        </p>
        <p className="text-xs uppercase tracking-wider text-accent-soft">
          {sub}
        </p>
      </div>
    </div>
  );
}
