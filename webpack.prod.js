import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { GenerateSW } from 'workbox-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.html',
    }),
    new GenerateSW(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
