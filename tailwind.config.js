/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#0E2A52',
        ink: '#0F1E36',
        body: '#33425C',
        muted: '#4A5A73',
        line: '#DCE3EC',
        ground: '#F6F8FB',
        brand: {
          DEFAULT: '#1F6FD1',
          dark: '#1A5DB0',
          tint: '#EAF3FC',
          soft: '#A9C8EC',
        },
      },
    },
  },
  plugins: [],
}
