"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageUploadField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    setUploading(false);
    if (!res.ok) {
      setError(data.error || "Error al subir la imagen.");
      return;
    }
    onChange(data.url);
  }

  return (
    <div>
      <label className="block text-xs uppercase tracking-wide text-muted mb-2">
        {label}
      </label>

      {value ? (
        <div className="relative mb-3 h-32 w-full max-w-xs overflow-hidden rounded-sm border border-border">
          <Image src={value} alt="" fill className="object-cover" />
        </div>
      ) : (
        <div className="mb-3 h-32 w-full max-w-xs flex items-center justify-center rounded-sm border border-dashed border-border text-xs text-muted">
          Sin imagen
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="px-4 py-2 text-sm border border-border hover:border-gold transition disabled:opacity-60"
      >
        {uploading ? "Subiendo..." : value ? "Cambiar imagen" : "Subir imagen"}
      </button>
      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
    </div>
  );
}
