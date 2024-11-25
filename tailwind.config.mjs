/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-black': '#121212',
        'custom-grey': '#898989',
        'custom-blue': '#0067F2',
        'custom-white': '#FFF8F5',
      },
      boxShadow: {
        'custom-1': '20px 20px 20px 0px #181B244D',
        'custom-2': '-5px -5px 250px 0px rgba(255, 255, 255, 0.02) inset',
      },
		},
	},
	plugins: [],
}
