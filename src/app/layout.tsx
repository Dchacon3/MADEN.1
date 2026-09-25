import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maden Internal Hub",
  description: "Onboarding, SOPs and tools for the Maden team",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
