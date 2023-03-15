module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {},
};
