const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "anonymous.js",
    library: "anonymous",
    libraryTarget: "window",
    module: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.png$/i,
        use: {
          loader: "url-loader",
          options: {
            generator: (content, mimetype, encoding) => {
              return `data:${mimetype}${
                encoding ? `;${encoding}` : ""
              },${content.toString(encoding)}`;
            },
          },
        },
      },
    ],
  },
  target: ["web"],
  devtool: "source-map",
};
