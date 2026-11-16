const rules = [
  {
    t: "Consentimiento ante todo",
    d: "Ninguna interacción ocurre sin un acuerdo claro, explícito y libre entre todas las personas involucradas. Un 'no' se respeta siempre, sin excepción.",
  },
  {
    t: "Discreción total",
    d: "Está prohibido fotografiar, grabar o divulgar información de otros miembros sin su consentimiento expreso. Lo que sucede en la comunidad permanece en la comunidad.",
  },
  {
    t: "Respeto mutuo",
    d: "Se exige trato cordial y respetuoso en todo momento, dentro y fuera de los eventos. No se tolera ningún tipo de acoso, presión o comentario denigrante.",
  },
  {
    t: "Mayoría de edad",
    d: "Todos los miembros deben ser mayores de edad y presentar identificación válida cuando se solicite durante el proceso de admisión.",
  },
  {
    t: "Confidencialidad de datos",
    d: "La información personal compartida con Eros Pereira se usa únicamente para fines de administración de membresía y nunca se comparte con terceros sin autorización.",
  },
  {
    t: "Derecho de admisión",
    d: "Eros Pereira se reserva el derecho de aceptar, rechazar o retirar la membresía de cualquier persona que no cumpla con este reglamento.",
  },
];

export default function ReglamentoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">
        Código de conducta
      </p>
      <h1 className="font-serif text-4xl md:text-5xl text-center mb-12">
        Reglamento
      </h1>

      <div className="space-y-10">
        {rules.map((r, i) => (
          <div key={r.t} className="flex gap-6">
            <span className="font-serif text-2xl text-gold shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg text-gold-soft mb-1">{r.t}</h3>
              <p className="text-muted leading-relaxed">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
