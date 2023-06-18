import { Inter } from "next/font/google";
import "../globals.css";

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
        <div>Dashboard Navbar</div>
        {children}
        <footer>
          <div>Dashboard Footer</div>
        </footer>
      </body>
    </html>
  );
}
