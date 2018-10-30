module.exports = {
  presets: [
    'metro-react-native-babel-preset',
    '@babel/env',
    '@babel/typescript'
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ]
};
