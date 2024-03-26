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

export function FeaturedCarousel() {
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
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <section
              className="flex h-[400px] w-full items-center justify-center gap-16 overflow-hidden rounded-lg px-4 py-8 text-center text-white md:text-left"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1493655430214-3dd7718460bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hidden aspect-[3/4] h-full overflow-hidden rounded-md md:flex">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1556940114-7e0900e48a86?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="w-full space-y-4 md:w-1/2">
                <h1 className="text-2xl font-bold md:text-4xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h1>
                <p className="text-sm md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita magni temporibus repellat perspiciatis qui sed ill.
                </p>

                <Button variant={"secondary"}>Voir Produit</Button>
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
