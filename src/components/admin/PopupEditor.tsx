"use client";

import ImageUploadField from "./ImageUploadField";
import DateRangeFields from "./DateRangeFields";
import type { Popup } from "@/lib/store";

export default function PopupEditor({
  value,
  onChange,
}: {
  value: Popup;
  onChange: (next: Popup) => void;
}) {
  return (
    <div className="border border-border rounded-md p-6 space-y-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-serif text-xl text-gold-soft">
            Popup del sitio
          </h3>
          <p className="text-sm text-muted">
            Aparece una vez por visitante, en cualquier página.
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm shrink-0">
          <input
            type="checkbox"
            checked={value.active}
            onChange={(e) => onChange({ ...value, active: e.target.checked })}
          />
          Activo
        </label>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Texto
        </label>
        <textarea
          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
          rows={3}
          value={value.text}
          onChange={(e) => onChange({ ...value, text: e.target.value })}
          placeholder="Escribe el mensaje del popup"
        />
      </div>

      <ImageUploadField
        label="Imagen (opcional)"
        value={value.imageUrl}
        onChange={(url) => onChange({ ...value, imageUrl: url })}
        targetWidth={800}
        targetHeight={1000}
      />

      <DateRangeFields
        startDate={value.startDate}
        endDate={value.endDate}
        onChangeStart={(v) => onChange({ ...value, startDate: v })}
        onChangeEnd={(v) => onChange({ ...value, endDate: v })}
      />
    </div>
  );
}
