interface FooterProps {
  brandName: string;
}

export function Footer({ brandName }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="grid justify-center mb-5 mt-8">
      <p
        className="text-sm text-center"
        style={{ color: "var(--brand-text-secondary, gray)" }}
      >
        &copy; {year} {brandName}, Inc.
        <br />
        All rights reserved.
        <br />
        <a
          href="https://twitter.com/siyabon_ga"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Siyabonga Kubeka
        </a>
        .
      </p>
    </footer>
  );
}
