const year = 2026;
import Image from "next/image";

const groups = [
  {
    title: "Shop",
    links: ["Footwear", "Outerwear", "Pants", "Tops"],
  },
  {
    title: "Brands",
    links: ["Jordan", "Nike", "Adidas", "Travis Scott", "Timberland", "New Balance"],
  },
  {
    title: "Store",
    links: ["Visit Us", "Contact", "Exchange Policy", "Size Guide"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Big brand word */}
      <div className="mx-auto max-w-7xl overflow-hidden px-5 pt-16 sm:px-8">
        <p className="font-display text-[26vw] uppercase leading-none tracking-tight text-stroke sm:text-[22vw] lg:text-[16rem]">
          Feetzo
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8">
        <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Feetzo — Clothes, Shoes, Style. Wear it. Live it."
              width={132}
              height={132}
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-accent/20"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              The complete men&apos;s store in Lagankhel, Lalitpur — sneakers,
              jackets, pants and more at fair prices.
            </p>
            <a
              href="https://www.tiktok.com/@feetzo86"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              Follow us on TikTok
              <span className="font-semibold text-accent">@feetzo86</span>
            </a>
            <div className="mt-4 flex gap-3">
              {[
                { label: "TT", href: "https://www.tiktok.com/@feetzo86" },
                { label: "IG", href: "#" },
                { label: "FB", href: "#" },
                { label: "WA", href: "https://wa.me/9779840203297" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Feetzo, Lagankhel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#visit" className="text-xs text-muted transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
