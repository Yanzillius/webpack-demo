const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,  
    poll: 1000
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.(css|scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './', 'dist'),
    compress: true,
    hot: true,
    port: 9000,
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './', 'src/index.html'),
    }),
  ],
};