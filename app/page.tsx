import Link from "next/link";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { BrandLogo } from "@/components/BrandLogo";

const coreServices = [
  {
    title: "Residential Moving",
    description:
      "Full-service packing, loading, and unpacking to get you settled in your new Austin home without the stress.",
    cta: { href: "/free-moving-quote", label: "Book a Home Move" }
  },
  {
    title: "Commercial Relocation",
    description:
      "Seamless moves for offices, retail spaces, and industrial facilities with minimal downtime for your team.",
    cta: { href: "/moving-services", label: "Explore Commercial" }
  },
  {
    title: "Property Services",
    description:
      "Turnkey property support including staging, junk haul-away, and make-ready cleaning between tenants.",
    cta: { href: "/moving-services", label: "See Property Care" }
  }
];

const stats = [
  { value: "10+", label: "Years serving Austin" },
  { value: "4.9/5", label: "Average customer rating" },
  { value: "1,200+", label: "Moves completed last year" }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="split">
            <div>
              <BrandLogo size="lg" className="hero-logo" priority />
              <span className="tag">Austin, Texas</span>
              <h1>Moving in Austin made effortless.</h1>
              <p>
                Wilson Moving and Property Services delivers reliable, white-glove moving
                experiences for homes, apartments, and businesses throughout Central Texas.
                From expert packing to meticulous property care, we handle every detail so
                you can enjoy the moment.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "2rem"
                }}
              >
                <Link href="/free-moving-quote" className="button">
                  Get your free moving quote
                </Link>
                <a href="tel:+15125551234" className="button secondary">
                  Call our moving experts
                </a>
              </div>
            </div>
            <div className="card" style={{ padding: "2.5rem" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Trusted by Austinites</h3>
              <p style={{ marginBottom: "2rem" }}>
                Our licensed and insured crew pairs modern equipment with southern
                hospitality. We show up on time, protect your property, and keep you updated
                from the first box to the final walkthrough.
              </p>
              <ul className="list">
                <li>Dedicated move coordinator for every job</li>
                <li>Specialty handling for pianos, art, and antiques</li>
                <li>Climate-controlled storage options across Austin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <span className="tag">Why Wilson</span>
              <h2>Local knowledge with big move capabilities.</h2>
              <p>
                Austin traffic, historic neighborhoods, and high-rise elevators require a
                mover who knows the city. Our crew plans every route, secures building
                approvals, and protects both old bungalows and modern condos with the same
                care. We bring premium equipment and fully trained pros to every job.
              </p>
            </div>
            <div className="grid three">
              {stats.map((stat) => (
                <div key={stat.label} className="card" style={{ textAlign: "center" }}>
                  <strong style={{ fontSize: "2.5rem", color: "var(--accent-strong)" }}>
                    {stat.value}
                  </strong>
                  <p style={{ marginTop: "0.75rem" }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="tag">Our specialties</span>
          <h2 style={{ marginBottom: "2rem" }}>Moving and property services tailored to you.</h2>
          <div className="grid three">
            {coreServices.map((service) => (
              <div key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.cta.href} className="button secondary">
                  {service.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div className="card" style={{ padding: "2.5rem" }}>
              <span className="tag">How it works</span>
              <h2>Streamlined, transparent moving process.</h2>
              <p>
                We put communication first from quote to unload. Know exactly what to
                expect and when our crew will arrive thanks to proactive updates every step
                of the way.
              </p>
            </div>
            <div className="card" style={{ padding: "2.5rem" }}>
              <ol className="list steps" style={{ counterReset: "steps", listStyle: "none" }}>
                {[
                  "Schedule a virtual or in-home estimate",
                  "Receive a detailed plan and flat-rate proposal",
                  "Pack with our team or request full-service packing",
                  "Move day execution with protection for every surface",
                  "Final walkthrough and property reset"
                ].map((step, index) => (
                  <li
                    key={step}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: "1rem",
                      alignItems: "center"
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "50%",
                        background: "rgba(216, 178, 124, 0.16)",
                        color: "var(--accent-strong)",
                        fontWeight: 600,
                        fontSize: "1.1rem"
                      }}
                    >
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner
        heading="Ready for a move that feels effortless?"
        subheading="Tell us about your upcoming move in Austin and receive a tailored plan with pricing in under 24 hours."
      />
    </>
  );
}
