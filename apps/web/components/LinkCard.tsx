interface LinkCardProps {
  title: string;
  subtitle: string;
  url: string;
}

export function LinkCard({ title, subtitle, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="relative flex h-[93px] overflow-hidden border transition-colors"
        style={{
          borderRadius: "var(--brand-radius)",
          borderColor: "var(--brand-border)",
          backgroundColor: "var(--brand-card-bg)",
        }}
      >
        <div
          className="absolute inset-[1px] flex items-center p-2.5"
          style={{
            borderRadius: "inherit",
            backgroundColor: "var(--brand-card-inner-bg)",
          }}
        >
          <div className="flex flex-col">
            <span
              className="text-[17px]"
              style={{ fontFamily: "var(--brand-font-heading)" }}
            >
              {title}
            </span>
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--brand-font-body)",
                color: "var(--brand-text-secondary, gray)",
              }}
            >
              {subtitle}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--brand-font-body)" }}
            >
              {url}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
