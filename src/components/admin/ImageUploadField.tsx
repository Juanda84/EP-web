"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ImageCropModal from "./ImageCropModal";

export default function ImageUploadField({
  label,
  value,
  onChange,
  targetWidth,
  targetHeight,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  /** Si se definen, se recorta/ajusta la imagen a este tamaño antes de subirla. */
  targetWidth?: number;
  targetHeight?: number;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cropSrc, setCropSrc] = useState<string | null>(null);

  async function uploadBlob(blob: Blob, filename: string) {
    setUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append("file", blob, filename);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    setUploading(false);
    if (!res.ok) {
      setError(data.error || "Error al subir la imagen.");
      return;
    }
    onChange(data.url);
  }

  function handleFileSelected(file: File) {
    setError(null);
    if (targetWidth && targetHeight) {
      setCropSrc(URL.createObjectURL(file));
    } else {
      uploadBlob(file, file.name);
    }
  }

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="block text-xs uppercase tracking-wide text-muted">
          {label}
        </label>
        {targetWidth && targetHeight && (
          <span className="text-xs text-gold-soft">
            Recomendado: {targetWidth} × {targetHeight}px
          </span>
        )}
      </div>

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
          if (file) handleFileSelected(file);
          e.target.value = "";
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

      {cropSrc && targetWidth && targetHeight && (
        <ImageCropModal
          imageSrc={cropSrc}
          targetWidth={targetWidth}
          targetHeight={targetHeight}
          onCancel={() => {
            URL.revokeObjectURL(cropSrc);
            setCropSrc(null);
          }}
          onConfirm={(blob) => {
            URL.revokeObjectURL(cropSrc);
            setCropSrc(null);
            uploadBlob(blob, "banner.jpg");
          }}
        />
      )}
    </div>
  );
}
