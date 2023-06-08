import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bazaar",
  description: "Everything you need, In one store!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bgColor">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
