import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="container" style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "1rem" }}>
          &copy; {new Date().getFullYear()} Wilson Moving and Property Services. All
          rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <ul style={{ justifyContent: "center" }}>
            <li>
              <Link href="/moving-services">Moving Services</Link>
            </li>
            <li>
              <Link href="/free-moving-quote">Free Quote</Link>
            </li>
            <li>
              <Link href="/about-us">About</Link>
            </li>
            <li>
              <a href="tel:+15125551234">Call (512) 555-1234</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
