import Image from "next/image";
import NewReview from "@/app/components/ProductPage/NewReview";
import Review from "@/app/components/ProductPage/Review";

const ProductPage = async ({ params }) => {
  async function getProductDetails() {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const productDetails = await getProductDetails();

  const productImages = [
    {
      id: 1,
      imageSrc: "/products/photo-1542291026-7eec264c27ff.avif",
    },
    {
      id: 2,
      imageSrc: "/products/photo-1587563871167-1ee9c731aefb.avif",
    },
    {
      id: 3,
      imageSrc: "/products/photo-1608231387042-66d1773070a5.avif",
    },
  ];

  return (
    <div className="container mx-auto grid place-items-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* <ProductGallery productImages={productImages} /> */}
        <div className="relative h-[20rem]">
          <Image
            src={productDetails.image}
            alt={productDetails.title}
            priority
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            fill
          />
        </div>
        <div className="text-mainColor flex flex-col items-start gap-8">
          <h2 className="text-3xl font-bold">{productDetails.title}</h2>
          <p>
            Brand: <b>Nike</b>
          </p>
          <p>{productDetails.description}</p>
          <div>
            <p className="text-chestnutRose text-2xl font-bold">
              ${productDetails.price}
            </p>
            <p className="text-green-600">In stock</p>
          </div>
          <button className="py-2 px-4 bg-chestnutRose text-white rounded-sm hover:bg-red-600 transition-colors duration-300">
            Add to cart
          </button>
          <p>
            Sold by: <b>Shoes Store</b>
          </p>
        </div>
      </div>
      <div className="my-8 w-full flex flex-col gap-4">
        <NewReview />
        <div className="flex flex-col gap-4">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
