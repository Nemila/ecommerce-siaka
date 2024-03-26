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
              className="w-full h-[400px] rounded-lg overflow-hidden justify-center flex gap-16 items-center px-4 py-8 text-white"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1493655430214-3dd7718460bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="h-full aspect-[3/4] rounded-md overflow-hidden">
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1556940114-7e0900e48a86?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="w-1/2 space-y-4">
                <h1 className="text-4xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h1>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita magni temporibus repellat perspiciatis qui sed ill.
                </p>

                <Button variant={"secondary"}>Voir Produit</Button>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
