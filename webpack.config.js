const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/index.js", "./src/main.scss"],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  output: {
    filename: "[name].js", // use [name].[has].js for prod
    path: path.resolve(__dirname, "dist"),
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
          //   MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    //
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      //both options are optional
      filename: "[name].css", // use [name][has].css for prod
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
