/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#06030E',
			},
			colors: {
				gradiantText: '-webkit-linear-gradient(#FFFFFF, #71717A)',
				// '-webkit-background-clip': 'text',
				// '-webkit-text-fill-color': 'transparent',
			},
			animation: {
				marqueeX: 'marqueeX 10s linear infinite',
				marqueeTop: 'marqueeTop 10s linear infinite',
				marqueeDown: 'marqueeDown 10s linear infinite',
			},
			keyframes: {
				marqueeX: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marqueeTop: {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(-100%)' },
				},
				marqueeDown: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' },
				},
			},
		},
	},
	plugins: [],
};
