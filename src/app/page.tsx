import Image from "next/image";
import Link from "next/link";
import BannerSlot from "@/components/BannerSlot";
import NextEventCard from "@/components/NextEventCard";
import { readStore } from "@/lib/store";

export const dynamic = "force-dynamic";

const membershipSteps = [
  {
    n: "01",
    t: "Solicitud",
    d: "Escríbenos con tus datos básicos y un poco sobre ti o tu pareja.",
  },
  {
    n: "02",
    t: "Entrevista privada",
    d: "Una breve conversación (virtual o presencial) para conocernos y responder tus preguntas.",
  },
  {
    n: "03",
    t: "Aprobación",
    d: "Si hay afinidad con la comunidad, recibes tu acceso y bienvenida formal.",
  },
];

export default function HomePage() {
  const { nextEvent } = readStore();

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <Image
          src="/images/hero-home.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-36 text-center">
          <Image
            src="/images/logo-eros-pereira.png"
            alt="Eros Pereira"
            width={1672}
            height={941}
            className="mx-auto mb-8 w-56 md:w-72 h-auto"
            priority
          />
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
            Solo por invitación
          </p>
          <h1 className="font-serif text-balance text-5xl md:text-6xl leading-tight text-foreground mb-6">
            Una comunidad privada para explorar el{" "}
            <span className="text-gold-soft">estilo de vida liberal</span>
          </h1>
          <p className="text-balance max-w-2xl mx-auto text-muted text-lg mb-10 leading-relaxed">
            En Eros Pereira reunimos parejas y personas afines en un ambiente
            selecto, seguro y totalmente discreto. Aquí el respeto, el
            consentimiento y el buen gusto no se negocian.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/membresia"
              className="px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition"
            >
              Solicitar membresía
            </Link>
            <Link
              href="/nosotros"
              className="px-8 py-3 border border-border text-foreground/90 hover:border-gold transition"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      <BannerSlot slot="home_top" />

      <section className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-3">
        {[
          {
            title: "Discreción absoluta",
            text: "Tu identidad y privacidad se protegen en cada etapa: desde la solicitud hasta cada evento.",
          },
          {
            title: "Admisión selectiva",
            text: "Cada miembro pasa por un proceso de aprobación, así mantenemos el nivel y la confianza del grupo.",
          },
          {
            title: "Experiencias de alto nivel",
            text: "Encuentros y eventos cuidadosamente diseñados, en espacios selectos y con un código de conducta claro.",
          },
        ].map((f) => (
          <div key={f.title} className="text-center">
            <div className="gold-divider-center mb-5" />
            <h3 className="font-serif text-2xl mb-3 text-gold-soft">{f.title}</h3>
            <p className="text-muted leading-relaxed">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative h-72 md:h-96 rounded-md overflow-hidden order-2 md:order-1">
            <Image
              src="/images/nosotros-hero.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Quiénes somos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Más que una app de citas, una comunidad de verdad
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Eros Pereira es una comunidad privada para parejas y personas
              adultas con la mente abierta frente al estilo de vida liberal.
              Aquí el respeto, la confianza y el buen gusto van primero,
              siempre.
            </p>
            <Link
              href="/nosotros"
              className="text-gold-soft underline underline-offset-4 hover:text-gold transition"
            >
              Conoce nuestra filosofía
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Ingreso por invitación
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-12">
            Cómo funciona la membresía
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {membershipSteps.map((s) => (
              <div key={s.n}>
                <p className="font-serif text-4xl text-gold mb-3">{s.n}</p>
                <h3 className="text-lg text-gold-soft mb-2">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <Link
            href="/membresia"
            className="inline-block mt-12 px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition"
          >
            Solicitar membresía
          </Link>
        </div>
      </section>

      <BannerSlot slot="home_middle" />

      {nextEvent.active && (
        <section className="border-t border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <NextEventCard event={nextEvent} withLink />
          </div>
        </section>
      )}

      <section className="border-t border-border/60 bg-background-elevated">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            ¿Te animas a dar el paso?
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            Solicita tu ingreso hoy mismo y empieza a hacer parte de una
            comunidad discreta, segura y de alto nivel.
          </p>
          <Link
            href="/membresia"
            className="inline-block px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition"
          >
            Solicitar membresía
          </Link>
        </div>
      </section>

      <BannerSlot slot="home_bottom" />
    </>
  );
}
