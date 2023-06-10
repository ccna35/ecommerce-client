/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#232a37",
        secColor: "#bcbcbd",
        bgColor: "#f6f6f6",
        chestnutRose: "#ca435c",
      },
    },
  },
  plugins: [[require("flowbite/plugin"), require("@tailwindcss/forms")]],
};
