import { Metadata } from "next";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { BrandLogo } from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "About Wilson Moving and Property Services",
  description:
    "Learn about Wilson Moving and Property Services, our Austin roots, mission, and professional moving team."
};

const values = [
  {
    title: "People-first service",
    description:
      "We treat clients like neighbors with proactive communication, careful handling, and honest pricing."
  },
  {
    title: "Professional craftsmanship",
    description:
      "Our team is trained to protect Austin’s unique homes and businesses using premium equipment and proven methods."
  },
  {
    title: "Community commitment",
    description:
      "We support local nonprofits with donation hauls and offer eco-friendly moving material options."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <BrandLogo className="hero-logo" />
          <h1>Local movers with a reputation for excellence.</h1>
          <p>
            Founded in East Austin, Wilson Moving and Property Services grew from a single
            truck to a fleet serving the Greater Austin area. Our mission is to provide the
            most dependable, courteous moving experience in Texas.
          </p>
        </div>
      </section>

      <section>
        <div className="container split">
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Our story</h2>
            <p>
              Wilson Moving began in 2013 when founder Marcus Wilson saw a need for movers
              who respected both timelines and property. Today, our licensed and insured team
              of coordinators, drivers, and moving specialists completes over 1,200 moves each
              year across Austin, Round Rock, Cedar Park, and beyond.
            </p>
            <p>
              We invest in ongoing training, background checks, and state-of-the-art moving
              gear to ensure your belongings and property are safe at every turn. The result?
              Loyal clients who refer us to friends and family again and again.
            </p>
          </div>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Leadership team</h2>
            <ul className="list">
              <li>Marcus Wilson, Founder &amp; CEO</li>
              <li>Samantha Lee, Director of Operations</li>
              <li>Jordan Martinez, Senior Move Coordinator</li>
              <li>Kayla Chen, Commercial Services Manager</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 style={{ marginBottom: "2rem" }}>What guides us every day.</h2>
          <div className="grid three">
            {values.map((value) => (
              <div key={value.title} className="card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        heading="Move with a team that knows Austin."
        subheading="Connect with our coordinators for a walkthrough of our process and a complimentary quote."
      />
    </>
  );
}
