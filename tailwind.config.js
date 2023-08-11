/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-image': "url('assets/stars.svg')",
      },
      fontFamily: {
        Poppins_400: 'Poppins-400',
        Poppins_600: 'Poppins-600',
        Inter_600: 'Inter-600',
        Inter_400: 'Inter-400',
        Bebas: 'Bebas',
      },
    },
  },
  plugins: [require('daisyui')],
};
