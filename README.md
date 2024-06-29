# Whyhankee's eslint/prettier config

This package provides my ESLint/Prettier config for my projects.

## Usage

ESlint

```JS
// eslint.config.mjs
import eslintConfig from "@whyhankee/eslint-config"

export default [
	{
		files: ["./src/**/*.{ts}"],
	},
	...eslintConfig,
]
```

Prettier

```JS
// prettier.config.js
import { prettier } from "@whyhankee/eslint-config"

export default prettier
```

## Implements

- ESLint standard recommended rules
- Typescript-eslint recommended rules
- Prettier integration and rules
- Some custom ESlint rules
