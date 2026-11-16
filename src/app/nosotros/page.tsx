import Image from "next/image";

export default function NosotrosPage() {
  return (
    <>
      <div className="relative h-72 md:h-96">
        <Image
          src="/images/nosotros-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <section className="mx-auto max-w-3xl px-6 pb-24 -mt-16 relative">
      <div className="bg-background rounded-md pt-10">
      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">
        Quiénes somos
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-center mb-10">
        Eros Pereira
      </h1>

      <div className="space-y-6 text-muted leading-relaxed text-lg">
        <p>
          Eros Pereira es una comunidad privada para parejas y personas
          adultas con la mente abierta frente al estilo de vida liberal. No
          somos un club nocturno ni una app de citas: somos un grupo selecto
          donde el respeto, la confianza y el buen gusto van primero, siempre.
        </p>
        <p>
          Creemos que la libertad se disfruta mejor en compañía de gente que
          comparte los mismos valores de discreción y consentimiento. Nuestra
          tarea es sostener ese espacio y cuidar a quienes hacen parte de él.
        </p>
        <p>
          Cada solicitud de ingreso se revisa una por una. No nos interesa
          crecer rápido, nos interesa que encajes de verdad.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 text-center">
        {[
          { t: "Respeto", d: "La base de cada interacción, sin excepción." },
          { t: "Consentimiento", d: "Nada ocurre sin un sí explícito y libre." },
          { t: "Discreción", d: "Lo que pasa aquí, se queda aquí." },
        ].map((v) => (
          <div key={v.t}>
            <div className="gold-divider-center mb-4" />
            <h3 className="font-serif text-xl text-gold-soft mb-2">{v.t}</h3>
            <p className="text-sm text-muted">{v.d}</p>
          </div>
        ))}
      </div>
      </div>
      </section>
    </>
  );
}
