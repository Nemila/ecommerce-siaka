import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const CartCard = (props: Props) => {
  return (
    <div className="border flex gap-4 justify-between items-center p-4 rounded-md">
      <div className="aspect-square w-16 overflow-hidden rounded-lg">
        <Image
          alt=""
          width={500}
          height={500}
          src="https://www.dhresource.com/0x0s/f2-albu-g5-M01-19-27-rBVaJFm6OQCAToaZAALWYtd8iPY208.jpg/africa-t-shirt-african-map-black-history.jpg"
          className="w-full object-cover h-full"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-sm line-clamp-1 ">
          T-Shirt Afrique Rasta
        </h3>

        <p className="text-sm">5000 FCFA</p>
      </div>

      <Button size="icon" variant="ghost">
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default CartCard;
