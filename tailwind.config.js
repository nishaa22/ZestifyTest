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
				primary: '#06030E',
			},
			animation: {
				marqueeX: 'marqueeX 16s linear infinite',
				marqueeTop: 'marqueeTop 10s linear infinite',
				marqueeDown: 'marqueeDown 10s linear infinite',
				spinSlow: 'spinSlow infinite linear 10s',
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
				spinSlow: {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
					},
					'50%': {
						transform: 'scale(1.2) rotate(180deg)',
					},
					'100%': {
						transform: 'scale(1) rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [],
};
