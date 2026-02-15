import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBrand, brandSlugs } from "../../lib/brands";
import { sharedProfile } from "../../lib/brands/shared";
import { BrandLayout } from "../../components/BrandLayout";
import { BrandTabs } from "../../components/BrandTabs";
import { ProfileHeader } from "../../components/ProfileHeader";
import { SocialIcons } from "../../components/SocialIcons";
import { LinkSection } from "../../components/LinkSection";
import { Footer } from "../../components/Footer";

export function generateStaticParams() {
  return brandSlugs.map((brand) => ({ brand }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};

  return {
    title: brand.name,
    description: brand.description,
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  return (
    <BrandLayout brand={brand}>
      <BrandTabs activeBrand={brand.slug} />
      <main>
        <ProfileHeader
          displayName={sharedProfile.displayName}
          username={sharedProfile.username}
          image={brand.profileImage}
          quote={brand.quote}
          verified
        />
        <SocialIcons links={sharedProfile.socialLinks} />
        {brand.sections.map((section) => (
          <LinkSection
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}
      </main>
      <Footer brandName={brand.name} />
    </BrandLayout>
  );
}
