import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optical Lift",
  description: "Optical Lift is an independent family company building Atlas and making stationery, paper goods, and other useful things.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
