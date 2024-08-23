/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFD502',
        'uh-text-color': '#806B01',
        'custom-red': '#FF141E',
      },
      height: {
        'custom-4': '5rem',
        'custom-4.5': '10rem',
      },
      width: {
        'custom-3': '5rem',
        'custom-4.5': '20rem',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        updown: "updown 2s ease-in-out infinite", 
      },
    },
  },
  plugins: [],
}
