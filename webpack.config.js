const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    static: './dist', // Serve files from the 'dist' directory
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Test for .css files
        use: ['style-loader', 'css-loader'], // Use these loaders for .css files
      },
      {
        test: /\.(png|jpg|gif|webp)$/, // Test for image files
        type: 'asset/resource', // Handle them as asset/resource type
      },
      {
        test: /\.(js|jsx)$/, // Test for .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use these presets for React and ES6+ support
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your index.html
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions
  },
};
