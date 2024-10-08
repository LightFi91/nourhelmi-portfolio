const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.json", "**/*.css"],
  // add rules configurations here
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "eslint-comments/require-description": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/button-has-type": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
  },
  overrides: [
    {
      files: ["*.config.js"],
      env: {
        node: true,
      },
    },
  ],
}
