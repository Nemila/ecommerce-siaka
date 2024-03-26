"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type Props = {
  imageUrl: string;
  className: string;
};

const ImageMagnifier = ({ imageUrl, className }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setPosition({ x, y });
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div
      className={cn("overflow-hidden rounded-md", className)}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        alt=""
        src={imageUrl}
        width={500}
        height={500}
        className="h-full w-full object-cover object-center"
      />

      {showMagnifier && (
        <div
          className={cn(`pointer-events-none absolute h-40 w-40 rounded-lg`)}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${position.x}% ${position.y}%`,
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default ImageMagnifier;
