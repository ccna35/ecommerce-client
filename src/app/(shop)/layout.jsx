import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "./components/Navbar/Navbar";
import Announcement from "./components/Navbar/Announcement";
import FooterComponent from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazaar",
  description: "Everything you need, In one store!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bgColor">
        <Announcement />
        <Navbar />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
