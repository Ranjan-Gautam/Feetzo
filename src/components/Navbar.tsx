"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "Footwear", href: "#shop" },
  { label: "Outerwear", href: "#shop" },
  { label: "Pants", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#" className="group flex items-center" aria-label="Feetzo home">
          <Image
            src="/logo.png"
            alt="Feetzo — Clothes, Shoes, Style"
            width={52}
            height={52}
            priority
            className="h-12 w-12 rounded-xl object-cover ring-1 ring-accent/30 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="tel:+9779763690216"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground sm:block"
          >
            9763690216
          </a>
          <a
            href="#shop"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background transition-all hover:gap-3 sm:inline-flex"
          >
            Shop Now
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-foreground lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#shop"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-background"
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <>
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}
