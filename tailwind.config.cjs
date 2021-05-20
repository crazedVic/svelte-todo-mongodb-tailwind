module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
	variants: {
		extend: {
		  backgroundColor: ['checked'],
		  borderColor: ['checked'],
		  outline: ['checked'],
		  textColor: ['checked']
		}
	  },
};
