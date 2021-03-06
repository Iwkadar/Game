
const webpack = require('webpack')
const path = require('path')

const config = {
  entry: {
    app: './app',
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true

  },
  resolve: {
    modules: ['node_modules', 'lib', 'app'],
  },
  module: {
    rules: [
    {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              hash: 'sha512',
              digest: 'hex',
              name: '[hash].[ext]',
            },
          }, {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      }, {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['./app'],
          },
        }],
      }, {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      }
    ]
  }
};

module.exports = config;
