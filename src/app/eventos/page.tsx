import Image from "next/image";
import BannerSlot from "@/components/BannerSlot";
import NextEventCard from "@/components/NextEventCard";
import { readStore } from "@/lib/store";

export const dynamic = "force-dynamic";

export default function EventosPage() {
  const { nextEvent } = readStore();

  return (
    <>
      <div className="relative h-72 md:h-96">
        <Image
          src="/images/eventos-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <section className="mx-auto max-w-4xl px-6 pb-24 -mt-16 relative">
        <div className="bg-background rounded-md pt-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">
          Agenda privada
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-10">
          Eventos
        </h1>

        {nextEvent.active && (
          <div className="mb-10">
            <NextEventCard event={nextEvent} />
          </div>
        )}

        <div className="border border-border bg-background-elevated rounded-md p-10 text-center">
          <p className="text-muted leading-relaxed">
            El calendario detallado de encuentros, cenas y experiencias está
            disponible exclusivamente para miembros aprobados. Si ya eres
            parte de Eros Pereira, revisa el canal privado para conocer las
            próximas fechas.
          </p>
          <p className="text-muted leading-relaxed mt-4">
            Si todavía no eres miembro, puedes arrancar tu proceso de ingreso
            en la sección de{" "}
            <a href="/membresia" className="text-gold-soft underline underline-offset-4">
              Membresía
            </a>
            .
          </p>
        </div>
        </div>
      </section>

      <BannerSlot slot="eventos_banner" />
    </>
  );
}
