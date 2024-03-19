/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'horizon': ['Horizon', 'ui-sans-serif'],
			'dm-sans': ['DM Sans', 'ui-sans-serif']
		},
		extend: {},
	},
	plugins: [],
}
