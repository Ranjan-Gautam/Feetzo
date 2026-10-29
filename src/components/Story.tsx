const pillars = [
  {
    no: "01",
    title: "The Full Wardrobe",
    body: "Sneakers, jackets, pants and tops — everything a man needs, in one shop.",
  },
  {
    no: "02",
    title: "Brands You Want",
    body: "Jordan, Travis Scott, Puma, New Balance and trusted labels, carefully sourced.",
  },
  {
    no: "03",
    title: "Fair Prices, Real Service",
    body: "Honest Nepali pricing, and real people to help you nail the fit and size.",
  },
];

export default function Story() {
  return (
    <section id="story" className="border-y border-border bg-background-2">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <div className="sheen relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-stone-700 via-neutral-800 to-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Feetzo"
              className="h-40 w-40 rounded-2xl object-cover opacity-90 ring-1 ring-accent/20"
            />
          </div>
          <div className="absolute -right-3 bottom-8 rounded-2xl border border-border bg-background px-6 py-5">
            <p className="font-display text-3xl font-semibold text-gold">Feetzo</p>
            <p className="mt-1 text-sm text-muted">Lagankhel, Lalitpur</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Why Feetzo
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            One shop for the
            <br />
            <span className="text-gold italic">whole look.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Feetzo is a men&apos;s fashion store in Lagankhel. Walk in for hyped
            sneakers, grab a leather or down jacket, pick up pants and layers —
            everything you need to put a full outfit together, in one place.
          </p>

          <div className="mt-10 space-y-5">
            {pillars.map((p) => (
              <div key={p.no} className="flex gap-5 border-t border-border pt-5">
                <span className="font-display text-2xl font-semibold text-accent">
                  {p.no}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
