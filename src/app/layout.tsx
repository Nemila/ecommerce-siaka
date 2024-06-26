import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";

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
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "flex min-h-screen flex-col bg-background font-sans text-gray-800 antialiased",
            fontSans.variable,
          )}
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
