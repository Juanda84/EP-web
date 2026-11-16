"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/favicon.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-serif text-2xl tracking-wide text-gold-soft">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-foreground/80">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold-soft transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground/80"
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/60 px-6 py-4 flex flex-col gap-4 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-gold-soft transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
