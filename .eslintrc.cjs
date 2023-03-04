// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ["error", 2],
    'max-len': ["error", { "code": 80 }],
  },
  root: true,
  settings: {
    react: {
      version: "detect"
    }
  }
};
