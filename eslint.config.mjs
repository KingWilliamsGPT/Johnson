import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-fragments": "off",
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-filename-extension": "off",
      "no-unused-vars": "warn",
      "react/display-name": "off",
      "import/prefer-default-export": "off",
      "react/style-prop-object": "off",
      "react/jsx-props-no-spreading": "off",
      "no-console": "off",
    }
  },
];


export default eslintConfig;
