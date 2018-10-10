var path = require('path');
var webpack = require('webpack');


module.exports = {  
  entry: { 
    index: "./index.ts",
	
  }
  
  // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
	
  target: 'node',
  
  module: {
    loaders: [
      // { test: /\.ts(x?)$/, loader: 'ts-loader' },      
      { test: /\.json$/, loader: 'json-loader' },
	  // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ],
	
	preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
  },
  
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
    ],
	
  resolve: {
	  // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.js', '.json', '', '.webpack.js', 'web.js', '.tsx']
  },
  
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'lib'),
    filename: '[name].js'
  },
};