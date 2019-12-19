const path = require('path');
const rules = [
  {
    test: /\.jsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    exclude: "/node_modules"
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 40000
        },
      },
      'image-webpack-loader',
    ],
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: './',
    port: 5000
  }
}