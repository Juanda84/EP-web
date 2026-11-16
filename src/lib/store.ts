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
};

export type NextEvent = {
  date: string;
  theme: string;
  expectedCouples: string;
  imageUrl: string;
  active: boolean;
};

export type SiteData = {
  banners: Record<BannerSlotKey, Banner>;
  nextEvent: NextEvent;
};

const DEFAULT_DATA: SiteData = {
  banners: {
    home_top: { imageUrl: "", linkUrl: "", active: false },
    home_middle: { imageUrl: "", linkUrl: "", active: false },
    home_bottom: { imageUrl: "", linkUrl: "", active: false },
    eventos_banner: { imageUrl: "", linkUrl: "", active: false },
  },
  nextEvent: {
    date: "",
    theme: "",
    expectedCouples: "",
    imageUrl: "",
    active: false,
  },
};

export function readStore(): SiteData {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      banners: { ...DEFAULT_DATA.banners, ...parsed.banners },
      nextEvent: { ...DEFAULT_DATA.nextEvent, ...parsed.nextEvent },
    };
  } catch {
    return DEFAULT_DATA;
  }
}

export function writeStore(data: SiteData) {
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}
