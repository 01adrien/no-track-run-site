import type { TeamMember } from "@/types";

import photoAdrien from "@/assets/img/team/adrien.jpg";
import photoAlex from "@/assets/img/team/alex.png";

export const teamSection = {
  tag: "Wie dit bouwt",
  heading: "Het team",
  intro:
    "Een klein team dat NoTrackRun in het openbaar bouwt, momenteel in gesloten bèta.",
};

export const team: TeamMember[] = [
  {
    name: "Adrien Gaucher",
    role: "Backend & platform",
    bio: "",
    photo: photoAdrien,
  },
  {
    name: "Alexandre Henin",
    role: "Mobiel & horloge",
    bio: "",
    photo: photoAlex,
  },
];
