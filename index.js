const OFF    = 'off'
const WARN   = 'warn'
const ERROR  = 'error'
const ALWAYS = 'always'

module.exports = {
  parserOptions: {
    ecmaVersion: 5 // TBD
  , sourceType: 'script' // TBD
  , ecmaFeatures: {
      globalReturn: false // TBD
    , impliedStrict: false // TBD
    , jsx: false
    , experimentalObjectRestSpread: false // TBD
    }
  }
, env: {
    browser: true // TBD
  , node: true // TBD
  , 'shared-node-browser': true // TBD
  }
, rules: {

  // Possible Errors
    'no-await-in-loop': OFF // TBD
  , 'no-cond-assign': ERROR
  , 'no-console': OFF // TBD
  , 'no-constant-condition': [ ERROR, { checkLoops: true } ]
  , 'no-control-regex': OFF
  , 'no-debugger': ERROR // TBD
  , 'no-dupe-args': ERROR // TBD
  , 'no-dupe-keys': ERROR
  , 'no-duplicate-case': ERROR
  , 'no-empty-character-class': ERROR // TBD
  , 'no-empty': [ ERROR, { allowEmptyCatch: true } ]
  , 'no-ex-assign': ERROR // TBD
  , 'no-extra-boolean-cast': WARN
  , 'no-extra-parens': OFF
  , 'no-extra-semi': ERROR
  , 'no-func-assign': ERROR // TBD
  , 'no-inner-declarations': [ WARN, 'both' ]
  , 'no-invalid-regexp': ERROR // TBD
  , 'no-irregular-whitespace': [ ERROR, {
      skipStrings: true
    , skipComments: true
    } ] // TBD
  , 'no-obj-calls': ERROR // TBD
  , 'no-prototype-builtins': OFF
  , 'no-regex-spaces': ERROR // TBD
  , 'no-sparse-arrays': ERROR // TBD
  , 'no-unexpected-multiline': WARN
  , 'no-unreachable': ERROR
  , 'no-unsafe-finally': ERROR // TBD
  , 'no-unsafe-negation': ERROR // TBD
  , 'use-isnan': ERROR // TBD
  , 'valid-jsdoc': OFF // TBD
  , 'valid-typeof': [ WARN, { requireStringLiterals: true } ]

  // Best Practices
  , 'accessor-pairs': ERROR // TBD
  , 'array-callback-return': ERROR
  , 'block-scoped-var': OFF
  , 'class-methods-use-this': ERROR // TBD
  , complexity: [ WARN, { max: 20 } ]
  , 'consistent-return': OFF
  , curly: OFF // TBD
  , 'default-case': OFF // TBD
  , 'dot-location': OFF
  , 'dot-notation': OFF // TBD
  , eqeqeq: [ ERROR, 'smart' ]
  , 'guard-for-in': WARN
  , 'no-alert': OFF
  , 'no-caller': ERROR
  , 'no-case-declarations': ERROR // TBD
  , 'no-div-regex': ERROR // TBD
  , 'no-else-return': OFF
  , 'no-empty-function': ERROR
  , 'no-empty-pattern': ERROR // TBD
  , 'no-eq-null': OFF
  , 'no-eval': ERROR // TBD
  , 'no-extend-native': ERROR
  , 'no-extra-bind': ERROR
  , 'no-extra-label': ERROR
  , 'no-fallthrough': OFF // TBD
  , 'no-floating-decimal': OFF
  , 'no-global-assign': ERROR // TBD
  , 'no-implicit-coercion': OFF // TBD
  , 'no-implicit-globals': OFF // TBD
  , 'no-implied-eval': ERROR // TBD
  , 'no-invalid-this': ERROR
  , 'no-iterator': ERROR // TBD
  , 'no-labels': ERROR
  , 'no-lone-blocks': ERROR // TBD
  , 'no-loop-func': ERROR
  , 'no-magic-numbers': OFF // TBD
  , 'no-multi-spaces': [ WARN, {
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true
      }
    } ] // TBD
  , 'no-multi-str': ERROR // TBD
  , 'no-new-func': ERROR
  , 'no-new-wrappers': ERROR // TBD
  , 'no-new': OFF
  , 'no-octal-escape': ERROR // TBD
  , 'no-octal': ERROR // TBD
  , 'no-param-reassign': OFF // TBD
  , 'no-proto': ERROR
  , 'no-redeclare': ERROR
  , 'no-restricted-properties': OFF // TBD
  , 'no-return-assign': ERROR
  , 'no-return-await': OFF // TBD
  , 'no-script-url': ERROR
  , 'no-self-assign': [ ERROR, { props: true } ]
  , 'no-self-compare': ERROR
  , 'no-sequences': ERROR
  , 'no-throw-literal': OFF
  , 'no-unmodified-loop-condition': ERROR // TBD
  , 'no-unused-expressions': [ WARN, {
      allowShortCircuit: true
    , allowTernary: true
    } ]
  , 'no-unused-labels': ERROR // TBD
  , 'no-useless-call': ERROR
  , 'no-useless-concat': ERROR
  , 'no-useless-escape': OFF
  , 'no-useless-return': OFF // TBD
  , 'no-void': OFF
  , 'no-warning-comments': [ WARN, {
      terms: [ 'TODO', 'FIX', 'FIXME', 'TEMP' ]
    , location: 'anywhere'
    } ]
  , 'no-with': ERROR // TBD
  , radix: OFF
  , 'require-await': OFF // TBD
  , 'vars-on-top': OFF // TBD
  , 'wrap-iife': OFF // TBD
  , yoda: OFF // TBD

  // Strict Mode
  , strict: [ ERROR, 'never' ]

  // Variables
  , 'init-declarations': OFF
  , 'no-catch-shadow': OFF // TBD
  , 'no-delete-var': ERROR // TBD
  , 'no-label-var': ERROR
  , 'no-restricted-globals': OFF // TBD
  , 'no-shadow-restricted-names': ERROR // TBD
  , 'no-shadow': WARN
  , 'no-undef-init': OFF
  , 'no-undef': ERROR
  , 'no-undefined': OFF
  , 'no-unused-vars': WARN
  , 'no-use-before-define': OFF

  // Node.js and CommonJS, TODO: put this in it's own module
  , 'callback-return': OFF
  , 'global-require': ERROR // TBD
  , 'handle-callback-err': OFF
  , 'no-mixed-requires': OFF
  , 'no-new-require': ERROR // TBD
  , 'no-path-concat': ERROR // TBD
  , 'no-process-env': OFF
  , 'no-process-exit': ERROR // TBD
  , 'no-restricted-modules': OFF // TBD
  , 'no-sync': OFF

  // Stylistic Issues TODO: figure this out later with the team
  , 'array-bracket-spacing': OFF // TBD
  , 'block-spacing': OFF // TBD
  , 'brace-style': OFF // TBD
  , camelcase: OFF // TBD
  , 'capitalized-comments': OFF // TBD
  , 'comma-dangle': ERROR
  , 'comma-spacing': OFF // TBD
  , 'comma-style': OFF // TBD
  , 'computed-property-spacing': OFF // TBD
  , 'consistent-this': OFF // TBD
  , 'eol-last': OFF // TBD
  , 'func-call-spacing': OFF // TBD
  , 'func-names': OFF // TBD
  , 'func-name-matching': OFF // TBD
  , 'func-style': OFF // TBD
  , 'id-blacklist': OFF // TBD
  , 'id-length': OFF // TBD
  , 'id-match': OFF // TBD
  , indent: OFF // TBD
  , 'jsx-quotes': OFF // TBD
  , 'key-spacing': OFF // TBD
  , 'keyword-spacing': OFF // TBD
  , 'line-comment-position': OFF // TBD
  , 'linebreak-style': OFF // TBD
  , 'lines-around-comment': OFF // TBD
  , 'lines-around-directive': OFF // TBD
  , 'max-depth': OFF // TBD
  , 'max-len': OFF // TBD
  , 'max-lines': OFF // TBD
  , 'max-nested-callbacks': OFF // TBD
  , 'max-params': OFF // TBD
  , 'max-statements-per-line': OFF // TBD
  , 'max-statements': OFF // TBD
  , 'multiline-ternary': OFF // TBD
  , 'new-cap': OFF // TBD
  , 'new-parens': OFF // TBD
  , 'newline-after-var': OFF // TBD
  , 'newline-before-return': OFF // TBD
  , 'newline-per-chained-call': OFF // TBD
  , 'no-array-constructor': OFF // TBD
  , 'no-bitwise': OFF // TBD
  , 'no-continue': OFF // TBD
  , 'no-inline-comments': OFF // TBD
  , 'no-lonely-if': OFF // TBD
  , 'no-mixed-operators': OFF // TBD
  , 'no-mixed-spaces-and-tabs': OFF // TBD
  , 'no-multiple-empty-lines': OFF // TBD
  , 'no-negated-condition': OFF // TBD
  , 'no-nested-ternary': OFF // TBD
  , 'no-new-object': OFF // TBD
  , 'no-plusplus': OFF // TBD
  , 'no-restricted-syntax': OFF // TBD
  , 'no-tabs': OFF // TBD
  , 'no-ternary': OFF // TBD
  , 'no-trailing-spaces': OFF // TBD
  , 'no-underscore-dangle': OFF // TBD
  , 'no-unneeded-ternary': OFF // TBD
  , 'no-whitespace-before-property': OFF // TBD
  , 'object-curly-newline': OFF // TBD
  , 'object-curly-spacing': OFF // TBD
  , 'object-property-newline': OFF // TBD
  , 'one-var-declaration-per-line': OFF // TBD
  , 'one-var': OFF // TBD
  , 'operator-assignment': OFF // TBD
  , 'operator-linebreak': OFF // TBD
  , 'padded-blocks': OFF // TBD
  , 'quote-props': OFF // TBD
  , quotes: OFF // TBD
  , 'require-jsdoc': OFF // TBD
  , 'semi-spacing': OFF // TBD
  , semi: [ ERROR, ALWAYS ] // TBD, if compiler inserts these automatically re-evaluate this rule
  , 'sort-keys': OFF // TBD
  , 'sort-vars': OFF // TBD
  , 'space-before-blocks': OFF // TBD
  , 'space-before-function-paren': OFF // TBD
  , 'space-in-parens': OFF // TBD
  , 'space-infix-ops': OFF // TBD
  , 'space-unary-ops': OFF // TBD
  , 'spaced-comment': OFF // TBD
  , 'unicode-bom': OFF // TBD
  , 'wrap-regex': OFF // TBD

  // ECMAScript 6 TODO': decide later, once supported in apps and or override in node projects
  , 'arrow-body-style': OFF // TBD
  , 'arrow-parens': OFF // TBD
  , 'arrow-spacing': OFF // TBD
  , 'constructor-super': OFF // TBD
  , 'generator-star-spacing': OFF // TBD
  , 'no-class-assign': OFF // TBD
  , 'no-confusing-arrow': OFF // TBD
  , 'no-const-assign': OFF // TBD
  , 'no-dupe-class-members': OFF // TBD
  , 'no-duplicate-imports': OFF // TBD
  , 'no-new-symbol': OFF // TBD
  , 'no-restricted-imports': OFF // TBD
  , 'no-this-before-super': OFF // TBD
  , 'no-useless-computed-key': OFF // TBD
  , 'no-useless-constructor': OFF // TBD
  , 'no-useless-rename': OFF // TBD
  , 'no-var': OFF // TBD
  , 'object-shorthand': OFF // TBD
  , 'prefer-arrow-callback': OFF // TBD
  , 'prefer-const': OFF // TBD
  , 'prefer-numeric-literals': OFF // TBD
  , 'prefer-reflect': OFF // TBD
  , 'prefer-rest-params': OFF // TBD
  , 'prefer-spread': OFF // TBD
  , 'prefer-template': OFF // TBD
  , 'require-yield': OFF // TBD
  , 'rest-spread-spacing': OFF // TBD
  , 'sort-imports': OFF // TBD
  , 'symbol-description': OFF // TBD
  , 'template-curly-spacing': OFF // TBD
  , 'yield-star-spacing': OFF // TBD
  }
}
