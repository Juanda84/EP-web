import SitePopup from "./SitePopup";
import { readStore, isWithinDateRange } from "@/lib/store";

export default function SitePopupLoader() {
  const { popup } = readStore();
  if (!popup.active || !popup.text) return null;
  if (!isWithinDateRange(popup.startDate, popup.endDate)) return null;
  return <SitePopup popup={popup} />;
}
