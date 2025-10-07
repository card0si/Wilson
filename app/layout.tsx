import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Wilson Moving and Property Services | Austin Movers",
    template: "%s | Wilson Moving and Property Services"
  },
  description:
    "Wilson Moving and Property Services provides full-service moving, packing, and property support throughout Austin, Texas.",
  metadataBase: new URL("https://www.wilsonmovingatx.com"),
  openGraph: {
    title: "Wilson Moving and Property Services",
    description:
      "Professional Austin movers offering residential and commercial moving, packing, and property services.",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Moving and Property Services",
    description:
      "Professional Austin movers offering residential and commercial moving, packing, and property services.",
    creator: "@wilsonmoving"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
