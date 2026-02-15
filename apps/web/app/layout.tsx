import type { Metadata } from "next";
import { geistSans, geistMono, philosopher, roboto } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s — Siyabonga Kubeka",
    default: "Siyabonga Kubeka — Links",
  },
  description:
    "Links for Existence, DreamCraft-Studio, and We Headless by Siyabonga Kubeka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${philosopher.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
