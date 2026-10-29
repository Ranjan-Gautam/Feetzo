const cards = [
  {
    name: "Air Jordan",
    tag: "Hyped",
    swatch: "from-neutral-500 via-stone-600 to-neutral-900",
  },
  {
    name: "Travis Cut",
    tag: "Limited",
    swatch: "from-amber-800 via-yellow-900 to-neutral-950",
    className: "mt-8",
  },
  {
    name: "Timberland",
    tag: "New",
    swatch: "from-amber-700 via-amber-900 to-neutral-950",
  },
  {
    name: "New Balance",
    tag: "Bestseller",
    swatch: "from-zinc-400 via-zinc-600 to-neutral-900",
    className: "mt-8",
  },
];

export default function Spotlight() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background-2">
      <div
        className="animate-glow pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Footwear Spotlight
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            The grails,
            <br />
            <span className="text-gold italic">in stock.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Air Jordan, Travis Scott cuts, Timberland boots, Nike, Adidas and
            New Balance — the pairs everyone&apos;s after. Message us to check
            what&apos;s in right now.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Authentic styling, carefully sourced",
              "Sizes checked in-store before you buy",
              "Reserve a pair on WhatsApp",
            ].map((line) => (
              <li
                key={line}
                className="flex items-center gap-3 text-sm text-foreground/80"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-[10px] text-accent">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>

          <a
            href="#shop"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-all hover:gap-3"
          >
            Shop Footwear
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((c) => (
            <SneakerCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SneakerCard({
  name,
  tag,
  swatch,
  className = "",
}: {
  name: string;
  tag?: string;
  swatch: string;
  className?: string;
}) {
  return (
    <div
      className={`sheen group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border ${className}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${swatch} transition-transform duration-700 group-hover:scale-110`}
      />
      <ShoeIcon />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      {tag && (
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background">
          {tag}
        </span>
      )}
      <p className="absolute inset-x-4 bottom-4 font-display text-lg font-medium text-foreground">
        {name}
      </p>
    </div>
  );
}

function ShoeIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative text-foreground/35"
    >
      <path d="M2 17h20l-1 3H3z" />
      <path d="M2 17v-3l5-1 3-4 2 2 3 1 5 2v3" />
      <path d="M7 13l2 2M10 11l2 2" />
    </svg>
  );
}
