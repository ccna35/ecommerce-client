import Image from "next/image";
import DefaultCarousel from "./components/Carousel";
import ProductCard from "./components/ProductCard";
import { IoIosFlash } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import CategoryCard from "./components/Category/CategoryCard";
import CategorySmallCard from "./components/Category/CategorySmallCard";
import Feature from "./components/Features/Feature";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      imageSrc: "/carousel/nike-black.png",
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      imageSrc: "/carousel/flash-4.webp",
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      imageSrc: "/carousel/32.webp",
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      imageSrc: "/carousel/9.webp",
    },
    {
      id: 5,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      buttonText: "Shop Now",
      imageSrc: "/carousel/flash-3.webp",
    },
  ];

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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
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
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
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
