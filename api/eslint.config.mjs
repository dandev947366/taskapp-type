import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // Disable conflicting ESLint rules
  {
    plugins: {
      prettier: pluginPrettier, // Add Prettier plugin
    },
    rules: {
      "prettier/prettier": "error", // Treat Prettier issues as errors
    },
    settings: { // Moved settings inside this object
      "import/resolver": {
        "typescript": {},
      },
    },
  },
];
