
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '130': '1.3'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        orange: {
          65: '#FF8D4D',
          70: '#FF9E66',
          75: '#FFAE80',
          80: '#FFBE99',
          90: '#FFDECC',
          95: '#FFEFE5',
          97: '#FFF5F0',
          99: '#FFFCFA',
        },
        gray: {
          10: "#1A1A1A",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3"
        }
      }
    }
  },
  plugins: [],
}

