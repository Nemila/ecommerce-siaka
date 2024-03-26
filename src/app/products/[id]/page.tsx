import ImageMagnifier from "@/components/image-magnifier";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductDetailPage = ({ params }: Props) => {
  return (
    <main className="flex-1">
      <div className="container space-y-8 p-4 md:p-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <ImageMagnifier
            className="aspect-square w-full overflow-hidden rounded-md md:w-1/3"
            imageUrl="https://images.unsplash.com/photo-1532332248682-206cc786359f?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="w-full space-y-6 md:w-2/3">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Nom du produit {params.id}</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                nostrum adipisci quasi, ratione ut amet porro tempora. Quidem
                minima quis laboriosam corrupti rem! Accusantium est maiores
                optio tempora, et dolore.
              </p>
            </div>

            <div className="pl-10 text-muted-foreground">
              <p className="list-item ">Prix: 2500 XOF</p>
              <p className="list-item">Tailles disponibles: XS, SM, M, L, XL</p>
              <p className="list-item">Categorie: Homme</p>
            </div>

            <div className="space-x-4">
              <Button>Acheter maintenant</Button>
              <Button variant={"outline"}>Ajouter au panier</Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Autres Produits</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
