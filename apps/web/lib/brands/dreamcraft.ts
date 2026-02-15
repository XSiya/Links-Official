import type { Brand } from "./types";

export const dreamcraft: Brand = {
  slug: "dreamcraft",
  name: "DreamCraft-Studio",
  tagline: "AI-Native Animation. Arcane-Tier Storytelling.",
  description:
    "DreamCraft-Studio — AI-native animation studio by Siyabonga Kubeka.",
  url: "",
  profileImage: "/images/profile/mushin-profile-picture-2.jpg",
  sections: [
    {
      title: "Projects",
      links: [
        {
          title: "Apartheid Vol. 1",
          subtitle: "Coming Soon",
          url: "#",
        },
      ],
    },
  ],
  theme: {
    background: "#0A0A0A",
    cardBackground: "rgba(0, 0, 0, 0.4)",
    border: "#333333",
    text: "#ffffff",
    accent: "#d4af37",
    radius: "8px",
    font: { heading: "Geist Sans", body: "Geist Sans" },
  },
};
