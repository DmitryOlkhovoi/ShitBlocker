const path = require('path');

module.exports = {
  entry: {
    backgroundScript: './backgroundScript.ts',
    contentScript: './contentScript.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts' ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/js')
  }
};