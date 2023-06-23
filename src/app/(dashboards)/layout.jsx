import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar";
import DashboardSidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description:
    "In this dashboard, the super admin can see the stats of this application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bgColor">
        <Navbar />
        <div className="container mx-auto py-8 grid grid-cols-4 gap-4">
          <div className="hidden lg:block col-span-1">
            <DashboardSidebar />
          </div>
          <main className="col-span-4 lg:col-span-3">{children}</main>
        </div>
      </body>
    </html>
  );
}
