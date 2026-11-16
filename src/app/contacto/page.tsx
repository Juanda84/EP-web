import { siteConfig } from "@/content/site";

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
        Hablemos en privado
      </p>
      <h1 className="font-serif text-4xl md:text-5xl mb-6">Contacto</h1>
      <p className="text-muted leading-relaxed mb-10">
        Todas las consultas se manejan de forma confidencial. Escríbenos y te
        respondemos en un máximo de 48 horas.
      </p>

      <div className="border border-border bg-background-elevated rounded-md p-10">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition mb-6"
        >
          Escribir por WhatsApp
        </a>
        <p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-serif text-xl text-gold-soft hover:text-gold transition"
          >
            {siteConfig.email}
          </a>
        </p>
        <p className="text-sm text-muted mt-4">{siteConfig.city}</p>
      </div>
    </section>
  );
}
