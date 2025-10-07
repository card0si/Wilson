import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container" style={{ textAlign: "center" }}>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for has moved or no longer exists.</p>
        <Link href="/" className="button" style={{ marginTop: "2rem" }}>
          Return home
        </Link>
      </div>
    </section>
  );
}
