import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "site-data.json");

export type BannerSlotKey =
  | "home_top"
  | "home_middle"
  | "home_bottom"
  | "eventos_banner";

export type Banner = {
  imageUrl: string;
  linkUrl: string;
  active: boolean;
  startDate: string;
  endDate: string;
};

export type NextEvent = {
  date: string;
  theme: string;
  expectedCouples: string;
  imageUrl: string;
  active: boolean;
};

export type Popup = {
  text: string;
  imageUrl: string;
  active: boolean;
  startDate: string;
  endDate: string;
};

export type SiteData = {
  banners: Record<BannerSlotKey, Banner>;
  nextEvent: NextEvent;
  popup: Popup;
};

const DEFAULT_BANNER: Banner = {
  imageUrl: "",
  linkUrl: "",
  active: false,
  startDate: "",
  endDate: "",
};

const DEFAULT_DATA: SiteData = {
  banners: {
    home_top: { ...DEFAULT_BANNER },
    home_middle: { ...DEFAULT_BANNER },
    home_bottom: { ...DEFAULT_BANNER },
    eventos_banner: { ...DEFAULT_BANNER },
  },
  nextEvent: {
    date: "",
    theme: "",
    expectedCouples: "",
    imageUrl: "",
    active: false,
  },
  popup: {
    text: "",
    imageUrl: "",
    active: false,
    startDate: "",
    endDate: "",
  },
};

export function readStore(): SiteData {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    const parsed = JSON.parse(raw);

    const banners = {} as Record<BannerSlotKey, Banner>;
    (Object.keys(DEFAULT_DATA.banners) as BannerSlotKey[]).forEach((key) => {
      banners[key] = { ...DEFAULT_BANNER, ...parsed.banners?.[key] };
    });

    return {
      banners,
      nextEvent: { ...DEFAULT_DATA.nextEvent, ...parsed.nextEvent },
      popup: { ...DEFAULT_DATA.popup, ...parsed.popup },
    };
  } catch {
    return DEFAULT_DATA;
  }
}

export function writeStore(data: SiteData) {
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

/** True si hoy cae dentro de [startDate, endDate] (YYYY-MM-DD); un extremo vacío no limita. */
export function isWithinDateRange(startDate: string, endDate: string): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (startDate && today < startDate) return false;
  if (endDate && today > endDate) return false;
  return true;
}
