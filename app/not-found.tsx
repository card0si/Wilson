import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container" style={{ textAlign: "center" }}>
        <BrandLogo className="hero-logo" />
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for has moved or no longer exists.</p>
        <Link href="/" className="button" style={{ marginTop: "2rem" }}>
          Return home
        </Link>
      </div>
    </section>
  );
}
