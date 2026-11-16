"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (!res.ok) {
      setError("Contraseña incorrecta.");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm border border-border bg-background-elevated rounded-md p-8"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2 text-center">
          Acceso privado
        </p>
        <h1 className="font-serif text-2xl mb-6 text-center">Panel admin</h1>

        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Contraseña
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-background border border-border rounded-sm px-4 py-3 mb-4 text-foreground focus:outline-none focus:border-gold transition"
          autoFocus
        />

        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-3 bg-gold text-background font-medium tracking-wide hover:bg-gold-soft transition disabled:opacity-60"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
