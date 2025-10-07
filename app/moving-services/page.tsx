import Link from "next/link";
import { Metadata } from "next";
import { CallToActionBanner } from "@/components/CallToActionBanner";
import { BrandLogo } from "@/components/BrandLogo";

export const metadata: Metadata = {
  title: "Moving Services in Austin",
  description:
    "Discover residential, commercial, packing, storage, and specialty moving services from Wilson Moving and Property Services."
};

const services = [
  {
    name: "Full-Service Residential Moves",
    details:
      "Complete packing, furniture disassembly, loading, transport, and setup in your new home with floor and wall protection throughout.",
    highlights: [
      "Apartments, condos, and single-family homes",
      "Packing supplies delivered prior to move day",
      "Donation and disposal coordination"
    ]
  },
  {
    name: "Commercial & Office Relocation",
    details:
      "Keep business moving with after-hours scheduling, IT disconnect/reconnect, and dedicated crew leads for each department.",
    highlights: [
      "Space planning and crate rentals",
      "Elevator and dock coordination",
      "Certificate of insurance provided for building management"
    ]
  },
  {
    name: "Packing & Unpacking",
    details:
      "Professional packers protect fragile items, kitchens, closets, and offices. Unpacking services set up living spaces and remove debris.",
    highlights: [
      "Custom crating for art and antiques",
      "Eco-friendly packing material options",
      "Wardrobe box usage included"
    ]
  },
  {
    name: "Storage & Property Services",
    details:
      "Flexible storage solutions and make-ready property services to bridge the gap between move-out and move-in dates.",
    highlights: [
      "Climate-controlled storage by the week",
      "Staging, cleaning, and junk haul-away",
      "Move-out punch list assistance"
    ]
  }
];

export default function MovingServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <BrandLogo className="hero-logo" />
          <h1>Premium moving services crafted for Austin.</h1>
          <p>
            From downtown high-rises to Hill Country estates, Wilson Moving and Property
            Services manages every detail of your move. Explore our service offerings and
            connect with our coordinators for a tailored plan.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/free-moving-quote" className="button">
              Start your estimate
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid two">
          {services.map((service) => (
            <article key={service.name} className="card">
              <h2>{service.name}</h2>
              <p>{service.details}</p>
              <ul className="list">
                {service.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CallToActionBanner
        heading="Need a custom solution?"
        subheading="Tell us about specialty items, complex logistics, or property services and our move coordinators will map out every detail."
      />
    </>
  );
}
