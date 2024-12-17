import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  variable: "--font-open",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BasketStats",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
