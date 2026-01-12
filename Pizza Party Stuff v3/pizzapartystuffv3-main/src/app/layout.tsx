import type { Metadata } from "next";
import { Geist, Geist_Mono, Asap_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const asapCondensed = Asap_Condensed({
  variable: "--font-asap-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pizza Party Stuff - Essential Pizza Party Supplies",
  description: "Everything you need for the perfect pizza party. Browse our curated list of essential supplies with ratings, costs, and helpful notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${asapCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
