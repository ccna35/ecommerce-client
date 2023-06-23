const Card = ({ cardTitle, stats }) => {
  return (
    <div className="rounded-md shadow-sm p-4 flex flex-col gap-4 bg-white hover:bg-slate-100 transition-colors duration-300 cursor-pointer">
      <p className="text-gray-500 transition-colors duration-300">
        {cardTitle}
      </p>
      <p className="transition-colors duration-300 text-3xl text-mainColor font-semibold">
        {stats}
      </p>
    </div>
  );
};

export default Card;
