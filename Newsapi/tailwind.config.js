/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        shyblue:'#9bdaf2',
        darkpink: '#e38994',
        darkbluebg: '#28264d',
        pinkone: '#f2a7d8',
        blueone: '#47bdff',
        bigblue: '#86c7dd',
        pinklast: '#eda0a8',
        orangelast: '#e5ba08',
        yellowlast:'#fdc067',
        brownlast: '#d74747',
        graylast: '#94b4bf',
        redlast: '#f25260',
      },
    },
  },
  plugins: [],
}
