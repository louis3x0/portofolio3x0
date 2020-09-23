const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/app.scss"],
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].js", // use [name].[has].js for prod
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  module: {
    rules: [
      // Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          /* MiniCss for Prod, style-loader for dev */
          MiniCssExtractPlugin.loader,
          //   'style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // images
      {
        test: /\.(png|PNG|svg|jpg|gif|ico)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    //
    new CleanWebpackPlugin(["build"]),
    new CopyPlugin([
      { from: "./src/images/favicon.ico" },
      { from: "_redirects" },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      //both options are optional
      filename: "[name].css", // use [name][has].css for prod
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({ favicon: "./src/images/favicon.ico" }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()],
      },
    }),
  ],
};
