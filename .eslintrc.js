module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    "semi": ["error", "always"], //强制使用分号
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};

/*
*
* "off" or 0 - turn the rule off
 "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
*
* */

/* eslint-disable */
