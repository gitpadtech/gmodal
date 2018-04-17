if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/gmodal.production.min');
} else {
  module.exports = require('./dist/gmodal.development');
}
