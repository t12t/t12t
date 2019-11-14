module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    'jsx-a11y/label-has-for': [ 'error', {
      'required': {
        'some': [ 'nesting', 'id']
      }
    }]
  }
};