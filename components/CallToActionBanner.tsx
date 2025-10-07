import Link from "next/link";

interface CallToActionBannerProps {
  heading: string;
  subheading: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
}

export function CallToActionBanner({
  heading,
  subheading,
  primaryCta = { href: "/free-moving-quote", label: "Get a Free Quote" },
  secondaryCta = { href: "tel:+15125551234", label: "Call (512) 555-1234" }
}: CallToActionBannerProps) {
  const renderCta = (cta: { href: string; label: string }, variant: "primary" | "secondary") => {
    const className = variant === "primary" ? "button" : "button secondary";

    if (cta.href.startsWith("http") || cta.href.startsWith("/")) {
      return (
        <Link key={cta.href} href={cta.href} className={className}>
          {cta.label}
        </Link>
      );
    }

    return (
      <a key={cta.href} href={cta.href} className={className}>
        {cta.label}
      </a>
    );
  };

  return (
    <section style={{ padding: "4.5rem 0" }}>
      <div className="container">
        <div
          className="card"
          style={{
            textAlign: "center",
            padding: "3rem",
            background:
              "linear-gradient(135deg, rgba(216,178,124,0.15), rgba(243,201,139,0.1))",
            border: "1px solid rgba(243, 201, 139, 0.35)"
          }}
        >
          <h2 style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{heading}</h2>
          <p style={{ marginBottom: "2rem" }}>{subheading}</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {renderCta(primaryCta, "primary")}
            {renderCta(secondaryCta, "secondary")}
          </div>
        </div>
      </div>
    </section>
  );
}
