import Card from "../components/Card";

const AdminDashboard = () => {
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
    <div className="grid grid-cols-2 gap-4">
      <Card cardTitle="Orders" stats="32,350" />
      <Card cardTitle="Products" stats="150" />
      <Card cardTitle="Merchants" stats="45" />
      <Card cardTitle="Reviews" stats="50" />
    </div>
  );
};

export default AdminDashboard;
