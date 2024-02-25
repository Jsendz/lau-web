/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'forestweb': "url('assets/forest2.webp')",
      'skyweb': "url('assets/sky2.webp')",
    },
   
    extend: {
  },
  plugins: [],
}
};

