import {eslintConfig} from "./src/index.mjs"

export default [
	{
		files: ["**/*.{js,mjs}"],
	},
	...eslintConfig,
]
