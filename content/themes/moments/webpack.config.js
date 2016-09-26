var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './assets/js/index',
    './assets/style/index.scss'
  ],
  output: {
    path: path.join(__dirname, 'assets/bundle'),
    filename: 'bundle.js',
    publicPath: '/assets/js/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {
        allChunks: true
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass'])
      }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
