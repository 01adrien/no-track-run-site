import type { TeamMember } from "@/types";

import photoAdrien from "@/assets/img/team/adrien.jpg";
import photoAlex from "@/assets/img/team/alex.png";

export const teamSection = {
  tag: "Derrière NoTrackRun",
  heading: "L'équipe",
  intro:
    "Une petite équipe qui construit NoTrackRun, actuellement en bêta fermée.",
};

export const team: TeamMember[] = [
  {
    name: "Adrien Gaucher",
    role: "Backend & plateforme",
    bio: "",
    photo: photoAdrien,
  },
  {
    name: "Alexandre Henin",
    role: "Mobile & montre",
    bio: "",
    photo: photoAlex,
  },
];
