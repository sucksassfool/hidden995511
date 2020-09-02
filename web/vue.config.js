const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/' : {
        target: 'http://localhost:3000/',
      },
    },
  }
}
