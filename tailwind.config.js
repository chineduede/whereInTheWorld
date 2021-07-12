module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
		screens: {
			'tiny' : '200px',
      'sm':'640px',
      'md':'768px', 
      'lg':'1024px', 
      'xl':'1280px',
			'2xl': '1536px'
    },
		boxShadow: {
			'header': '-5px 13px 9px -6px rgba(210,197,197,0.12)',
			'button': '0px 1px 14px -2px rgba(0,0,0,0.13)',
			'shad': '0px 1px 14px -2px rgba(0,0,0,0.63)',

		},
    extend: {
			container: {
				center: true,
			},
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
