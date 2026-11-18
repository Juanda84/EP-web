"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BannerEditor from "@/components/admin/BannerEditor";
import EventEditor from "@/components/admin/EventEditor";
import PopupEditor from "@/components/admin/PopupEditor";
import type { SiteData } from "@/lib/store";

export default function AdminPage() {
  const router = useRouter();
  const [data, setData] = useState<SiteData | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/data")
      .then((r) => r.json())
      .then(setData);
  }, []);

  async function handleSave() {
    if (!data) return;
    setSaving(true);
    await fetch("/api/admin/data", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    setSavedAt(Date.now());
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  if (!data) {
    return <div className="px-6 py-24 text-center text-muted">Cargando...</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
            Panel privado
          </p>
          <h1 className="font-serif text-3xl">Administración</h1>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-muted hover:text-foreground transition"
        >
          Cerrar sesión
        </button>
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-6">Publicidad — Home</h2>
        <div className="space-y-6">
          <BannerEditor
            title="Banner superior"
            description="Aparece justo debajo del hero principal."
            value={data.banners.home_top}
            onChange={(next) =>
              setData({ ...data, banners: { ...data.banners, home_top: next } })
            }
          />
          <BannerEditor
            title="Imagen central"
            description="Aparece entre las secciones de la página de inicio."
            value={data.banners.home_middle}
            onChange={(next) =>
              setData({
                ...data,
                banners: { ...data.banners, home_middle: next },
              })
            }
          />
          <BannerEditor
            title="Banner inferior"
            description="Aparece al final de la página de inicio."
            value={data.banners.home_bottom}
            onChange={(next) =>
              setData({
                ...data,
                banners: { ...data.banners, home_bottom: next },
              })
            }
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-6">Publicidad — Eventos</h2>
        <BannerEditor
          title="Banner de eventos"
          description="Aparece en la página de Eventos."
          value={data.banners.eventos_banner}
          onChange={(next) =>
            setData({
              ...data,
              banners: { ...data.banners, eventos_banner: next },
            })
          }
        />
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-6">Próximo evento</h2>
        <EventEditor
          value={data.nextEvent}
          onChange={(next) => setData({ ...data, nextEvent: next })}
        />
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-2xl mb-6">Popup</h2>
        <PopupEditor
          value={data.popup}
          onChange={(next) => setData({ ...data, popup: next })}
        />
      </section>

      <div className="sticky bottom-6 flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition disabled:opacity-60"
        >
          {saving ? "Guardando..." : "Guardar cambios"}
        </button>
        {savedAt && !saving && (
          <span className="text-sm text-muted">Cambios guardados</span>
        )}
      </div>
    </div>
  );
}
