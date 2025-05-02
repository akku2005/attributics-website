export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#1D4ED8',
            dark: '#60A5FA',
          },
          secondary: {
            light: '#9333EA',
            dark: '#C084FC',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };