"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Cross, ShoppingBag, ShoppingCart, X } from "lucide-react";
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
    <header className="p-4 border-b">
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-gray-800">
          Boutique
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground transition-all hover:text-gray-800",
                  pathname === item.href && "text-gray-900"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon">
              <ShoppingCart className="w-4 h-4" />
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
      </div>
    </header>
  );
};

export default Navbar;
