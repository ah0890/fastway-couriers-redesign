import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

// next/font self-hosts the font at build time — no runtime request to Google.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = "Fastway Couriers South Africa — Practice Redesign";
const description =
  "A portfolio redesign concept of the Fastway Couriers South Africa homepage. Practice project, not affiliated with Fastway Couriers.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Fastway Couriers Practice Redesign",
  // A practice site should not compete with the official one in search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2f8a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-ZA" className={`${geistSans.variable} antialiased`}>
      {/* Browser extensions (e.g. ColorZilla) add attributes to <body> before hydration. */}
      <body id="top" className="min-h-dvh font-sans" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
