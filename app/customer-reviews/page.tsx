import { Metadata } from "next";
import { CallToActionBanner } from "@/components/CallToActionBanner";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read customer reviews for Wilson Moving and Property Services and discover why Austinites trust our moving team."
};

const reviews = [
  {
    quote:
      "Wilson Moving handled our downtown office relocation flawlessly. They packed, labeled, and reassembled every workstation before Monday. We were blown away by their communication and care.",
    name: "Kelli R.",
    detail: "COO, Austin fintech company"
  },
  {
    quote:
      "From the virtual estimate to the final walkthrough, the team was professional and upbeat. They protected our hardwood floors and even helped hang art in the new house.",
    name: "Derrick & Alicia M.",
    detail: "Residential move from Mueller to Circle C"
  },
  {
    quote:
      "I booked Wilson for a last-minute move-out clean and junk haul. They coordinated everything while I was out of town. Worth every penny.",
    name: "Taylor S.",
    detail: "Property manager, East Austin"
  }
];

const badges = [
  "4.9 average Google rating",
  "Angi Super Service Award 2023",
  "Fully licensed and insured",
  "Austin Chamber of Commerce member"
];

export default function CustomerReviewsPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>What our clients say.</h1>
          <p>
            Our reputation is built on dependable service and attentive crews. Here’s how
            Wilson Moving and Property Services has helped our neighbors across Austin.
          </p>
        </div>
      </section>

      <section>
        <div className="container grid three">
          {reviews.map((review) => (
            <blockquote key={review.name} className="card" style={{ position: "relative" }}>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  fontSize: "4rem",
                  color: "rgba(243, 201, 139, 0.35)"
                }}
              >
                “
              </span>
              <p style={{ marginTop: "2.5rem" }}>&ldquo;{review.quote}&rdquo;</p>
              <footer style={{ marginTop: "1.5rem", color: "var(--accent-strong)" }}>
                <strong>{review.name}</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>{review.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Recognition we&apos;re proud of</h2>
            <div className="grid two" style={{ marginTop: "2rem" }}>
              {badges.map((badge) => (
                <div
                  key={badge}
                  className="card"
                  style={{
                    background: "rgba(216, 178, 124, 0.12)",
                    border: "1px solid rgba(243, 201, 139, 0.35)",
                    textAlign: "center"
                  }}
                >
                  <p style={{ margin: 0 }}>{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner
        heading="Experience the Wilson difference."
        subheading="Join thousands of Austinites who trust our crews for reliable, courteous moving and property services."
      />
    </>
  );
}
