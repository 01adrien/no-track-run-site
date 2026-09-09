import type { TeamMember } from "@/types";

import photoAdrien from "@/assets/img/team/adrien.jpg";
import photoAlex from "@/assets/img/team/alex.png";

export const teamSection = {
  tag: "Who's building this",
  heading: "The team",
  intro:
    "A small team building NoTrackRun in the open, currently in closed beta.",
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
    role: "Mobile & watch",
    bio: "",
    photo: photoAlex,
  },
];
