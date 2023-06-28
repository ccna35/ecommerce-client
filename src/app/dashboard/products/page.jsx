import ProductList from "@/app/components/Dashboard/ProductList";
import { Suspense } from "react";

const ProductsPage = () => {
  return (
    <div className="bg-white rounded-md p-4 shadow-sm">
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-medium text-mainColor">Products</h2>
        <button className="px-2 py-1 rounded-sm bg-green-700 text-white">
          New Product
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
