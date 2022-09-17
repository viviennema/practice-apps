require("dotenv").config();
//const webpack = require('webpack');

const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname,"client/src/","index.jsx"),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,"client/dist")
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "http": false,
        "https": false,
        "zlib": false ,
        "path": false,
        "stream": false,
        "util": false,
        "crypto": false,
        "url": false,
        "vm": false,
        "querystring": false,
        "os": false,
        "esbuild": false,
        "uglify-j": false,
        "worker_threads": false,
        "@swc/core": false,
        "uglify-js": false,
        "child_process": false,
        "assert": false,
        "constants": false,
    } 
},   
 plugins: [
  new NodePolyfillPlugin()
]


}
