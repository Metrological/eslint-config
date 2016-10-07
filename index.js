const OFF    = 'off'
const WARN   = 'warn'
const ERROR  = 'error'
const ALWAYS = 'always'

module.exports = {
  parserOptions: {
    ecmaVersion: 5
  , sourceType: 'script'
  , ecmaFeatures: {
      globalReturn: false
    , impliedStrict: false
    , jsx: false
    , experimentalObjectRestSpread: false
    }
  }
, env: {
    browser: true
  , node: true
  , 'shared-node-browser': true
  }
, rules: {

  // Possible Errors
    'no-cond-assign': [ WARN, ALWAYS ]
  , 'no-console': OFF
  , 'no-constant-condition': ERROR
  , 'no-control-regex': ERROR
  , 'no-debugger': ERROR
  , 'no-dupe-args': ERROR
  , 'no-dupe-keys': ERROR
  , 'no-duplicate-case': ERROR
  , 'no-empty-character-class': ERROR
  , 'no-empty': [ ERROR, { allowEmptyCatch: true } ]
  , 'no-ex-assign': ERROR
  , 'no-extra-boolean-cast': ERROR
  , 'no-extra-parens': ERROR // TODO: should be WARNing???
  , 'no-extra-semi': ERROR
  , 'no-func-assign': ERROR
  , 'no-inner-declarations': [ ERROR, 'both' ]
  , 'no-invalid-regexp': ERROR
  , 'no-irregular-whitespace': [ ERROR, {
      skipStrings: true
    , skipComments: true
    } ]
  , 'no-obj-calls': ERROR
  , 'no-prototype-builtins': ERROR
  , 'no-regex-spaces': ERROR
  , 'no-sparse-arrays': ERROR
  , 'no-unexpected-multiline': ERROR
  , 'no-unreachable': ERROR
  , 'no-unsafe-finally': ERROR
  , 'no-unsafe-negation': ERROR
  , 'use-isnan': ERROR
  , 'valid-jsdoc': OFF
  , 'valid-typeof': [ ERROR, { requireStringLiterals: true } ]

  // Best Practices
  , 'accessor-pairs': ERROR
  , 'array-callback-return': ERROR
  , 'block-scoped-var': OFF // TODO: should be WARNing??? or OFF if too much effort...
  , 'class-methods-use-this': ERROR
  , complexity: [ WARN, { max: 5 } ]
  , 'consistent-return': ERROR
  , curly: OFF // TODO: for now it is off, re-enable and discuss with style rules
  , 'default-case': OFF
  , 'dot-location': [ ERROR, 'property' ]
  , 'dot-notation': ERROR
  , eqeqeq: [ ERROR, 'smart' ]
  , 'guard-for-in': ERROR
  , 'no-alert': ERROR
  , 'no-caller': ERROR
  , 'no-case-declarations': ERROR
  , 'no-div-regex': ERROR
  , 'no-else-return': ERROR
  , 'no-empty-function': ERROR
  , 'no-empty-pattern': ERROR
  , 'no-eq-null': ERROR
  , 'no-eval': ERROR
  , 'no-extend-native': ERROR
  , 'no-extra-bind': ERROR
  , 'no-extra-label': ERROR
  , 'no-fallthrough': OFF
  , 'no-floating-decimal': ERROR
  , 'no-global-assign': ERROR
  , 'no-implicit-coercion': OFF
  , 'no-implicit-globals': OFF
  , 'no-implied-eval': ERROR
  , 'no-invalid-this': ERROR
  , 'no-iterator': ERROR
  , 'no-labels': ERROR
  , 'no-lone-blocks': ERROR
  , 'no-loop-func': ERROR
  , 'no-magic-numbers': OFF
  , 'no-multi-spaces': [ ERROR, {
      exceptions: {
        Property: true,
        VariableDeclarator: true,
        ImportDeclaration: true
      }
    } ]
  , 'no-multi-str': ERROR
  , 'no-new-func': ERROR
  , 'no-new-wrappers': ERROR
  , 'no-new': ERROR
  , 'no-octal-escape': ERROR
  , 'no-octal': ERROR
  , 'no-param-reassign': OFF
  , 'no-proto': ERROR
  , 'no-redeclare': ERROR
  , 'no-restricted-properties': OFF
  , 'no-return-assign': ERROR
  , 'no-script-url': ERROR
  , 'no-self-assign': [ ERROR, { props: true } ]
  , 'no-self-compare': ERROR
  , 'no-sequences': ERROR
  , 'no-throw-literal': ERROR
  , 'no-unmodified-loop-condition': ERROR
  , 'no-unused-expressions': [ ERROR, {
      allowShortCircuit: true
    , allowTernary: true
    } ]
  , 'no-unused-labels': ERROR
  , 'no-useless-call': ERROR
  , 'no-useless-concat': ERROR
  , 'no-useless-escape': ERROR
  , 'no-void': ERROR
  , 'no-warning-comments': [ WARN, {
      terms: [ 'todo', 'TODO', 'fix', 'FIX', 'fixme', 'FIXME' ]
    , location: 'anywhere'
    } ]
  , 'no-with': ERROR
  , radix: ERROR
  , 'vars-on-top': OFF // TODO: should be WARNing??? or OFF if too much effort...
  , 'wrap-iife': OFF
  , yoda: OFF

  // Strict Mode
  , strict: [ ERROR, 'never' ]

  // Variables
  , 'init-declarations': [ ERROR, ALWAYS ]
  , 'no-catch-shadow': OFF
  , 'no-delete-var': ERROR
  , 'no-label-var': ERROR
  , 'no-restricted-globals': OFF
  , 'no-shadow-restricted-names': ERROR
  , 'no-shadow': WARN
  , 'no-undef-init': ERROR
  , 'no-undef': ERROR
  , 'no-undefined': ERROR
  , 'no-unused-vars': [ ERROR, { caughtErrors: 'none' } ]
  , 'no-use-before-define': ERROR

  // Node.js and CommonJS
  , 'callback-return': [ ERROR, [ 'callback', 'cb', 'next', 'done' ] ]
  , 'global-require': ERROR
  , 'handle-callback-err': [ ERROR, '^.*(e|E)rr' ]
  , 'no-mixed-requires': ERROR
  , 'no-new-require': ERROR
  , 'no-path-concat': ERROR
  , 'no-process-env': ERROR
  , 'no-process-exit': ERROR
  , 'no-restricted-modules': OFF
  , 'no-sync': WARN

  // Stylistic Issues TODO: figure this out later with the team
  , 'array-bracket-spacing': OFF
  , 'block-spacing': OFF
  , 'brace-style': OFF
  , camelcase: OFF
  , 'comma-dangle': ERROR
  , 'comma-spacing': OFF
  , 'comma-style': OFF
  , 'computed-property-spacing': OFF
  , 'consistent-this': OFF
  , 'eol-last': OFF
  , 'func-call-spacing': OFF
  , 'func-names': OFF
  , 'func-style': OFF
  , 'id-blacklist': OFF
  , 'id-length': OFF
  , 'id-match': OFF
  , indent: OFF
  , 'jsx-quotes': OFF
  , 'key-spacing': OFF
  , 'keyword-spacing': OFF
  , 'line-comment-position': OFF
  , 'linebreak-style': OFF
  , 'lines-around-comment': OFF
  , 'lines-around-directive': OFF
  , 'max-depth': OFF
  , 'max-len': OFF
  , 'max-lines': OFF
  , 'max-nested-callbacks': OFF
  , 'max-params': OFF
  , 'max-statements-per-line': OFF
  , 'max-statements': OFF
  , 'multiline-ternary': OFF
  , 'new-cap': OFF
  , 'new-parens': OFF
  , 'newline-after-var': OFF
  , 'newline-before-return': OFF
  , 'newline-per-chained-call': OFF
  , 'no-array-constructor': OFF
  , 'no-bitwise': OFF
  , 'no-continue': OFF
  , 'no-inline-comments': OFF
  , 'no-lonely-if': OFF
  , 'no-mixed-operators': OFF
  , 'no-mixed-spaces-and-tabs': OFF
  , 'no-multiple-empty-lines': OFF
  , 'no-negated-condition': OFF
  , 'no-nested-ternary': OFF
  , 'no-new-object': OFF
  , 'no-plusplus': OFF
  , 'no-restricted-syntax': OFF
  , 'no-tabs': OFF
  , 'no-ternary': OFF
  , 'no-trailing-spaces': OFF
  , 'no-underscore-dangle': OFF
  , 'no-unneeded-ternary': OFF
  , 'no-whitespace-before-property': OFF
  , 'object-curly-newline': OFF
  , 'object-curly-spacing': OFF
  , 'object-property-newline': OFF
  , 'one-var-declaration-per-line': OFF
  , 'one-var': OFF
  , 'operator-assignment': OFF
  , 'operator-linebreak': OFF
  , 'padded-blocks': OFF
  , 'quote-props': OFF
  , quotes: OFF
  , 'require-jsdoc': OFF
  , 'semi-spacing': OFF
  , semi: [ ERROR, ALWAYS ] // TODO: when compiler inserts these automatically re-evaluate this rule
  , 'sort-keys': OFF
  , 'sort-vars': OFF
  , 'space-before-blocks': OFF
  , 'space-before-function-paren': OFF
  , 'space-in-parens': OFF
  , 'space-infix-ops': OFF
  , 'space-unary-ops': OFF
  , 'spaced-comment': OFF
  , 'unicode-bom': OFF
  , 'wrap-regex': OFF

  // ECMAScript 6 TODO': decide later, once supported in apps
  , 'arrow-body-style': OFF
  , 'arrow-parens': OFF
  , 'arrow-spacing': OFF
  , 'constructor-super': OFF
  , 'generator-star-spacing': OFF
  , 'no-class-assign': OFF
  , 'no-confusing-arrow': OFF
  , 'no-const-assign': OFF
  , 'no-dupe-class-members': OFF
  , 'no-duplicate-imports': OFF
  , 'no-new-symbol': OFF
  , 'no-restricted-imports': OFF
  , 'no-this-before-super': OFF
  , 'no-useless-computed-key': OFF
  , 'no-useless-constructor': OFF
  , 'no-useless-rename': OFF
  , 'no-var': OFF
  , 'object-shorthand': OFF
  , 'prefer-arrow-callback': OFF
  , 'prefer-const': OFF
  , 'prefer-numeric-literals': OFF
  , 'prefer-reflect': OFF
  , 'prefer-rest-params': OFF
  , 'prefer-spread': OFF
  , 'prefer-template': OFF
  , 'require-yield': OFF
  , 'rest-spread-spacing': OFF
  , 'sort-imports': OFF
  , 'symbol-description': OFF
  , 'template-curly-spacing': OFF
  , 'yield-star-spacing': OFF
  }
}
