 const path = require('path');
     
 module.exports = {
     entry: './client/index.js',
     output: {
         path: path.join(__dirname, '/public/dist'),
         filename: 'bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };