import DashboardSidebar from "../components/Dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="container mx-auto py-8 grid grid-cols-4 gap-4">
      <div className="hidden lg:block col-span-1">
        <DashboardSidebar />
      </div>
      <main className="col-span-4 lg:col-span-3">{children}</main>
    </div>
  );
}
