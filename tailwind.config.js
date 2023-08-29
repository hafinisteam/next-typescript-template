module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      tsm: { min: '640px' },
      tmd: { min: '768px' },
      tlg: { min: '1024px' },
      txl: { min: '1280px' },
      t2xl: { min: '1536px' },
    },
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '960px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
      },
    },
    extend: {
      fontFamily: {
        inter: 'Inter',
      },
    },
  },
}
