# Whyhankee's eslint/prettier config

This package provides my ESLint/Prettier config for my projects.

It's kinda newish with the introduction of the flat config, it will need to grow up a little.

## Install

### Setup peerDependencies

To ensure installation of required peerDependencies, add to `.npmrc`

```
auto-install-peers=true
```

### Install wescfg

`npm install wescfg`

### Run init script

`npx wescfg`

This will create the following configuration files:

- eslint.config.js
- prettier.config.js
- .prettierignore
- .editorconfig

### Create scripts in package.json:

```
"lint": "eslint . --fix",
"format": "prettier --write .",
```

## Adapt

Optionally, update the `eslint.config.js` to fit your needs.

## Implements

- ESLint standard recommended rules
- Typescript-eslint recommended rules
- Prettier integration and rules
- Some custom ESlint rules
