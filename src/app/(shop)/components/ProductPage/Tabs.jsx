"use client";

import { Tabs } from "flowbite-react";
import ProductReview from "./ProductReview";

export default function DefaultTabs() {
  return (
    <Tabs.Group aria-label="Default tabs" style="default">
      <Tabs.Item active title="Description">
        <p className="text-mainColor text-xl font-bold mb-8">Specification:</p>
        <div className="text-mainColor flex flex-col gap-4 items-start">
          <p>Brand: Beats</p>
          <p>Model: S450</p>
          <p>Wireless Bluetooth Headset</p>
          <p>FM Frequency Response: 87.5 – 108 MHz</p>
          <p>Feature: FM Radio, Card Supported (Micro SD / TF)</p>
          <p>Made in China</p>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Reviews">
        <ProductReview />
      </Tabs.Item>
    </Tabs.Group>
  );
}
