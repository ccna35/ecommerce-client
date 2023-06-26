"use client";

import { Rating } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import ProductQuickView from "./ProductPage/ProductQuickView";
import Link from "next/link";

const ProductCard = () => {
  const [openQuickView, setOpenQuickView] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm relative transition-shadow duration-300 hover:shadow-lg">
      <span className="absolute z-10 top-2 left-2 py-2 px-4 bg-chestnutRose text-white text-xs rounded-full">
        25% off
      </span>
      <div className="relative h-60 group">
        <Link href="/product/sdsd">
          <Image
            src={"/carousel/flash-3.webp"}
            fill={true}
            alt="carousel item"
            className="object-contain"
          />
        </Link>
        <button
          className="absolute px-4 py-2 bg-gray-400 bg-opacity-30 rounded-md left-4 bottom-4 text-sm text-gray-600 hidden group-hover:block"
          onClick={() => setOpenQuickView(true)}
        >
          Quick View
        </button>
        <ProductQuickView
          openQuickView={openQuickView}
          setOpenQuickView={setOpenQuickView}
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
