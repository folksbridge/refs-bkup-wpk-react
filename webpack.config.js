const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'static/js/[name].[hash].js'
  },

  //mode: "development",
  devtool: 'source-map',

  devServer: {
    //contentBase: path.join(__dirname, "public/"),
    contentBase: false,
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
    open: true
  },

  resolve: { extensions: ['*', '.js', '.jsx'] },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
        //loader: 'babel-loader'
        //options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // }
      {
        test: /\.(css|scss)$/,
        //use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'static/css/style.[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
