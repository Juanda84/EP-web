"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ep_age_verified";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    try {
      const ok = localStorage.getItem(STORAGE_KEY) === "1";
      setVisible(!ok);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/98 backdrop-blur-sm px-6">
      <div className="max-w-md w-full text-center">
        <p className="font-serif text-3xl mb-2 text-gold-soft">Eros Pereira</p>
        <div className="gold-divider-center mb-6" />

        {denied ? (
          <div>
            <p className="text-balance text-foreground/90 mb-6">
              Lo sentimos, el acceso a este sitio está restringido a personas
              mayores de edad.
            </p>
            <a
              href="https://www.google.com"
              className="text-sm text-muted underline underline-offset-4"
            >
              Salir del sitio
            </a>
          </div>
        ) : (
          <>
            <p className="text-balance text-foreground/90 mb-8 leading-relaxed">
              Este es un sitio privado para un público adulto. Al continuar
              confirmas que eres mayor de edad y que accedes de forma
              voluntaria y discreta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={accept}
                className="px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition"
              >
                Soy mayor de edad
              </button>
              <button
                onClick={() => setDenied(true)}
                className="px-8 py-3 border border-border text-muted hover:text-foreground hover:border-foreground/40 transition"
              >
                Soy menor de edad
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
