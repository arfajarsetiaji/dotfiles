module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"airbnb/hooks",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {},
};
