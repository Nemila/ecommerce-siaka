import ImageMagnifier from "@/components/image-magnifier";
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
  const details = products.find((item) => item.id === id);

  return (
    <main className="flex-1">
      <div className="container space-y-8 p-4 md:p-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <ImageMagnifier
            className="aspect-square w-full overflow-hidden rounded-md md:w-1/3"
            imageUrl={details?.poster ?? ""}
          />

          <div className="w-full space-y-6 md:w-2/3">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">{details?.title}</h2>
              <p>{details?.description}</p>
            </div>

            <div className="pl-10 text-muted-foreground">
              {details?.tags.map((item) => (
                <p key={item} className="list-item">
                  {item}
                </p>
              ))}
            </div>

            <div className="space-x-4">
              <Button>Acheter maintenant</Button>
              <Button variant={"outline"}>Ajouter au panier</Button>
            </div>
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
            {details?.images.map((item, index) => (
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

                {/* <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Autres Produits</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {products.slice(0, 6).map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
