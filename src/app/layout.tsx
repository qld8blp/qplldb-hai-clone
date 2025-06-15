/**
 * Root Layout - HAI Website Clone
 * 
 * This layout file sets up the basic structure for the entire website
 * Features:
 * - Clean typography matching HAI's design
 * - Consistent header and footer across all pages
 * - SEO metadata matching HAI's brand
 * - Responsive design foundation
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAI Inc. - Thermal Spray Coatings & Equipment | Make it Better, Coat it™",
  description: "Leading materials engineering solutions provider for the thermal spraying industry. Thermal spray powders, wires, equipment, and spare parts since 1979.",
  keywords: "thermal spray, coating, thermal spray powder, thermal spray wire, equipment, aerospace, automotive, biomedical",
  authors: [{ name: "HAI Inc." }],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qplldb.com",
    siteName: "HAI Inc.",
    title: "HAI Inc. - Thermal Spray Coatings & Equipment",
    description: "Leading materials engineering solutions provider for the thermal spraying industry.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAI Inc. - Thermal Spray Coatings & Equipment",
    description: "Leading materials engineering solutions provider for the thermal spraying industry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Header component - consistent across all pages */}
        <Header />
        
        {/* Main content area - grows to fill available space */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer component - consistent across all pages */}
        <Footer />
      </body>
    </html>
  );
}
