module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
};
