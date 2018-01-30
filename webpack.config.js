//config for webpack
var webpack = require('webpack');
var path = require('path');

//setup
module.exports = {
  //gives line number for debugging
  devtool: 'inline-source-map',
  //define what file to look for.
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8000/', //setup
    'webpack/hot/only-dev-server', //live-reloading
    './src' //initial file - default: index.js
  ],
  output: { 
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //webpack will look for the file to bundle
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['','.js']
  },
  module: {
    loaders:[
      {
        test: /\.jsx?$/,
        exclude:/node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react.presets[]=es2015']
      }
    ]
  },
  plugins: {
    new webpack.HotModuleReplacePlugin(),
    new webpack.NoErrorsPlugin()
  }

};
