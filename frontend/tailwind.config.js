/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			width: {
				200: '200px',
			},
			maxWidth: {
				maxContent: 'max-content',
			},
			maxHeight: {
				maxContent: 'max-content',
			},
			height: {
				200: '200px',
				425: '425px',
			},
			fontSize: {
				h1: '2rem',
			},
			backgroundColor: {
				trasparentBlack: 'rgba(0, 0, 0, 0.613)',
			},
		},
	},
	plugins: [],
};
