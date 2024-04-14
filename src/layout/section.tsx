import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/queries";

type Props = {
  data: Category;
};

const Section = ({ data }: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="line-clamp-1 text-lg font-semibold md:text-2xl">
            {data.title}
          </h2>
          <p className="line-clamp-2 text-sm md:text-base">
            {data.description}
          </p>
        </div>

        <Button variant="outline">Voir Product</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {data.products.edges.map((item) => (
          <ProductCard key={item.node.handle} data={item.node} />
        ))}
      </div>
    </section>
  );
};

export default Section;
