import { LogOut } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["JetBrains Mono", "mono"],
        navbar: ["Noto Sans", "sans"],
        heading: ["Kode Mono", "mono"],
      },
    },
  },
  plugins: [],
};