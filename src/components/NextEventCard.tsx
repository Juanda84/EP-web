import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { NextEvent } from "@/lib/store";

export default function NextEventCard({
  event,
  withLink = false,
}: {
  event: NextEvent;
  withLink?: boolean;
}) {
  if (!event.active) return null;

  return (
    <div className="relative overflow-hidden rounded-md border border-border">
      {event.imageUrl && (
        <>
          <Image src={event.imageUrl} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </>
      )}
      <div className="relative p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
          Próximo evento
        </p>
        {event.theme && (
          <h2 className="font-serif text-2xl md:text-3xl mb-4 text-gold-soft">
            {event.theme}
          </h2>
        )}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-muted">
          {event.date && (
            <span>
              <span className="text-foreground/80">Fecha: </span>
              {formatDate(event.date)}
            </span>
          )}
          {event.expectedCouples && (
            <span>
              <span className="text-foreground/80">Parejas esperadas: </span>
              {event.expectedCouples}
            </span>
          )}
        </div>
        {withLink && (
          <Link
            href="/eventos"
            className="inline-block mt-6 text-sm text-gold-soft underline underline-offset-4"
          >
            Ver detalles
          </Link>
        )}
      </div>
    </div>
  );
}
