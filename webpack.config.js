const path = require('path');
// const Dotenv = require('dotenv-webpack');
require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    // new Dotenv({
		// 	safe: true,
		// 	systemvars: true,
		// 	defaults: false,
    // }),
    new webpack.DefinePlugin({
			'process.env.REACT_APP_PAYPAL_ID': JSON.stringify(process.env.REACT_APP_PAYPAL_ID),
      'process.env.REACT_APP_POSITIONSTACK': JSON.stringify(process.env.REACT_APP_POSITIONSTACK),
		}),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.svg', to: 'assets' },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
