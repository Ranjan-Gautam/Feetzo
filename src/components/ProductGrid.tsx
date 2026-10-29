"use client";

import { useMemo, useState } from "react";
import ProductImage from "@/components/ProductImage";
import { products, categoryOrder } from "@/data/catalog";

const WA = "9779840203297";

function waLink(productName: string) {
  const text = encodeURIComponent(
    `Hi Feetzo! Is the "${productName}" available? Please share price and sizes.`
  );
  return `https://wa.me/${WA}?text=${text}`;
}

export default function ProductGrid() {
  const [active, setActive] = useState<(typeof categoryOrder)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            The Store
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl">
            Shop <span className="text-gold italic">everything</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            A look at what we carry. Message us on WhatsApp to check
            availability, sizes and price — we restock often.
          </p>
        </div>
        <a
          href={`https://wa.me/${WA}`}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Message us on WhatsApp
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "border-accent bg-accent text-background"
                : "border-border text-muted hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {filtered.map((p) => (
          <article key={p.id} className="group">
            <a
              href={waLink(p.name)}
              target="_blank"
              rel="noreferrer"
              className="sheen relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border"
            >
              <ProductImage product={p} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40 transition-opacity group-hover:opacity-60" />
              {p.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-background">
                  {p.tag}
                </span>
              )}
              <span className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {p.brand}
              </span>
              <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Check Availability
              </span>
            </a>
            <div className="mt-4 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  {p.subcategory}
                </p>
              </div>
              <a
                href={waLink(p.name)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Enquire about ${p.name}`}
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
