import DashboardSidebar from "../components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const sidebarItems = [
    {
      id: 1,
      text: "Overview",
      href: "/dashboard",
    },
    {
      id: 2,
      text: "Products",
      href: "/dashboard/products",
    },
    {
      id: 3,
      text: "Categories",
      href: "/dashboard/categories",
    },
    {
      id: 4,
      text: "Brands",
      href: "/dashboard/brands",
    },
    {
      id: 5,
      text: "Orders",
      href: "/dashboard/orders",
    },
    {
      id: 6,
      text: "Reviews",
      href: "/dashboard/reviews",
    },
    {
      id: 7,
      text: "Users",
      href: "/dashboard/users",
    },
    {
      id: 8,
      text: "Sellers",
      href: "/dashboard/sellers",
    },
  ];

  return (
    <div className="container mx-auto py-8 grid grid-cols-4 gap-4">
      <div className="hidden lg:block col-span-1">
        <DashboardSidebar sidebarItems={sidebarItems} mainTab="/dashboard" />
      </div>
      <main className="col-span-4 lg:col-span-3">{children}</main>
    </div>
  );
}
