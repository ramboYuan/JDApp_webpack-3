const path = require('path');
const webpack = require('webpack');
// 自动化创建HTML文件（将vue文件编译为html文件）
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins=[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:"京东金融APP",
      template: './app/views/index.html',
      favicon: './favicon.ico', // 添加小图标
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
  // 区分开发和生产环境
  if(env.production){
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      // 生产环境下，将css文件合成一个css文件style.css
      new ExtractTextPlugin("style.css", {ignoreOrder: true}),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new UglifyJsPlugin({
        sourceMap:true
      })
    )
  }
  return {
    entry: ['./app/js/viewport.js','./app/js/main.js'],
    devtool:'source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      compress: true,
      port: 9000,
      clientLogLevel: "none",
      quiet: true
    },
    module: {
      loaders: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }, {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: { // 加载css-Module
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            extractCSS: true,
            loaders: env.production?{
              css: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
              scss: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
            }:{
              css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            }
          }
        }, {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },
		// 配置：运行时(默认含有)+编译器 
    resolve: {
      extensions: [
        '.js', '.vue', '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins,
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
