import type { Brand } from "./types";
import { sharedQuote } from "./shared";

export const existence: Brand = {
  slug: "existence",
  name: "Existence",
  tagline: "Every second counts",
  description:
    "Existence — the creative ecosystem by Siyabonga Kubeka. Apps, music, and more.",
  url: "https://existence-klcorp.com",
  profileImage: "/images/profile/mushin-profile-picture-2.jpg",
  quote: sharedQuote,
  sections: [
    {
      title: "Official Website",
      links: [
        {
          title: "Existence",
          subtitle: "Every second counts",
          url: "https://existence-klcorp.com",
          rippleColor: "rgba(62,39,35,0.43)",
        },
      ],
    },
    {
      title: "Apps",
      links: [
        {
          title: "Groove",
          subtitle: "Catch me outside",
          url: "https://groove-l.app",
          rippleColor: "rgba(27,94,32,0.43)",
        },
        {
          title: "XFlush",
          subtitle: "Buster Douglas",
          url: "https://xflush.app",
          rippleColor: "rgba(136,14,79,0.43)",
        },
        {
          title: "AfterLife",
          subtitle: "Genesis",
          url: "https://after-life.app",
          rippleColor: "rgba(74,20,140,0.43)",
        },
        {
          title: "TrueTime",
          subtitle: "Every Second",
          url: "https://true-time.app",
          rippleColor: "rgba(13,71,161,0.43)",
        },
        {
          title: "Cheat Codes",
          subtitle: "Matrix Bug",
          url: "https://cheat-codes.app",
          rippleColor: "rgba(230,81,0,0.43)",
        },
        {
          title: "Plates",
          subtitle: "Identity",
          url: "https://n-plates.app",
          rippleColor: "rgba(183,28,28,0.43)",
        },
        {
          title: "Inventions",
          subtitle: "Where it all begins",
          url: "https://inventions.app",
        },
        {
          title: "MapMemory",
          subtitle: "Identity",
          url: "https://n-plates.app",
        },
      ],
    },
  ],
  theme: {
    background: "#0F0F0F",
    cardBackground: "rgba(23, 23, 23, 0.73)",
    border: "#2d2d2d",
    text: "#ffffff",
    accent: "#3E2723",
    radius: "20px",
    font: { heading: "Philosopher", body: "Roboto" },
  },
};
