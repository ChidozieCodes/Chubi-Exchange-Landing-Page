import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Adjust to the weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Chubi Crypto Merchant - Trade Crypto Instantly with Ease",
  description:
    "Buy and sell 100+ cryptocurrencies instantly with Chubi Crypto Merchant. Safe, secure, and available worldwide.",
  keywords: ["crypto", "bitcoin", "ethereum", "buy crypto", "sell crypto", "chubi"],
  openGraph: {
    title: "Chubi Crypto Merchant",
    description:
      "Trade crypto instantly with ease. Available worldwide. 100+ cryptocurrencies supported.",
    url: "https://yourdomain.com",
    siteName: "Chubi Crypto Merchant",
    images: [
      {
        url: "/images/hero/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chubi Crypto Merchant Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitter",
    title: "Chubi Crypto Merchant",
    description:
      "Trade crypto instantly with ease. Available worldwide. 100+ cryptocurrencies supported.",
    images: ["/images/hero/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
