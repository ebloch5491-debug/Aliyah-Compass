import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aliyah Compass | Aliyah Guidance for Families",
  description:
    "Warm, practical aliyah guidance for individuals and families planning their move to Israel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
