import type { Metadata } from "next";
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
      <body className="font-body">{children}</body>
    </html>
  );
}
