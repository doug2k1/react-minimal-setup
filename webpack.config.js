const path = require('path')

module.exports = (env) => ({
  mode: env === 'prod' ? 'production' : 'development',
  
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
})
