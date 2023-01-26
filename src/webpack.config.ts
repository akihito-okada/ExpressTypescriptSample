import * as path from "path";
import * as webpack from "webpack";
import nodeExternals from "webpack-node-externals";
const config: () => webpack.Configuration = () => {
  return {
    mode: "development",
    target: ["node", "es2020"],
    externals: [nodeExternals()],
    entry: {
      app: path.resolve(__dirname, "src/index"),
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: [/node_modules/],
          options: {
            configFile: "tsconfig.json",
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts"],
    },
    devtool: "cheap-module-source-map",
  };
};
export default config;
