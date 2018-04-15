const path = require('path');

module.exports = env => {
  return {
    context: path.resolve(__dirname, '../src/'),
    entry: {
      gmodal: './index'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      library: 'GModal',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /node_modules/,
        },
      ]
    },
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
      }
    }
  };
};
