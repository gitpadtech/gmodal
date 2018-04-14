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
    }
  };
};
