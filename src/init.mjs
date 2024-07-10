#!/usr/bin/env node
import fs from "fs"

// https://eslint.org/docs/user-guide/configuring
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

// https://prettier.io/docs/en/configuration.html
const prettierConfig = `import {prettierConfig} from "wescfg"

export default prettierConfig
`

// https://prettier.io/docs/en/ignore.html
const prettierIgnore = `coverage/
dist/

pnpm-lock.yaml
package-lock.json
`

// https://editorconfig.org/
const editorConfig = `# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = tab

[*.{yml,yaml}]
indent_style = space
`

/**
 * Templates to create
 */
const templates = {
	"eslint.config.js": esLintConfig,
	"prettier.config.js": prettierConfig,
	".prettierignore": prettierIgnore,
	".editorconfig": editorConfig,
}

// Create files
Object.entries(templates).forEach(([filename, content]) => {
	if (fs.existsSync(filename)) {
		console.info(`File '${filename}' already exists, skipping`)
		return
	}
	fs.writeFileSync(filename, content)
	console.info(`File '${filename}' created`)
})
