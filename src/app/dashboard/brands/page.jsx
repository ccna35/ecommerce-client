import BrandList from "@/app/components/Dashboard/BrandList";
import CategoryList from "@/app/components/Dashboard/CategoryList";
import { Suspense } from "react";

const Brands = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Brands</h2>
        <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
          New Brand
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandList />
      </Suspense>
    </div>
  );
};

export default Brands;
