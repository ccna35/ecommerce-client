"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardSidebar() {
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

  const [activeTab, setActiveTab] = useState("/dashboard");

  return (
    <div className="bg-white rounded-md shadow-sm flex flex-col gap-4 p-2">
      {sidebarItems.map((item) => {
        return (
          <Link
            href={item.href}
            className={`${
              activeTab === item.href && "bg-yellow-500 text-white"
            } px-4 py-2 rounded-sm text-mainColor`}
            key={item.id}
            onClick={() => setActiveTab(item.href)}
          >
            {item.text}
          </Link>
        );
      })}
    </div>
  );
}
