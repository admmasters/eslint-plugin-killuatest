module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['import', 'flowtype', 'react'],
  env: {
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-underscore-dangle': 0,
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [2, 'never'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-weak-types': 2,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': [
      0,
      'always',
      {
        annotateUndefined: 'never'
      }
    ],
    'flowtype/require-valid-file-annotation': 2,
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'flowtype/delimiter-dangle': 0,
    'no-use-before-define': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-unresolved': 0
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    'import/resolver': {
      'babel-module': {}
    }
  }
};
