/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'forest': "url('assets/forest.webp')",
      'sky': "url('assets/sky.webp')",
    },
   
    extend: {
  },
  plugins: [],
}
};

