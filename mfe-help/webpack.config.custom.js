const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = options => {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            publicPath: "http://localhost:4000/",
            uniqueName: "mfeHelp"
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                presets: ['@babel/react', '@babel/env']
                            }
                        },
                    ],
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        plugins: [
            new ModuleFederationPlugin({

                // For remotes (please adjust)
                name: "mfeHelp",
                filename: "help-remoteEntry.js",
                exposes: {
                    './help': './src/bootstrap.js',
                },

                shared: {
                    "react": { singleton: true, eager: true },
                    "react-dom": { singleton: true, eager: true }
                }
            })
        ],
        devServer: {
            port: 4000
        }
    }
}
