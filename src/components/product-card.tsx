"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/queries";

type Props = {
  data: Product;
};

const ProductCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Card
      className="w-full cursor-pointer overflow-hidden rounded-md"
      onClick={() => router.push(`/products/${data.handle}`)}
    >
      <div className="group aspect-[1/1] overflow-hidden">
        <Image
          src={data?.featuredImage.url}
          alt={data?.featuredImage.altText || ""}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-all group-hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h2 className="line-clamp-1 text-lg font-semibold">{data.title}</h2>

        <p className="line-clamp-1 text-sm">{data.description}</p>

        <p className="font-semibold text-gray-800">
          {data.priceRange.maxVariantPrice.amount}{" "}
          <span>{data.priceRange.maxVariantPrice.currencyCode}</span>
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
