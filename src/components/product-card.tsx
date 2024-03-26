"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = () => {
  const router = useRouter();

  return (
    <Card
      className="w-full rounded-md overflow-hidden cursor-pointer"
      onClick={() => router.push(`/products/${1}`)}
    >
      <div className="aspect-[1/1] group overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/-41pNo82brDA/WtsthJZc6wI/AAAAAAAAdbM/5WVZUpTQ22AeR33L9aElg7cuGTcNgrkkwCHMYCw/s0/african-women-fashion-styles0031.jpg"
          alt=""
          width={500}
          height={500}
          className="transition-all group-hover:scale-110 w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg line-clamp-1">
          Boubou Style African
        </h2>

        <p className="line-clamp-1 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          voluptates porro, veniam praesentium possimus iure quia, facilis rem
          obcaecati eaque qui, neque quaerat soluta temporibus minima unde
          accusamus voluptatem vel.
        </p>

        <p className="font-semibold text-gray-800">5000 FCFA</p>
      </div>
    </Card>
  );
};

export default ProductCard;
