const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const cleanOptions = {
  root:     '',
  exclude:  [''],
  verbose:  true,
  dry:      false
};


module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  plugins: [
    new CleanWebpackPlugin([
        'dist'
    ], cleanOptions)
  ]
};