import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

type Props = {};

const ProduitPage = (props: Props) => {
  return (
    <main className="container flex flex-1 p-4 md:p-8">
      <section className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <Input className="w-full" placeholder="Recherche" />

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Par prix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Ordre Croissant</SelectItem>
              <SelectItem value="dark">Ordre Decroissant</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Par taille" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Moyen</SelectItem>
              <SelectItem value="dark">Large</SelectItem>
              <SelectItem value="system">Extra Large</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Categorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Homme</SelectItem>
              <SelectItem value="dark">Femme</SelectItem>
            </SelectContent>
          </Select>

          <Button>Rechercher</Button>
        </div>

        <div>
          <h2 className="text-lg font-semibold md:text-2xl">
            Liste des produits
          </h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
};

export default ProduitPage;
