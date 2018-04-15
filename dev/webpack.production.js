const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const baseConfig = require('./webpack.base');

module.exports = env => {
  const entractCss = new ExtractTextPlugin({
    filename: 'gmodal.css'
  });
  const config = webpackMerge(
    baseConfig(env),
    {
      mode: 'production',
      output: {
        filename: '[name].production.min.js'
      },
      module: {
        rules: [
          {
            test: /\.scss/,
            use: entractCss.extract({
              fallback: 'style-loader',
              use: [
                { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } }
              ]
            })
          }
        ]
      },
      plugins: [
        entractCss
      ]
    }
  );
  return config;
};