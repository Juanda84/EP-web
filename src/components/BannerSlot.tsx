import Image from "next/image";
import { readStore, isWithinDateRange, type BannerSlotKey } from "@/lib/store";

export default function BannerSlot({ slot }: { slot: BannerSlotKey }) {
  const { banners } = readStore();
  const banner = banners[slot];

  if (!banner.active || !banner.imageUrl) return null;
  if (!isWithinDateRange(banner.startDate, banner.endDate)) return null;

  const content = (
    <div className="relative mx-auto max-w-4xl h-28 md:h-36 overflow-hidden rounded-md border border-border">
      <Image src={banner.imageUrl} alt="" fill className="object-cover" />
    </div>
  );

  return (
    <div className="px-6 py-10">
      {banner.linkUrl ? (
        <a
          href={banner.linkUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
