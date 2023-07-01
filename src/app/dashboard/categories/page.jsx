import CategoryList from "@/app/components/Dashboard/CategoryList";
import Link from "next/link";
import { Suspense } from "react";

const Categories = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Categories</h2>
        <Link href="/dashboard/categories/new">
          <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
            New
          </button>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
    </div>
  );
};

export default Categories;
