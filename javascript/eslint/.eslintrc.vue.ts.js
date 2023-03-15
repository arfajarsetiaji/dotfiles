module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"airbnb-base",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "vue"],
	rules: {},
};
