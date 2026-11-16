"use client";

import ImageUploadField from "./ImageUploadField";
import type { Banner } from "@/lib/store";

export default function BannerEditor({
  title,
  description,
  value,
  onChange,
}: {
  title: string;
  description: string;
  value: Banner;
  onChange: (next: Banner) => void;
}) {
  return (
    <div className="border border-border rounded-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-xl text-gold-soft">{title}</h3>
          <p className="text-sm text-muted">{description}</p>
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

      <ImageUploadField
        label="Imagen del banner"
        value={value.imageUrl}
        onChange={(url) => onChange({ ...value, imageUrl: url })}
      />

      <div className="mt-4">
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Enlace al hacer clic (opcional)
        </label>
        <input
          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
          value={value.linkUrl}
          onChange={(e) => onChange({ ...value, linkUrl: e.target.value })}
          placeholder="https://..."
        />
      </div>
    </div>
  );
}
