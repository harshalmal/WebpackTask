const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.ts',
     print: './src/print.ts',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
   output: {
     filename: 'main.bundle.ts', //'[name].bundle.js'
     path: path.resolve(__dirname, 'dist'),
   },
 };