import Image from "next/image";
import MembershipForm from "@/components/MembershipForm";

const steps = [
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

export default function MembresiaPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">
        Ingreso por invitación
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-center mb-6">
        Membresía
      </h1>
      <p className="text-balance text-center text-muted max-w-xl mx-auto mb-16 leading-relaxed">
        Aquí no hay registro abierto. Cada persona o pareja que hace parte de
        Eros Pereira pasa por un proceso corto de validación, así cuidamos el
        nivel y la confianza del grupo.
      </p>

      <div className="grid gap-10 md:grid-cols-3 mb-16">
        {steps.map((s) => (
          <div key={s.n} className="text-center">
            <p className="font-serif text-4xl text-gold mb-3">{s.n}</p>
            <h3 className="text-lg text-gold-soft mb-2">{s.t}</h3>
            <p className="text-sm text-muted leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-md border border-border">
        <Image
          src="/images/membresia-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative p-8 md:p-10 max-w-lg mx-auto">
          <h2 className="font-serif text-2xl mb-3 text-center">
            Solicita tu ingreso
          </h2>
          <p className="text-muted mb-8 text-center">
            Completa estos datos y te contactaremos de forma privada por
            WhatsApp.
          </p>
          <MembershipForm />
        </div>
      </div>
    </section>
  );
}
