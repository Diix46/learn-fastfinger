/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    indent: ['error', 2], // Indentation de 2 espaces
    quotes: ['error', 'single'], // Utiliser des guillemets simples
    eqeqeq: 'error', // Utilisation du === à la place du ==
    semi: ['error', 'never'], // Toujours mettre des points-virgules à la fin des instructions
    'comma-dangle': ['error', 'never'], // Ne pas autoriser les virgules de queue dans les objets et tableaux
    'no-console': 'warn', // Avertissement pour les appels console.log(), etc.
    'no-unused-vars': 'warn', // Avertissement pour les variables déclarées mais non utilisées
    'vue/html-indent': ['error', 2], // Indentation de 2 espaces pour les fichiers Vue
    'vue/no-empty-component-block': 'error',
    'space-before-function-paren': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'quote-props': ['error', 'as-needed'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }]
    // Ajoutez d'autres règles personnalisées ici
  }
}