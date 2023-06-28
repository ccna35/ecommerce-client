import Image from "next/image";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";

async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductList() {
  const products = await getAllProducts();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {products.map((product) => (
        <li
          key={product.id}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="relative h-12 w-12">
              <Image
                className="flex-none rounded-full bg-gray-50"
                src={product.image}
                alt={product.title}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                fill
              />
            </div>
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {product.title}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
              <AiFillEdit />
            </button>
            <button className="px-2 py-1 rounded-sm bg-blue-700 text-white">
              <HiArrowUpRight />
            </button>
            <button className="px-2 py-1 rounded-sm bg-red-700 text-white">
              <AiFillDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
