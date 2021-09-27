const { merge } = require("webpack-merge");
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  ["shared-balance"]);

module.exports = (config, options) => {


  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  
  return merge(singleSpaWebpackConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new ModuleFederationPlugin({
        name: "mfeBooks",
        filename: "remoteEntry.js",
        exposes: {
          'mfeBooks': "./src/main.single-spa.ts",
        },
        shared: share({
          "shared-balance": { singleton: true, eager: true },
          ...sharedMappings.getDescriptors()
        })
      })
    ]
  });
};
