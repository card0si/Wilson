import { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "Service Area & Location",
  description:
    "Find Wilson Moving and Property Services' Austin headquarters, service area map, and contact information."
};

const neighborhoods = [
  "Downtown Austin",
  "South Congress",
  "East Austin",
  "Westlake Hills",
  "Steiner Ranch",
  "Round Rock & Pflugerville",
  "Cedar Park & Leander",
  "Buda & Kyle"
];

export default function LocationPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <BrandLogo className="hero-logo" />
          <h1>Rooted in Austin, serving Central Texas.</h1>
          <p>
            Our headquarters is centrally located to reach every corner of the Austin metro.
            We offer same-day moving support for many neighborhoods and schedule statewide
            moves across Texas.
          </p>
        </div>
      </section>

      <section>
        <div className="container split">
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Headquarters</h2>
            <address style={{ fontStyle: "normal", lineHeight: 1.8 }}>
              Wilson Moving and Property Services
              <br />
              1201 Manor Road, Suite 300
              <br />
              Austin, TX 78722
            </address>
            <p>
              <a href="tel:+15125551234" className="button secondary">
                Call (512) 555-1234
              </a>
            </p>
            <p>
              Office Hours: Monday–Saturday, 8am – 6pm
              <br />
              USDOT #3456789 • TxDMV #009876543C
            </p>
          </div>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Service area</h2>
            <p>
              We proudly serve Austin and the surrounding communities. Same-day and next-day
              moving is available for many of the neighborhoods listed below.
            </p>
            <ul className="list">
              {neighborhoods.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Driving directions</h2>
            <p>
              Our warehouse and office are minutes from downtown Austin and easily accessed
              from I-35. Visitor parking is available on-site. Please call ahead to schedule
              loading dock access for storage pick-ups.
            </p>
            <iframe
              title="Wilson Moving and Property Services map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.5852970642665!2d-97.726!3d30.2805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a625c1a2ed%3A0x1!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1707777777777"
              style={{
                width: "100%",
                border: 0,
                height: "320px",
                borderRadius: "16px"
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
