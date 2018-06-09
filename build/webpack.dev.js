const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseWebpack = require('./webpack.base')
const { styleLoaders } = require('./tools')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')

module.exports = merge(baseWebpack, {
  watch: true,
  module: { rules: styleLoaders({ sourceMap: false }) },
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new FriendlyErrorsPlugin()
  ]
})

module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new ChromeExtensionReloader({
      entries: {
        background: 'dist/pages/background',
        options: 'dist/pages/options',
        popup: 'dist/pages/popup',
        contentScripts: 'dist/pages/content',
      },
    }),
  ])
