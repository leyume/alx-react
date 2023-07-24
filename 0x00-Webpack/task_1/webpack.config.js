const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  module: {},
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
