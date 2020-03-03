module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react", "@babel/typescript"],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  }
};
