import Image from "next/image";

const CategorySmallCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center cursor-pointer transition-shadow duration-300 hover:shadow-lg">
      <div className="h-12 w-12 relative">
        <Image
          src={"/categories/7.webp"}
          fill={true}
          alt="carousel item"
          className="object-cover"
        />
      </div>
      <p>Auomobile</p>
    </div>
  );
};

export default CategorySmallCard;
