import Link from "next/link";

const tabs = [
  { slug: "existence", label: "Existence" },
  { slug: "dreamcraft", label: "DreamCraft" },
  { slug: "weheadless", label: "We Headless" },
] as const;

interface BrandTabsProps {
  activeBrand: string;
}

export function BrandTabs({ activeBrand }: BrandTabsProps) {
  return (
    <nav
      className="flex justify-center gap-2 mb-6"
      aria-label="Brand navigation"
    >
      {tabs.map((tab) => (
        <Link
          key={tab.slug}
          href={`/${tab.slug}`}
          className={`rounded-full px-4 py-1.5 text-sm transition-opacity ${
            tab.slug === activeBrand ? "opacity-100 font-semibold" : "opacity-50 hover:opacity-75"
          }`}
          style={{
            backgroundColor:
              tab.slug === activeBrand
                ? "var(--brand-border)"
                : "transparent",
          }}
          aria-current={tab.slug === activeBrand ? "page" : undefined}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
