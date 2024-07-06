import {eslintConfig, globals} from "./src/index.mjs"

export default [
	{
		files: ["**/*.{js,mjs}"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	...eslintConfig,
]
