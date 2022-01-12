//https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  extends: [
    'eslint-config-mfe/eslintrc.node.js', "standard", "prettier"
  ], rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] },
    ],
  },
}