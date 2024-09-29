import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {},
			fontFamily: {
				inter: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				jp: ['Noto Sans JP Variable', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
