/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/components/**/*.{js,jsx,mdx}", "./src/app/**/*.{js,jsx,mdx}", "./src/data/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        // Warm paper background in light mode, deep ink in dark mode.
        paper: "#faf8f5",
        ink: "#14181f",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
