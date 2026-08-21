import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentor vs. Mentee Agent Suite",
  description:
    "An interactive learning experience with five AI agents supporting your mentorship journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
        {/* iSupport widget — floating support button served from the iSupport
            console. Tickets land in the shared iSupport inbox tagged to source
            "mentor-vs-mentee" with full attribution. Managed in iSupport → Admin → Sources. */}
        <Script
          src="https://support.anthonywashingtonsr.com/api/embed.js?source=mentor-vs-mentee"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
