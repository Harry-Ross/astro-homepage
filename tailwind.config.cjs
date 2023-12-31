/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", "sans-serif"],
				inter: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
