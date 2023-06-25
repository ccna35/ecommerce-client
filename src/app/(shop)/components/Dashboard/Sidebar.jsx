import Link from "next/link";

export default function DashboardSidebar() {
  const sidebarItems = [
    {
      id: 1,
      text: "Overview",
      href: "/dashboard",
    },
    {
      id: 2,
      text: "Orders",
      href: "/dashboard/orders",
    },
    {
      id: 3,
      text: "Products",
      href: "/dashboard/products",
    },
    {
      id: 4,
      text: "Categories",
      href: "/dashboard/categories",
    },
    {
      id: 5,
      text: "Reviews",
      href: "/dashboard/reviews",
    },
    {
      id: 6,
      text: "Sellers",
      href: "/dashboard/sellers",
    },
  ];

  return (
    <div className="bg-white rounded-md shadow-sm flex flex-col gap-4 p-2">
      {sidebarItems.map((item) => {
        return (
          <Link
            href={item.href}
            className="px-4 py-2 rounded-sm hover:bg-slate-100 transition-colors duration-300 text-mainColor"
            key={item.id}
          >
            {item.text}
          </Link>
        );
      })}
    </div>
  );
}
