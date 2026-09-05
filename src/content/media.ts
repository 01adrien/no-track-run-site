import type { Screenshot, WatchMockupData } from "@/types";

import webMonthView from "@/assets/img/web/user-plan-month-view.png";
import webWeekView from "@/assets/img/web/user-plan-week-view.png";
import webOverview from "@/assets/img/web/user-overview.png";
import webSessionTemplate from "@/assets/img/web/session-template.png";
import mobileView1 from "@/assets/img/mobile/mobile-view-1.png";
import mobileView2 from "@/assets/img/mobile/mobile-view-2.png";
import sessionView from "@/assets/img/mobile/session-view.png";

export const webScreenshots: Screenshot[] = [
  { src: webMonthView, alt: "Web Dashboard" },
  { src: webWeekView, alt: "Weekly plan" },
  { src: webOverview, alt: "User overview" },
  { src: webSessionTemplate, alt: "Session template" },
];

export const mobileScreenshots: Screenshot[] = [
  { src: mobileView1, alt: "Weekly plan" },
  { src: mobileView2, alt: "Mobile view" },
  { src: sessionView, alt: "Session view" },
];

export const watchMockups: WatchMockupData[] = [];
