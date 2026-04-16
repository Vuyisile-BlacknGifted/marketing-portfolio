import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vuyisile Phika | Growth Marketer Portfolio",
  description:
    "Portfolio for Vuyisile Phika, Growth Marketer and Content Lead focused on measurable social and campaign impact."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
