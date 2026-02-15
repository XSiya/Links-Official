import type { SocialLink } from "../lib/brands/types";
import { getSocialIcon } from "../lib/icons";

interface SocialIconsProps {
  links: SocialLink[];
}

export function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-5">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          aria-label={link.platform}
        >
          {getSocialIcon(link.icon)}
        </a>
      ))}
    </div>
  );
}
