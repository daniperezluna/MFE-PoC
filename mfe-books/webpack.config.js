const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  ["shared-balance"]);

module.exports = {
  output: {
    uniqueName: "mfeBooks",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
         name: "mfeBooks",
         filename: "remoteEntry.js",
         exposes: {
             './Module': './/src/app/books/books.module.ts',
         },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto'},
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto'},
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto'},
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto'},
          "shared-balance": { singleton: true, requiredVersion: 'auto'},

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
