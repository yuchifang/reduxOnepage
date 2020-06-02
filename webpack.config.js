const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : './src/index.jsx',
  output : {
    path: path.join(__dirname, '/dist'),
    filename : 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js?x$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html' // => 以主目錄的 index 為範本
    })
  ]
}