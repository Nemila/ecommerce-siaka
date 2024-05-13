import { OrderModal } from "@/components/order-modal";
import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  queryProductDetails,
  QueryProductDetails,
  queryProducts,
  QueryProducts,
} from "@/lib/queries";
import shopify from "@/lib/shopify";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

const ProductDetailPage = async ({ params }: Props) => {
  const { data: related } = await shopify.request<QueryProducts>(
    queryProducts,
    {
      variables: {
        productsCount: 15,
      },
    },
  );

  const { data } = await shopify.request<QueryProductDetails>(
    queryProductDetails,
    {
      variables: {
        productHandle: params.id,
      },
    },
  );

  return (
    <main className="flex-1">
      <div className="container space-y-8 p-4 md:p-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="aspect-[3/4] overflow-hidden rounded-md md:w-1/3">
            <Image
              width={500}
              height={500}
              className="w-full overflow-hidden object-cover object-center "
              alt={data?.productByHandle.featuredImage.altText || ""}
              src={data?.productByHandle.featuredImage.url || ""}
            />
          </div>

          <div className="w-full space-y-6 md:w-2/3">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                {data?.productByHandle.title} {params.id}
              </h2>

              <div className="flex flex-wrap gap-2">
                {data?.productByHandle.tags.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>

              <p>{data?.productByHandle.description}</p>
            </div>

            <p className="text-4xl font-bold">
              {data?.productByHandle.priceRange.maxVariantPrice.amount}{" "}
              {data?.productByHandle.priceRange.maxVariantPrice.currencyCode}
            </p>

            {data && (
              <div className="space-x-4">
                <OrderModal product={data} />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Autres Produits</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related?.products.edges.map((item) => (
              <ProductCard key={item.node.handle} data={item.node} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
