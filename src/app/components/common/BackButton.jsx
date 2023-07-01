"use client";

// import { useRouter } from "next/router";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="border border-gray-300 rounded-md bg-white px-3 py-2 text-sm font-semibold text-mainColor shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      onClick={() => router.back()}
    >
      Cancel
    </button>
  );
};

export default BackButton;
