"use client";

import { useCallback, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { getCroppedImageBlob, type PixelCrop } from "@/lib/cropImage";

export default function ImageCropModal({
  imageSrc,
  targetWidth,
  targetHeight,
  onCancel,
  onConfirm,
}: {
  imageSrc: string;
  targetWidth: number;
  targetHeight: number;
  onCancel: () => void;
  onConfirm: (blob: Blob) => void;
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<PixelCrop | null>(
    null
  );
  const [processing, setProcessing] = useState(false);

  const onCropComplete = useCallback((_: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  async function handleConfirm() {
    if (!croppedAreaPixels) return;
    setProcessing(true);
    try {
      const blob = await getCroppedImageBlob(
        imageSrc,
        croppedAreaPixels,
        targetWidth,
        targetHeight
      );
      onConfirm(blob);
    } finally {
      setProcessing(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 px-4">
      <div className="w-full max-w-lg bg-background-elevated border border-border rounded-md p-6">
        <p className="text-xs uppercase tracking-wide text-muted mb-1">
          Ajusta la imagen
        </p>
        <p className="text-sm text-gold-soft mb-4">
          Tamaño final: {targetWidth} × {targetHeight}px
        </p>

        <div className="relative w-full h-72 bg-black rounded-sm overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={targetWidth / targetHeight}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>

        <div className="mt-4">
          <label className="block text-xs uppercase tracking-wide text-muted mb-2">
            Zoom
          </label>
          <input
            type="range"
            min={1}
            max={3}
            step={0.01}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-border hover:border-foreground/40 transition"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            disabled={processing}
            className="flex-1 px-4 py-2 bg-gold text-background font-medium hover:bg-gold-soft transition disabled:opacity-60"
          >
            {processing ? "Procesando..." : "Usar esta imagen"}
          </button>
        </div>
      </div>
    </div>
  );
}
