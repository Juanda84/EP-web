import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3 text-sm text-muted">
        <div>
          <p className="font-serif text-xl text-gold-soft mb-2">{siteConfig.name}</p>
          <p>{siteConfig.tagline}</p>
          <p className="mt-1">{siteConfig.city}</p>
        </div>

        <div>
          <p className="text-foreground/80 mb-2">Enlaces</p>
          <ul className="space-y-1">
            <li><Link href="/reglamento" className="hover:text-gold-soft transition">Reglamento</Link></li>
            <li><Link href="/privacidad" className="hover:text-gold-soft transition">Privacidad</Link></li>
            <li><Link href="/contacto" className="hover:text-gold-soft transition">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-foreground/80 mb-2">Contacto</p>
          <p>{siteConfig.email}</p>
          <div className="flex items-center gap-4 mt-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gold-soft transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-.96.04-1.48.2-1.82.34-.46.18-.78.39-1.13.73-.34.35-.55.67-.73 1.13-.14.34-.3.86-.34 1.82-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.96.2 1.48.34 1.82.18.46.39.78.73 1.13.35.34.67.55 1.13.73.34.14.86.3 1.82.34 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.96-.04 1.48-.2 1.82-.34.46-.18.78-.39 1.13-.73.34-.35.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.96-.2-1.48-.34-1.82a3 3 0 0 0-.73-1.13 3 3 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34C15.5 4.01 15.14 4 12 4Zm0 3.38a4.62 4.62 0 1 1 0 9.24 4.62 4.62 0 0 1 0-9.24Zm0 1.8a2.82 2.82 0 1 0 0 5.64 2.82 2.82 0 0 0 0-5.64Zm4.8-1.98a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" />
              </svg>
            </a>
            <a
              href={siteConfig.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-gold-soft transition"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2.4h3.3l-7.2 8.23 8.47 11.2H17l-5.4-7.07-6.17 7.07H2.1l7.7-8.8L1.7 2.4h7.1l4.88 6.46L18.9 2.4Zm-1.16 17.2h1.83L7.35 4.3H5.4l12.34 15.3Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 py-6 text-center text-xs text-muted">
        © 2026 {siteConfig.name}. Sitio exclusivo para mayores de edad.
      </div>
    </footer>
  );
}
