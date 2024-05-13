import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-background font-sans text-gray-800 antialiased",
      )}
    >
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
