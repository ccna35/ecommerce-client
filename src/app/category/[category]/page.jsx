import ProductCard from "@/app/components/ProductCard";

const CategoryPage = async ({ params }) => {
  async function getCategoryProducts() {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${params.category}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const products = await getCategoryProducts();

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
