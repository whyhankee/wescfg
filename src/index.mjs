import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export {globals}

export const eslintRules = {
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

	// simple-import-sort plugin
	"simple-import-sort/exports": "error",
	"simple-import-sort/imports": "error",
}

export const eslintConfig = [
	{
		ignores: ["dist/*"],
	},
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{rules: eslintRules},
	eslintConfigPrettier,
]

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
