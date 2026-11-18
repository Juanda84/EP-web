"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Popup } from "@/lib/store";

function dismissKey(popup: Popup) {
  return `ep_popup_dismissed_${popup.text}_${popup.imageUrl}_${popup.startDate}_${popup.endDate}`;
}

export default function SitePopup({ popup }: { popup: Popup }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!popup.active || !popup.text) return;
    try {
      if (localStorage.getItem(dismissKey(popup)) === "1") return;
    } catch {}
    // deja que el age gate se cierre primero antes de mostrar el popup
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, [popup]);

  if (!visible) return null;

  function close() {
    try {
      localStorage.setItem(dismissKey(popup), "1");
    } catch {}
    setVisible(false);
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-6">
      <div className="relative w-full max-w-md bg-background-elevated border border-border rounded-md overflow-hidden">
        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-background/80 text-foreground hover:text-gold transition"
        >
          ✕
        </button>

        {popup.imageUrl && (
          <div className="relative w-full aspect-[4/5]">
            <Image src={popup.imageUrl} alt="" fill className="object-cover" />
          </div>
        )}

        <div className="p-6 text-center">
          <p className="text-balance leading-relaxed">{popup.text}</p>
        </div>
      </div>
    </div>
  );
}
