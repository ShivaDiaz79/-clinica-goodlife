/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  images: {
    domains: ['res.cloudinary.com'],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '14xl': '250px', // Ajusta el tamaño de fuente en píxeles para que sea aproximadamente equivalente a 14 centímetros en una pantalla estándar.
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

