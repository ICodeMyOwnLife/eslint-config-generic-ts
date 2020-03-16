module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
    jest: true
  },
  plugins: ["@typescript-eslint", "import", "prettier"],
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  globals: {
    document: true,
    window: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "arrow-body-style": "warn",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-onchange": "off",
    "no-nested-ternary": "off",
    "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
    "no-sparse-arrays": "off",
    "prettier/prettier": ["warn", { singleQuote: true, trailingComma: "all" }]
  },
  ignorePatterns: [
    "node_modules/",
    "**/*.test.ts",
    "**/*.min.js",
    "src/setupTests.ts",
    "build/",
    "dist/",
    "public/"
  ]
};
