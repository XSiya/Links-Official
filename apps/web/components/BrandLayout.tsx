import type { Brand } from "../lib/brands/types";

interface BrandLayoutProps {
  brand: Brand;
  children: React.ReactNode;
}

export function BrandLayout({ brand, children }: BrandLayoutProps) {
  return (
    <div
      data-brand={brand.slug}
      className="min-h-screen"
      style={{
        backgroundColor: "var(--brand-bg)",
        color: "var(--brand-text)",
        fontFamily: "var(--brand-font-body)",
      }}
    >
      <div className="relative flex min-h-screen flex-col items-center py-6 sm:py-12">
        <div className="w-full max-w-lg px-6 sm:px-10">{children}</div>
      </div>
    </div>
  );
}
