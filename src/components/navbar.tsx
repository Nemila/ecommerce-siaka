"use client";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

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
    <header className="flex items-center justify-center border-b">
      <div className="container flex items-center justify-between p-4">
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

        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <Button size={"icon"}>
              <Menu />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {navLinks.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}

            <SignedOut>
              <SignInButton>
                <DropdownMenuItem>Se connecter</DropdownMenuItem>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <DropdownMenuItem>Se Deconnecter</DropdownMenuItem>
              </SignOutButton>
            </SignedIn>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
