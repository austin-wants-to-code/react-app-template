//Imports: dependencies
const path = require('path');
require('@babel/register');

//Webpack config
const config = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  //loaders
  module: {
    rules: [
      //JS files
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /dist/,
        ],
        use: ['babel-loader'],
      },

      //CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      //Text files
      {
        test: /\.txt$/,
        use: ['raw-loader'],
      }
    ]
  },

  plugins: [
  ],

  watch: true,
  watchOptions: {
    ignored: ['./node_modules', './dist', './.git'],
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 12345,
  },
};

module.exports = config;