#!/usr/bin/env node

import fs from "fs"

const esLintConfig = `import {eslintConfig, globals} from "wescfg"

export default [
	{
		files: ["**/*.{js,mjs,ts}"],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	...eslintConfig,
]
`

const prettierConfig = `import {prettierConfig} from "wescfg"

export default prettierConfig
`

const prettierIgnore = `pnpm-lock.yaml
package-lock.json
`

const templates = {
	"eslint.config.js": esLintConfig,
	"prettier.config.js": prettierConfig,
	".prettierignore": prettierIgnore,
}

Object.entries(templates).forEach(([filename, content]) => {
	if (fs.existsSync(filename)) {
		console.info(`File '${filename}' already exists, skipping`)
		return
	}
	fs.writeFileSync(filename, content)
	console.info(`File '${filename}' created`)
})
