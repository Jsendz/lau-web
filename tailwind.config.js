/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'forest': "url('assets/forest2.webp')",
      'sky': "url('assets/sky2.webp')",
    },
   
    extend: {
  },
  plugins: [],
}
};

