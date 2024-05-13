"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Cross, Menu, ShoppingBag, ShoppingCart, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import CartCard from "./cart-card";

const navLinks = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/products",
    label: "Produits",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex h-16 items-center justify-center border-b">
      <div className="container flex items-center justify-between p-4 md:px-8 md:py-4">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Boutique
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground transition-all hover:text-gray-800",
                  pathname === item.href && "text-gray-900",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Panier</SheetTitle>
                <SheetDescription>
                  Vous pouvez ajoutez des produits a votre panier pour les
                  retrouver facilement plus tard et tout acheter en meme temps.
                </SheetDescription>
              </SheetHeader>

              <div className="mt-4 flex flex-col gap-4">
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />

                <p>Total: 20.000 FCFA</p>

                <Button>Commander</Button>
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="flex md:hidden"
                variant={"outline"}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-4 flex flex-col gap-2">
                {navLinks.map((item) => (
                  <Button
                    key={item.href}
                    variant={"ghost"}
                    className={cn(pathname === item.href && "bg-muted")}
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
