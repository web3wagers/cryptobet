/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#334756',
      'menuContent': '#0B2336',
      'menuBar': '#082032',
      'buttonOrange': '#FF4C29',
      'lightGray': "#D9D9D9",
      'lightOrange': '#FF8A73',
      'white': '#ffffff',
    },
    extend: {},
  },
  plugins: [

  ],
}

