const webpackMerge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base');

module.exports = env => {
  const config = webpackMerge(
    baseConfig(env),
    {
      devtool: 'inline-source-map',
      mode: 'development',
      output: {
        filename: '[name].development.js'
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              { loader: 'style-loader', options: { sourceMap: true } },
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'postcss-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }
            ]
          }
        ]
      }
    }
  );
  return config;
};