import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Moving Quote",
  description:
    "Request a free moving quote from Wilson Moving and Property Services. Share your move details and receive pricing within 24 hours."
};

export default function FreeMovingQuotePage() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Request your free moving quote.</h1>
        <p>
          Share the details of your upcoming move and our coordinators will reach out within
          one business day with a detailed proposal. Prefer to talk now? Call
          <a
            href="tel:+15125551234"
            style={{ color: "var(--accent-strong)", marginLeft: "0.5rem" }}
          >
            (512) 555-1234
          </a>
          .
        </p>
        <form
          style={{
            marginTop: "3rem",
            display: "grid",
            gap: "1.5rem",
            maxWidth: "720px"
          }}
        >
          <div className="split" style={{ gap: "1.5rem" }}>
            <label style={{ display: "grid", gap: "0.5rem" }}>
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
              />
            </label>
            <label style={{ display: "grid", gap: "0.5rem" }}>
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
              />
            </label>
          </div>
          <div className="split" style={{ gap: "1.5rem" }}>
            <label style={{ display: "grid", gap: "0.5rem" }}>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(512) 555-1234"
              />
            </label>
            <label style={{ display: "grid", gap: "0.5rem" }}>
              <span>Preferred move date</span>
              <input type="date" name="moveDate" required />
            </label>
          </div>
          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span>Moving from</span>
            <input
              type="text"
              name="origin"
              required
              placeholder="Street, city, state"
            />
          </label>
          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span>Moving to</span>
            <input
              type="text"
              name="destination"
              required
              placeholder="Street, city, state"
            />
          </label>
          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span>Tell us about your move</span>
            <textarea
              name="details"
              rows={4}
              placeholder="Home size, access considerations, items of note"
              style={{ minHeight: "140px", resize: "vertical" }}
            />
          </label>
          <button type="submit" className="button" style={{ width: "fit-content" }}>
            Submit quote request
          </button>
          <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
            By submitting this form you agree to receive updates about your move from Wilson
            Moving and Property Services. We never sell your information.
          </p>
        </form>
      </div>
    </section>
  );
}

