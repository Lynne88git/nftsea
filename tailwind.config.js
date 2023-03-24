/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '300px auto' //for sidenav layout
      },
      gridTemplateRows: {
        header: '64px auto' //for the navbar layout
      },
      screens: {
        xs: { max: '475px' }
        // => @media (max-width: 475px) { ... }
      }
    }
  }
}
