const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        "mfe-login": "//localhost:4201/main.js",
        mfeHeader: "//localhost:4202/remoteEntry.js",
        mfeBooks: "//localhost:4203/remoteEntry.js",
        "mfe-help": "//localhost:8500/beatrix-mfe-help.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
