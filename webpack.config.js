const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    main: './src/main.js',
    vendor: [
      'jquery',
      'bootstrap/dist/js/bootstrap.min.js',
      'bootstrap/dist/css/bootstrap.min.css',
      'Ionicons/css/ionicons.css',
      'simple-line-icons/css/simple-line-icons.css',
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/kevin-liao/dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" },
    ]
  },
  resolve: {
    modules: ['bower_components', 'node_modules'],
    descriptionFiles: ['package.json', 'bower.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: debug ? '#eval-source-map' : '#cheap-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      ScrollReveal: 'scrollreveal/dist/scrollreveal.js',
    }),
    new HtmlWebpackPlugin({
      template: './index.ejs',
      filename: path.resolve(__dirname, './index.html'),
      title: 'Kevin Liao',
      alwaysWriteToDisk: true,
      chunks: ['main', 'vendor'],
      cache: debug,
      minify: debug ? false : {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      }
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
}

if (!debug) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
