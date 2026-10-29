const steps = [
  {
    no: "01",
    title: "Browse the store",
    body: "Scroll our footwear, jackets, pants and tops to spot what you like.",
  },
  {
    no: "02",
    title: "Message us",
    body: "Tap any item or the WhatsApp button and tell us what you want.",
  },
  {
    no: "03",
    title: "We confirm",
    body: "We reply with availability, sizes and price — fast, no guesswork.",
  },
  {
    no: "04",
    title: "Get it delivered",
    body: "Pick up in Lagankhel or get it delivered anywhere in Nepal. COD ready.",
  },
];

export default function HowToOrder() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
          How It Works
        </p>
        <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl">
          Ordering is <span className="text-gold italic">easy</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          No checkout, no hassle. See something you like, message us, and we
          sort out the rest.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.no}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface-solid p-7 transition-colors hover:border-accent/50"
          >
            <span className="font-display text-5xl font-semibold text-stroke transition-colors group-hover:text-accent/80">
              {s.no}
            </span>
            <h3 className="mt-5 text-base font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
