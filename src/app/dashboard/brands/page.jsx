import BrandList from "@/app/components/Dashboard/BrandList";
import Link from "next/link";
import { Suspense } from "react";

const Brands = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Brands</h2>
        <Link href="/dashboard/brands/new">
          <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
            New
          </button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandList />
      </Suspense>
    </div>
  );
};

export default Brands;
