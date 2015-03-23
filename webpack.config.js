/* jshint node:true */
var webpack = require("webpack");

module.exports = {
  entry: "./src/mickey.js",
  output: {
    library: "Mickey",
    libraryTarget: "umd",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?experimental&optional=runtime" }
    ]
  }
};
