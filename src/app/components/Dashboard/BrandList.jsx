async function getAllBrands() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function BrandList() {
  const brands = await getAllBrands();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {brands.map((brand) => (
        <li
          key={brand}
          className="flex justify-between items-center gap-6 py-5 flex-wrap"
        >
          <div className="flex gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="max-w-sm truncate text-sm font-semibold leading-6 text-gray-900">
                {brand}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
