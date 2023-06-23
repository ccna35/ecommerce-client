import Link from "next/link";

export default function DashboardSidebar() {
  const sidebarItems = [
    {
      id: 1,
      text: "Overview",
      href: "/admin",
    },
    {
      id: 2,
      text: "Orders",
      href: "/admin/orders",
    },
    {
      id: 3,
      text: "Products",
      href: "/admin/products",
    },
    {
      id: 4,
      text: "Categories",
      href: "/admin/categories",
    },
    {
      id: 5,
      text: "Reviews",
      href: "/admin/reviews",
    },
    {
      id: 6,
      text: "Sellers",
      href: "/admin/sellers",
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
