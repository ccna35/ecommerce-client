import CategorySidebar from "@/app/components/Category/Sidebar";

export default function CategoryLayout({ children }) {
  return (
    <main className="mt-16">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <CategorySidebar />
        <div className="col-span-4 md:col-span-3">{children}</div>
      </div>
    </main>
  );
}
