"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site";

type FormState = {
  nombre: string;
  tipo: "Individual" | "Pareja";
  ciudad: string;
  contacto: string;
  mensaje: string;
};

const initialState: FormState = {
  nombre: "",
  tipo: "Pareja",
  ciudad: "",
  contacto: "",
  mensaje: "",
};

function buildWhatsappMessage(data: FormState) {
  const lines = [
    "Hola, quiero solicitar membresía en Eros Pereira.",
    "",
    `Nombre: ${data.nombre}`,
    `Tipo: ${data.tipo}`,
    `Ciudad: ${data.ciudad}`,
    `Contacto: ${data.contacto}`,
    data.mensaje ? `Mensaje: ${data.mensaje}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export default function MembershipForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.nombre.trim() || !data.contacto.trim()) {
      setError("Por favor completa al menos tu nombre y un contacto.");
      return;
    }
    setError(null);
    const text = encodeURIComponent(buildWhatsappMessage(data));
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, "_blank");
  }

  const inputClass =
    "w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted/70 focus:outline-none focus:border-gold transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Nombre {data.tipo === "Pareja" ? "(o ambos nombres)" : ""}
        </label>
        <input
          className={inputClass}
          value={data.nombre}
          onChange={(e) => update("nombre", e.target.value)}
          placeholder="Tu nombre"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wide text-muted mb-2">
            Tipo
          </label>
          <select
            className={inputClass}
            value={data.tipo}
            onChange={(e) => update("tipo", e.target.value as FormState["tipo"])}
          >
            <option value="Pareja">Pareja</option>
            <option value="Individual">Individual</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-muted mb-2">
            Ciudad
          </label>
          <input
            className={inputClass}
            value={data.ciudad}
            onChange={(e) => update("ciudad", e.target.value)}
            placeholder="Pereira, Colombia"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Número de contacto
        </label>
        <input
          className={inputClass}
          value={data.contacto}
          onChange={(e) => update("contacto", e.target.value)}
          placeholder="+57 300 000 0000"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          className={inputClass}
          rows={3}
          value={data.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
          placeholder="Cuéntanos un poco sobre ustedes"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        className="w-full px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition"
      >
        Enviar solicitud por WhatsApp
      </button>

      <p className="text-xs text-muted text-center">
        Al enviar, se abrirá WhatsApp con tu solicitud ya redactada para que la
        confirmes y envíes.
      </p>
    </form>
  );
}
