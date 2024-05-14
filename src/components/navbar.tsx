"use client";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
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

          <SignedIn>
            <SignOutButton>Se deconnecter</SignOutButton>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignUpButton>S&apos;inscrire</SignUpButton>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
