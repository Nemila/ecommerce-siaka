"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  item: {
    id: number;
    price: number;
    poster: string;
    title: string;
    description: string;
    tags: string[];
    images: string[];
    categories: string[];
  };
};

const ProductCard = ({ item }: Props) => {
  const router = useRouter();

  return (
    <Card
      className="w-full cursor-pointer overflow-hidden rounded-md"
      onClick={() => router.push(`/products/${item.id}`)}
    >
      <div className="group aspect-[1/1] overflow-hidden">
        <Image
          src={item.poster}
          alt={item.title}
          title={item.title}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-semibold">{item.title}</h2>
        <p className="line-clamp-1 text-sm">{item.description}</p>
        <p className="font-semibold text-gray-800">{item.price} FCFA</p>
      </div>
    </Card>
  );
};

export default ProductCard;
