import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/portfolio-data";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vivekshukla.dev"),
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.name} — Senior Consultant & Full-Stack Cloud Engineer with 9+ years building enterprise applications on .NET, Azure, React, and Angular. Available for freelance and consulting.`,
  keywords: [
    "Full Stack Developer",
    ".NET Developer",
    "React Developer",
    "Azure Cloud Engineer",
    "Senior Consultant",
    "Freelance Developer",
    "Web Application Developer",
    "Microservices",
    "Azure Functions",
    "Enterprise Applications",
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `Senior Consultant & Full-Stack Cloud Engineer with 9+ years building enterprise applications on .NET, Azure, React, and Angular.`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `Senior Consultant & Full-Stack Cloud Engineer with 9+ years building enterprise applications on .NET, Azure, React, and Angular.`,
    images: ["/og-image.png"],
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
