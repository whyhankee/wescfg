import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export {globals}

export const eslintConfig = tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: [
			"node_modules",
			"dist",
			"coverage",
			"prettier.config.js",
			"eslint.config.js",
			"vitest.*.ts",
		],
	},
	// general rules
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			// utility
			"no-console": [
				"error",
				{
					allow: ["info", "warn", "error", "debug"],
				},
			],
			"require-await": "error",

			// readability
			"no-trailing-spaces": "error",
			curly: "error",
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": "error",
		},
	},
	// TypeScript specific rules
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			ecmaVersion: 5,
			sourceType: "script",
			parserOptions: {
				project: "./tsconfig.json",
			},
		},
		rules: {
			"@typescript-eslint/no-unnecessary-condition": "error",
		},
	},
	// Prettier setup
	eslintConfigPrettier,
	// Custom Prettier overrides
	{
		rules: {
			"no-multiple-empty-lines": [
				"error",
				{
					max: 2,
				},
			],
			"key-spacing": [
				"error",
				{
					beforeColon: false,
					afterColon: true,
					mode: "strict",
				},
			],
		},
	},
)

export const prettierConfig = {
	arrowParens: "always",
	bracketSpacing: false,
	endOfLine: "lf",
	printWidth: 90,
	semi: false,
	singleAttributePerLine: true,
	singleQuote: false,
	trailingComma: "all",
	useTabs: true,
	tabWidth: 2,
	overrides: [
		{
			files: ["*.yml", "*.yaml"],
			options: {
				useTabs: false,
			},
		},
	],
}
