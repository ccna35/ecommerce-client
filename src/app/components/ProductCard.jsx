"use client";

import { Rating } from "flowbite-react";
import Image from "next/image";
import { AiFillPlusSquare } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm relative transition-shadow duration-300 hover:shadow-lg">
      <span className="absolute z-10 top-2 left-2 py-2 px-4 bg-chestnutRose text-white text-xs rounded-full">
        25% off
      </span>
      <div className="relative h-60">
        <Image
          src={"/carousel/flash-3.webp"}
          fill={true}
          alt="carousel item"
          className="object-contain"
        />
      </div>
      <div className="p-2 flex flex-col gap-4">
        <p>NikeCourt Zoom Vapor Cage</p>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
        </Rating>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <p className="text-chestnutRose">$187.5</p>
            <p className="text-gray-600 line-through">$200</p>
          </div>
          <AiFillPlusSquare className="text-chestnutRose" size={30} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
