"use client";

export default function DateRangeFields({
  startDate,
  endDate,
  onChangeStart,
  onChangeEnd,
}: {
  startDate: string;
  endDate: string;
  onChangeStart: (v: string) => void;
  onChangeEnd: (v: string) => void;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Desde (opcional)
        </label>
        <input
          type="date"
          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
          value={startDate}
          onChange={(e) => onChangeStart(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-wide text-muted mb-2">
          Hasta (opcional)
        </label>
        <input
          type="date"
          className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-gold transition"
          value={endDate}
          onChange={(e) => onChangeEnd(e.target.value)}
        />
      </div>
    </div>
  );
}
