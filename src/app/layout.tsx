import type { Metadata } from "next";
import { Inter, Caveat, Patrick_Hand } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-handalt",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Durgesh Khire — Creative UI/UX Designer Portfolio",
  description:
    "I design top notch websites. A creative portfolio of a UI/UX designer specializing in no-code development, product design, and user research.",
  keywords: [
    "UI/UX Designer",
    "Portfolio",
    "Web Design",
    "No-Code",
    "Figma",
    "Webflow",
    "Creative",
  ],
  openGraph: {
    title: "Durgesh Khire — Creative UI/UX Designer Portfolio",
    description: "I design top notch websites.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
