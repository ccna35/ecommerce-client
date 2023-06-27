import Image from "next/image";
import DefaultCarousel from "./components/Carousel";
import ProductCard from "./components/ProductCard";
import { IoIosFlash } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import CategoryCard from "./components/Category/CategoryCard";
import CategorySmallCard from "./components/Category/CategorySmallCard";
import Feature from "./components/Features/Feature";
import Link from "next/link";

async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getAllCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // const products = [
  //   {
  //     id: 1,
  //     title: "50% Off For Your First Shopping",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     buttonText: "Shop Now",
  //     imageSrc: "/carousel/nike-black.png",
  //   },
  //   {
  //     id: 2,
  //     title: "50% Off For Your First Shopping",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     buttonText: "Shop Now",
  //     imageSrc: "/carousel/flash-4.webp",
  //   },
  //   {
  //     id: 3,
  //     title: "50% Off For Your First Shopping",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     buttonText: "Shop Now",
  //     imageSrc: "/carousel/32.webp",
  //   },
  //   {
  //     id: 4,
  //     title: "50% Off For Your First Shopping",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     buttonText: "Shop Now",
  //     imageSrc: "/carousel/9.webp",
  //   },
  //   {
  //     id: 5,
  //     title: "50% Off For Your First Shopping",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     buttonText: "Shop Now",
  //     imageSrc: "/carousel/flash-3.webp",
  //   },
  // ];

  // const categories = [
  //   {
  //     id: 1,
  //     name: "Bags",
  //     href: "bags",
  //   },
  //   {
  //     id: 2,
  //     name: "Phones",
  //     href: "phones",
  //   },
  //   {
  //     id: 3,
  //     name: "Laptops",
  //     href: "laptops",
  //   },
  // ];

  return (
    <main>
      <section className="bg-white">
        <div className="container mx-auto">
          <DefaultCarousel />
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto">
          <div className="flex gap-2 my-8">
            <IoIosFlash className="text-chestnutRose" size={30} />
            <h2 className="text-2xl font-semibold text-mainColor">
              Flash Deals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto">
          <div className="flex gap-2 my-8">
            <BiCategory className="text-chestnutRose" size={30} />
            <h2 className="text-2xl font-semibold text-mainColor">
              Top Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              return (
                <Link href={"/category/" + category} key={category}>
                  <CategoryCard category={category} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto">
          <div className="flex gap-2 my-8">
            <BiCategory className="text-chestnutRose" size={30} />
            <h2 className="text-2xl font-semibold text-mainColor">
              Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
            <CategorySmallCard />
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </div>
      </section>
    </main>
  );
}
