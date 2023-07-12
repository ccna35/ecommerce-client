import DashboardSidebar from "../components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const sidebarItems = [
    {
      id: 1,
      text: "Account Details",
      href: "/profile",
    },
    {
      id: 2,
      text: "Orders",
      href: "/profile/orders",
    },
    {
      id: 3,
      text: "Wishlist",
      href: "/profile/wishlist",
    },
  ];

  return (
    <div className="container mx-auto py-8 grid grid-cols-4 gap-4">
      <div className="hidden lg:block col-span-1">
        <DashboardSidebar sidebarItems={sidebarItems} mainTab="/profile" />
      </div>
      <main className="col-span-4 lg:col-span-3">{children}</main>
    </div>
  );
}
