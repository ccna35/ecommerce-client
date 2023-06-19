"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function DashboardSidebar() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiShoppingBag} label="Products">
            <Sidebar.Item href="#">Product List</Sidebar.Item>
            <Sidebar.Item href="#">Create Product</Sidebar.Item>
            <Sidebar.Item href="#">Reviews</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={HiShoppingBag} label="Categories">
            <Sidebar.Item href="#">Category List</Sidebar.Item>
            <Sidebar.Item href="#">Create Category</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            <p>Orders</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>Sellers</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
