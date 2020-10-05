const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");

const BUILD_DIR = path.resolve(__dirname, "dist");
const CLIENT_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: {
    main: `${CLIENT_DIR}/index.js`
  },
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${CLIENT_DIR}/index.html`
    }),
    new WebpackBar({
      color: "#21c8ed"
    })
  ],
  resolve: {
    alias: {
      Components: `${CLIENT_DIR}/components`,
      Hooks: `${CLIENT_DIR}/hooks`,
      Config: path.resolve(__dirname, "src/config.json")
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 9898,
    publicPath: "/",
    stats: "minimal"
  }
};
