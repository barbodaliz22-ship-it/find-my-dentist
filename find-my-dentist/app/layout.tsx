import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find My Dentist | Luxury Dental Care in Austin, TX",
  description:
    "A confident smile starts here. Find My Dentist is Austin's premium dental studio for cosmetic dentistry, implants, whitening, and Invisalign at 600 Congress Ave.",
  keywords: [
    "Austin dentist",
    "cosmetic dentistry Austin",
    "dental implants Austin",
    "Invisalign Austin",
    "luxury dental clinic",
  ],
  openGraph: {
    title: "Find My Dentist | Luxury Dental Care in Austin, TX",
    description: "A confident smile starts here.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
