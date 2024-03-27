"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  featuredProducts: {
    id: number;
    title: string;
    description: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    slug: string;
    thumbnail: any;
    banner: any;
  }[];
};

const FeaturedCarousel = ({ featuredProducts }: Props) => {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {featuredProducts.map((product, index) => (
          <CarouselItem key={index}>
            <section
              className="flex h-[400px] w-full items-center justify-center gap-16 overflow-hidden rounded-lg px-4 py-8 text-center text-white md:text-left"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://ecommerce-backend-rmiy.onrender.com${product.banner.data.attributes.url}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hidden aspect-[3/4] h-full overflow-hidden rounded-md md:flex">
                <Image
                  alt=""
                  src={`https://ecommerce-backend-rmiy.onrender.com${product.thumbnail.data.attributes.url}`}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="w-full space-y-4 md:w-1/2">
                <h1 className="text-2xl font-bold md:text-4xl">
                  {product.title}
                </h1>
                <p className="line-clamp-2 text-sm md:text-lg">
                  {product.description}
                </p>

                <Button variant={"secondary"} asChild>
                  <Link href={`/products/${product.id}`}>Voir Produit</Link>
                </Button>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default FeaturedCarousel;
