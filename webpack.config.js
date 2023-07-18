const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/index.js",
    home: "./src/js/home.js",
    menu: "./src/js/menu.js",
    contact: "./src/js/contact.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"), // Set the static directory to the source directory
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Vesuvio",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      minify: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/style.css", to: "" }, // Adjust the source and destination paths accordingly
      ],
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
