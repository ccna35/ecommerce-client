"use client";

import Link from "next/link";
import { useState } from "react";

export default function DashboardSidebar({ sidebarItems, mainTab }) {
  const [activeTab, setActiveTab] = useState(mainTab);

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
