/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F0F4FA',
          alt: '#F2F0FA',
          primary:'#F4F5F8'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

