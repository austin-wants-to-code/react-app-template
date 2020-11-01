require('@babel/register');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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

  //TODO - Need move dev configs to own file 
  performance: {
    hints: false,
  },

  plugins: [
    //HMR
    new webpack.HotModuleReplacementPlugin(),
    
    //Remove all unused webpack files after a build
    new CleanWebpackPlugin(),

    //Create output HTML page with scripts tags based on template
    new HtmlWebpackPlugin({
      title: 'React App Template',
      template: './src/template.html',
      filename: 'index.html',
    }),
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    hot: true,
    port: 12345,
    watchOptions: {
      ignored: ['./node_modules', './dist', './.git'],
    },
  },
};

module.exports = config;