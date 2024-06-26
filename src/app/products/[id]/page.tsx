import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import products from "@/lib/products.json";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const ProductDetailPage = ({ params }: Props) => {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();
  const product = products.find((item) => item.id === id);
  if (!product) notFound();

  return (
    <div className="container flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <Image
          alt=""
          width={500}
          height={500}
          src={product.poster}
          className="aspect-[3/4] w-full overflow-hidden rounded-md object-cover md:w-1/3"
        />

        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-2 md:w-2/3">
            <h2 className="text-4xl font-bold">{product.title}</h2>
            <h2 className="text-2xl font-medium">{product.price} FCFA</h2>
            <p>{product.description}</p>
          </div>

          <div className="pl-10 text-muted-foreground">
            {product.tags.map((item) => (
              <p key={item} className="list-item">
                {item}
              </p>
            ))}
          </div>

          <form action={"/api/send"}>
            <input
              type="hidden"
              contentEditable={false}
              required
              value={product.id}
              name="productId"
            />
            <Button type="submit">Acheter maintenant</Button>
          </form>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {product?.images.map((item, index) => (
            <CarouselItem
              key={index}
              className="aspect-video md:basis-1/2 lg:basis-1/4"
            >
              <Image
                src={item}
                alt=""
                width={500}
                height={500}
                className="h-full w-full overflow-hidden rounded-md object-cover object-center"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Autres Produits</h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 6)
            .map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
