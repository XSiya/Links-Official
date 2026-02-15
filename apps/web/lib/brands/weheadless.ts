import type { Brand } from "./types";

export const weheadless: Brand = {
  slug: "weheadless",
  name: "We Headless",
  tagline: "Build smarter, ship faster with headless architecture.",
  description:
    "We Headless — headless architecture studio by Siyabonga Kubeka.",
  url: "",
  profileImage: "/images/profile/mushin-profile-picture-2.jpg",
  sections: [
    {
      title: "Services",
      links: [
        {
          title: "We Headless",
          subtitle: "Coming Soon",
          url: "#",
        },
      ],
    },
  ],
  theme: {
    background: "#f5f0e8",
    cardBackground: "#ffffff",
    border: "#d4d0c8",
    text: "#0a0a0a",
    accent: "#c41e3a",
    radius: "2px",
    font: { heading: "Geist Mono", body: "Geist Sans" },
  },
};
