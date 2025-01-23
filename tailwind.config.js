/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // Definiendo un color personalizado
        'custom-Gris': '#F6F6F6',
       
      },
    },
  },
  plugins: [],
}