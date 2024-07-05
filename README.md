# Whyhankee's eslint/prettier config

This package provides my ESLint/Prettier config for my projects.

It's kinda newish with the introduction of the flat config, it will need to grow up a little.

## Usage

### Install

ESlint

```JS
// eslint.config.mjs
import eslintConfig from "wescfg"

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
import { prettier } from "wescfg"

export default prettier
```

## Implements

- ESLint standard recommended rules
- Typescript-eslint recommended rules
- Prettier integration and rules
- Some custom ESlint rules
