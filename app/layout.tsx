import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const seoKeywords = [
  "Computer Science and Engineering",
  "CSE",
  "LOR",
  "Letter of Recommendation",
  "SMIT",
  "Sikkim Manipal Institute of Technology",
];

export const metadata: Metadata = {
  title: "CSE SMIT",
  description: "Homepage for the department of CSE SMIT",
  keywords: seoKeywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
