import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

const sourceFiles = ["**/*.{js,jsx,mjs,cjs}"];

export default [
  {
    ignores: ["node_modules", "dist", "public"],
  },
  { ...js.configs.recommended, files: sourceFiles },
  { ...react.configs.flat.recommended, files: sourceFiles },
  { ...react.configs.flat["jsx-runtime"], files: sourceFiles },
  { ...reactHooks.configs.flat["recommended-latest"], files: sourceFiles },
  { ...prettierRecommended, files: sourceFiles },
  {
    files: sourceFiles,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        process: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          globalReturn: true,
          impliedStrict: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      eqeqeq: "error",
      "no-console": "off",
      "prettier/prettier": "warn",
      "react/prop-types": "off",
      "react-refresh/only-export-components": ["error", { allowExportNames: ["metadata"] }],
    },
  },
];
