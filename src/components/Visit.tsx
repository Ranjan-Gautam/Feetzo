const details = [
  {
    label: "Store Address",
    value: "Lagankhel, Lalitpur, Nepal",
  },
  {
    label: "Opening Hours",
    value: "Sun – Sat, 8:00 AM – 9:00 PM",
  },
  {
    label: "Call Us",
    value: "9763690216 · 9861746859",
  },
  {
    label: "WhatsApp",
    value: "9840203297 · 9861746859",
  },
  {
    label: "Follow Us",
    value: "TikTok @feetzo86",
  },
  {
    label: "We Accept",
    value: "Cash · eSewa · Khalti · COD",
  },
];

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden py-24">
      <div
        className="animate-glow pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              [ Visit us ]
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] tracking-tight text-foreground sm:text-7xl">
              Come find
              <br />
              <span className="text-accent">your fit</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Drop by our store in Lagankhel, or message us to reserve a pair.
              We will help you nail the right fit and size.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="border-t border-border pt-4">
                  <dt className="text-xs uppercase tracking-wider text-accent">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-base font-medium text-foreground">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+9779763690216"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Call to Order
              </a>
              <a
                href="https://wa.me/9779840203297"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                WhatsApp Us
              </a>
              <a
                href="https://maps.app.goo.gl/YiXrwgvPBGmjUmnB7"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Get Directions
              </a>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/YiXrwgvPBGmjUmnB7"
            target="_blank"
            rel="noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-stone-800 via-neutral-900 to-black"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-background transition-transform group-hover:scale-110">
                  <PinIcon />
                </div>
                <p className="mt-4 font-display text-2xl uppercase tracking-tight text-foreground">
                  Lagankhel
                </p>
                <p className="mt-1 text-sm text-muted">
                  Tap to open in Google Maps
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
