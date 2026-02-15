import type { LinkItem } from "../lib/brands/types";
import { LinkCard } from "./LinkCard";

interface LinkSectionProps {
  title: string;
  links: LinkItem[];
}

export function LinkSection({ title, links }: LinkSectionProps) {
  return (
    <section className="mt-6">
      <h2
        className="text-2xl text-center mb-4"
        style={{ fontFamily: "var(--brand-font-heading)" }}
      >
        {title}
      </h2>
      <div className="grid gap-2">
        {links.map((link) => (
          <LinkCard
            key={link.title}
            title={link.title}
            subtitle={link.subtitle}
            url={link.url}
          />
        ))}
      </div>
    </section>
  );
}
