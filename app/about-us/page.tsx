import { Metadata } from "next";
import { CallToActionBanner } from "@/components/CallToActionBanner";

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
          <h1>Local movers with a reputation for excellence.</h1>
          <p>
            Founded by Cameron Wilson in East Austin, Wilson Moving and Property Services
            grew from a single truck to a fleet serving the Greater Austin area. Our
            mission is to provide the most dependable, courteous moving experience in
            Texas.
          </p>
        </div>
      </section>

      <section>
        <div className="container split">
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>Our story</h2>
            <p>
              Wilson Moving began in 2013 when Cameron Wilson started helping neighbors move
              with a focus on treating every home like his own. What started as weekend jobs
              quickly became a trusted local service for families and businesses across
              Austin, Round Rock, Cedar Park, and beyond.
            </p>
            <p>
              Today, a carefully chosen crew carries that same neighborhood spirit to every
              move. We invest in ongoing training, background checks, and state-of-the-art
              moving gear so your belongings and property are safe at every turn. The result?
              Loyal clients who refer us to friends and family again and again.
            </p>
          </div>
          <div className="card" style={{ padding: "2.5rem" }}>
            <h2>How we work</h2>
            <p>
              Every project is coordinated directly by Cameron, ensuring each client has a
              single point of contact from planning through delivery. Whether it’s a
              residential move or a commercial relocation, we build a plan around your
              schedule, communicate proactively, and keep quality at the forefront.
            </p>
            <p>
              Our crews are small, experienced, and local. That allows us to stay flexible,
              offer honest timelines, and deliver the dependable service people recommend to
              their own friends.
            </p>
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
