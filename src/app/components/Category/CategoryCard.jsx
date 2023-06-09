import Image from "next/image";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg relative overflow-hidden">
      <span className="absolute z-10 top-2 left-2 py-2 px-4 bg-mainColor text-white text-xs rounded-full">
        {category}
      </span>
      <div className="relative h-40">
        <Image
          src={"/categories/category-1.webp"}
          fill={true}
          alt="carousel item"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
