import CategoryList from "@/app/components/Dashboard/CategoryList";
import { Suspense } from "react";

const Categories = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Categories</h2>
        <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
          New Category
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
    </div>
  );
};

export default Categories;
