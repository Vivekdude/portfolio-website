import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.tagline,
  keywords: [
    "Full Stack Developer",
    ".NET Developer",
    "React Developer",
    "Azure",
    "Cloud Engineer",
    "Freelance Developer",
    "Web Application Developer",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
