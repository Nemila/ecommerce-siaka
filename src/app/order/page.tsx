"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const OrderPage = ({ searchParams }: Props) => {
  const productId = searchParams.productId;

  const orderProduct = async (e: any) => {
    e.preventDefault();

    await axios.post(process.env.NEXT_PUBLIC_URL!, {
      productId,
    });
  };

  return (
    <main className="flex-1">
      <div className="container flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <form action={orderProduct} className="flex flex-col gap-4">
            <p>OrderPage #{productId}</p>

            <Label className="space-y-1">
              <span>Address</span>
              <Input placeholder="Address" />
            </Label>

            <Button>Commander</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default OrderPage;
