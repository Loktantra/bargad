import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bargad - Building India Together | Progressive Political Movement",
  description: "Bargad is a new-age, inclusive political movement in India focused on anti-corruption, equality, open governance, and global unity. Join us in building a better future for all.",
  keywords: "India, politics, inclusive, open source manifesto, anti-corruption, equality, progressive, democracy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
