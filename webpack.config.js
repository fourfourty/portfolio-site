const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';

const setupDevTool = () => {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  resolve: {
    extensions:['.js','.json']
  },
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]',
        },
      },
      {  
        test:/\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
          loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
      {
      test: /\.(ttf|eot|woff|woff2)$/, //svg|
        use: {
          loader: "file-loader",
          options: {
          name: `assets/fonts/[name].[ext]`,
          }
        }
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new webpack.ProvidePlugin({
      $:'jquery',
      JQuery: 'jquery',
      'window.JQuery': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  devServer: {
    port:3000,
    open: true,
    hot: IS_DEV,
  },
  devtool: setupDevTool(),
}