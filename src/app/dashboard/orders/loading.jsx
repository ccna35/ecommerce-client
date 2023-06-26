"use client";

import { Spinner } from "flowbite-react";

const loading = () => {
  return (
    <div className="w-full h-full bg-white grid place-items-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default loading;
