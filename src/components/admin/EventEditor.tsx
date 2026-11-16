"use client";

import ImageUploadField from "./ImageUploadField";
import type { NextEvent } from "@/lib/store";

export default function EventEditor({
  value,
  onChange,
}: {
  value: NextEvent;
  onChange: (next: NextEvent) => void;
}) {
  return (
    <div className="border border-border rounded-md p-6 space-y-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-serif text-xl text-gold-soft">Próximo evento</h3>
          <p className="text-sm text-muted">
            Se muestra en la página de Eventos.
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm shrink-0">
          <input
            type="checkbox"
            checked={value.active}
            onChange={(e) => onChange({ ...value, active: e.target.checked })}
          />
          Mostrar
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-wide text-muted mb-2">
            Fecha
          </label>
          <input
            type="date"
            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
            value={value.date}
            onChange={(e) => onChange({ ...value, date: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-muted mb-2">
            Parejas esperadas
          </label>
          <input
            className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
            value={value.expectedCouples}
            onChange={(e) =>
              onChange({ ...value, expectedCouples: e.target.value })
            }
            placeholder="Ej: 20 parejas"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Temática
        </label>
        <input
          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
          value={value.theme}
          onChange={(e) => onChange({ ...value, theme: e.target.value })}
          placeholder="Ej: Noche de máscaras"
        />
      </div>

      <ImageUploadField
        label="Imagen publicitaria del evento"
        value={value.imageUrl}
        onChange={(url) => onChange({ ...value, imageUrl: url })}
        targetWidth={1600}
        targetHeight={900}
      />
    </div>
  );
}
