import assert from "node:assert"
import {test} from "node:test"

import {eslintConfig, eslintRules, prettierConfig} from "../src/index.mjs"

// Basic tests that at least make sure the syntax is correct

test("eslintRules", () => {
	assert(Object.keys(eslintRules).includes("no-console"))
})

test("eslintConfig", () => {
	assert(Array.isArray(eslintConfig))
})

test("prettierConfig", () => {
	assert(Object.keys(prettierConfig).includes("trailingComma"))
})
