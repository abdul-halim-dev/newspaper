 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
     primary: ["SolaimanLipi", "sans-serif"]
     },
colors:{
active:"#f31527",
primary:"#000000",
secondary:"#ffffff",
marqueeBg:"#0f3a5a",
borderColor:"#5a616b"
}


    },
  },
  plugins: [],
}