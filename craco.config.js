const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [],
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.cache = {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, 'node_modules/.cache'),
      };

      webpackConfig.module.rules = [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
        },
        {
          test: /\.m?js/,
          type: 'javascript/auto',
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
      ];

      webpackConfig.resolve.extensions = ['.*', '.js', '.jsx', '.ts', '.tsx'];

      return webpackConfig;
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        PORTAL_URL: process.env.PORTAL_URL,
      }),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  eslint: {
    mode: 'file',
  },
};
