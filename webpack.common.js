const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/main.js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      public: path.resolve(__dirname, "./public"),
    },
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
