import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WhatsappButton } from "../components/WhatsappButton/WhatsappButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Joel Toulan",
  description: "Portfolio personnel de Joel Toulan — développeur web et créateur de contenu sur les réseaux sociaux.",
  openGraph: {
    title: "Portfolio Joel Toulan",
    description: "Portfolio personnel de Joel Toulan — développeur web et créateur de contenu sur les réseaux sociaux.",
    url: "https://joel-toulan.com",
    siteName: "Joel Toulan",
    images: [
      {
        url: "/joel-toulan.png",
        width: 1200,
        height: 630,
        alt: "Joel Toulan",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/joel-toulan.png",
  },
  keywords: ["Joel Toulan", "portfolio", "développeur web", "contenu", "freelance"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}
        <WhatsappButton />
      </body>
    </html>
  );
}
