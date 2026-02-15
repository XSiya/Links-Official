import type { Brand } from "./types";
import { existence } from "./existence";
import { dreamcraft } from "./dreamcraft";
import { weheadless } from "./weheadless";

const brands: Record<string, Brand> = {
  existence,
  dreamcraft,
  weheadless,
};

export const brandSlugs = Object.keys(brands);

export function getBrand(slug: string): Brand | undefined {
  return brands[slug];
}

export type {
  Brand,
  SharedProfile,
  SocialLink,
  Section,
  LinkItem,
  BrandTheme,
} from "./types";
