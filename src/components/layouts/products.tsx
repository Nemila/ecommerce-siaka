import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import products from "@/lib/products.json";
import Link from "next/link";

type Props = {
  title: string;
  description?: string;
  category: string;
};

const Products = ({ title, description, category }: Props) => {
  const data = products.filter((item) => item.categories.includes(category));

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold md:text-2xl">
            {title}
          </h2>

          <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        </div>

        <Button variant="outline">
          <Link href="/products">Voir plus</Link>
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
