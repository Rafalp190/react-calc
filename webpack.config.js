const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: ['url-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
}
module.exports = config
