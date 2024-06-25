/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'where' : "url('../images/whereeverohelpsimages/background.webp')",
			},

			flexGrow: {
				'2': 2,
				'3': 3, 
			},
		},
	},
	plugins: [],
}
