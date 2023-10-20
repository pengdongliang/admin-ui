const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    '@': path.resolve(__dirname, '..', 'packages'),
  }

  return config
}
