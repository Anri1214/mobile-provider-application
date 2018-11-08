const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/app/app.module.js',
    './src/scss/index.scss'
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/app'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: false
                }
              ],
            ],
            plugins: [
              'angularjs-annotate',
              '@babel/plugin-proposal-class-properties'
            ],
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('cssnano')({
                  preset: ['default', {
                    discardComments: {
                      removeAll: true,
                    },
                  }]
                })
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './fonts'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/provider': {
        target: process.env.API_URL || 'http://localhost:3000'
      }
    },
    port: process.env.PORT || 8081,
    host: process.env.HOST || '127.0.0.1',
  },
  performance: {
    hints: false
  }
};
