import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/app/components/SplashScreen";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#2B2926",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Arkylite Design + Build | Architecture, Engineering & Construction",
    template: "%s | Arkylite Design + Build",
  },
  description:
    "Architecture, engineering consultancy, and construction services in Plaridel, Philippines. Work with licensed design-and-build professionals from concept to completion.",
  applicationName: "Arkylite Design + Build",
  keywords: [
    "architectural design Plaridel",
    "engineering consultancy Plaridel",
    "construction services Plaridel",
    "design and build Philippines",
    "architectural firm Philippines",
  ],
  authors: [{ name: "Arkylite Design + Build" }],
  creator: "Arkylite Design + Build",
  publisher: "Arkylite Design + Build",
  category: "Architecture and construction",
  verification: {
    google: "R7sQnH_vDJrMAU_vh8sKYLeGzdFf7enJZqIcn6qtM0E",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Arkylite Design + Build",
    title: "Arkylite Design + Build | Architecture, Engineering & Construction",
    description:
      "Licensed design-and-build professionals delivering architectural, engineering, and construction services in Plaridel, Philippines.",
  },
  twitter: {
    card: "summary",
    title: "Arkylite Design + Build | Architecture, Engineering & Construction",
    description:
      "Licensed design-and-build professionals in Plaridel, Philippines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
