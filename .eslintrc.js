/**
 * @type {import('eslint').Linter.FlatConfig}
 */
module.exports = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: [],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended-type-checked",
      ],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        // Not a big issue in React projects as functions tend to be created with this in mind
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
