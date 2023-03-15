module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ["plugin:vue/vue3-essential", "airbnb-base", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["vue"],
	rules: {},
};
