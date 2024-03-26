import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Boutique | Vetements Maliens Traditionels",
  description: "Les vetements maliens de meilleur qualite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background font-sans antialiased text-gray-800",
          fontSans.variable
        )}
      >
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
