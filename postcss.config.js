
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({ browsers: ['last 2 versions', 'iOS >= 9', 'Android >= 4.4'] }),
  ]
};