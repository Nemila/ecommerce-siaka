import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="container flex flex-1 items-center justify-center p-4 md:p-8">
      <div className="flex max-w-xl flex-col items-center justify-center gap-6 rounded-md border px-8 py-16 text-center shadow-sm">
        <Heart className="h-24 w-24 animate-bounce" fill="red" />

        <h2 className="text-2xl font-bold">Merci d&apos;avoir commander!</h2>
        <p className="text-muted-foreground">
          Commande confirmée ! Un e-mail de confirmation vous a été envoyé. Nous
          vous contacterons pour les détails de livraison. Merci et bonne
          journée!
        </p>

        <div className="flex gap-4">
          <Button variant={"outline"} asChild>
            <Link href="/">Retour a l&apos;accueil</Link>
          </Button>

          <Button asChild>
            <Link href="/products">Plus De Produits</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;
