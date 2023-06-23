import Card from "../components/Card";

const Overview = () => {
  const cards = [
    {
      id: 1,
      cardTitle: "Orders",
      stats: 3434,
    },
    {
      id: 2,
      cardTitle: "Products",
      stats: 2231,
    },
    {
      id: 3,
      cardTitle: "Sellers",
      stats: 223,
    },
    {
      id: 4,
      cardTitle: "Reviews",
      stats: 979,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => {
        return (
          <Card cardTitle={card.cardTitle} stats={card.stats} key={card.id} />
        );
      })}
    </div>
  );
};

export default Overview;
