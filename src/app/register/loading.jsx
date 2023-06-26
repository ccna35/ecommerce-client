"use client";

import { Spinner } from "flowbite-react";

const loading = () => {
  return (
    <div className="fixed w-screen h-screen bg-white top-0 left-0 grid place-items-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default loading;
