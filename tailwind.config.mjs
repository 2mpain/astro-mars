/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				main: "#1C242F",
				darkPurple: "#1E005C",
				lightPurple: "#9700BD",
				gray: "#D7D7D7",
				darkGray: "#50565F",
				pink: "#D6395D",
				space: "#16151C",
				slate: "#1E2432",
				darkSlate: '#2C3747',
				lightGray: '#A6B0BC'
			},
		},
	},
	important: true,
	plugins: [],
};
