const UserDashboard = () => {
  const leftSideTabs = [
    {
      id: 1,
      title: "Overview",
    },
    {
      id: 2,
      title: "Account",
    },
    {
      id: 3,
      title: "Account Security",
    },
    {
      id: 4,
      title: "Address",
    },
    {
      id: 5,
      title: "Products",
    },
    {
      id: 6,
      title: "Categories",
    },
    {
      id: 7,
      title: "Brands",
    },
    {
      id: 8,
      title: "Users",
    },
    {
      id: 9,
      title: "Merchants",
    },
    {
      id: 10,
      title: "Orders",
    },
    {
      id: 11,
      title: "Reviews",
    },
    {
      id: 12,
      title: "Wishlist",
    },
  ];

  return (
    <div className="container mx-auto grid place-items-center py-16">
      <h1 className="text-3xl text-mainColor">User Dashboard</h1>
    </div>
  );
};

export default UserDashboard;
