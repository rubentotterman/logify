import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';
import path from 'path';

export default {
  mode: 'production',
  entry: './src/main.js', // Entry point
  output: {
    filename: 'bundle.js', // JS output file
    path: path.resolve(process.cwd(), 'dist'), // Output to 'dist' folder
    clean: true, // Automatically clean the 'dist' folder before build
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new Dotenv(),
  ],
};
