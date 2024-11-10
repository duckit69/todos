const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebPackPlugin({
    template: './src/index.html',
  })],
  devtool: 'eval-source-map',
  devServer: {
    watchFiles: ["./src/index.html", "./src/style.css"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

};
