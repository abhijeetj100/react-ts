import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    ...fixupConfigRules(
        compat.extends(
            "airbnb",
            "plugin:prettier/recommended",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
            // 'prettier',
            "plugin:import/typescript"
        )
    ),
    {
        plugins: {
            react: fixupPluginRules(react),
            "@typescript-eslint": fixupPluginRules(typescriptEslint),
            "react-hooks": fixupPluginRules(reactHooks),
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
            },

            parser: tsParser,
            ecmaVersion: 12,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            "import/resolver": {
                typescript: {},
            },
        },

        rules: {
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": ["error"],

            "react/jsx-filename-extension": [
                "warn",
                {
                    extensions: [".tsx"],
                },
            ],

            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    ts: "never",
                    tsx: "never",
                },
            ],

            "no-shadow": "off",
            "@typescript-eslint/no-shadow": ["error"],

            "@typescript-eslint/explicit-function-return-type": [
                "off",
                {
                    allowExpressions: true,
                },
            ],

            "max-len": [
                "warn",
                {
                    code: 100,
                    ignoreComments: true,
                    ignoreUrls: true,
                },
            ],

            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "import/prefer-default-export": "off",
            "react/prop-types": "off",

            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                },
            ],
            indent: "off",
            "react/react-in-jsx-scope": "off",
            "no-plusplus": "off",
            "react/no-array-index-key": "off",
        },
    },
];
