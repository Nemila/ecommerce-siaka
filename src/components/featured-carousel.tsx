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
import producs from "@/lib/featured.json";
import Link from "next/link";

export function FeaturedCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {producs.map((item, index) => (
          <CarouselItem key={index}>
            <section
              className="flex h-[450px] w-full items-center justify-center gap-16 overflow-hidden rounded-lg px-4 py-8 text-center text-white md:text-left"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hidden aspect-[3/4] h-full overflow-hidden rounded-md md:flex">
                <Image
                  alt={item.title}
                  title={item.title}
                  src={item.poster}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="w-full space-y-4 md:w-1/2">
                <h1 className="text-2xl font-bold md:text-4xl">{item.title}</h1>
                <p className="text-sm md:text-lg">{item.description}</p>
                <Button variant="secondary" asChild>
                  <Link href={`/products/${item.id}`}>Voir Produit</Link>
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
}
