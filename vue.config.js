const path = require('path')

function resolve(dir) {
  // eslint-disable-next-line no-undef
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    devtool: 'source-map',
  },
}