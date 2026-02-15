export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  profileImage: string;
  quote?: string;
  sections: Section[];
  theme: BrandTheme;
}

export interface SharedProfile {
  name: string;
  displayName: string;
  username: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Section {
  title: string;
  links: LinkItem[];
}

export interface LinkItem {
  title: string;
  subtitle: string;
  url: string;
  icon?: string;
  rippleColor?: string;
}

export interface BrandTheme {
  background: string;
  cardBackground: string;
  border: string;
  text: string;
  accent: string;
  radius: string;
  font: { heading: string; body: string };
}
