const path = require('path');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react',
            '@babel/typescript'
          ]
        }
      }
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.js'] },
  devServer: {
    contentBase: './',
    port: 5000
  }
}