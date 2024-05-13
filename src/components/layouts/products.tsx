import React from "react";
import ProductCard from "../product-card";
import { Button } from "../ui/button";
import Link from "next/link";
import products from "@/lib/products.json";

type Props = {
  title: string;
  description?: string;
  category: string;
};

const Products = ({ title, description, category }: Props) => {
  const data = products.filter((item) => item.categories.includes(category));

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold md:text-2xl">
            {title}
          </h2>
          <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        </div>

        <Button variant="outline">
          <Link href="/">Voir plus</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {data.slice(0, 5).map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
