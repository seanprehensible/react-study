const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "app-setup",
  mode: "development", // production
  devtool: "eval",

  /* 입력 */
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: ["./client"],

  /* 적용할 모듈 */
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // https://github.com/browserslist/browserslist#full-list
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: ["react-refresh/babel"] /* 핫 리로딩 */,
        },
      },
    ],
  },

  /* 확장 프로그램 */
  plugins: [new RefreshWebpackPlugin()] /* 핫 리로딩 */,

  /* 출력 */
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },

  /* 웹팩 데브 서버 */
  devServer: {
    devMiddleware: {
      publicPath: "/dist" /* 메모리에 저장 */,
    } /* 웹팩 실행 시 생성되는 경로 */,
    static: {
      directory: path.resolve(__dirname),
    } /* 실제 존재하는 파일이 위치한 경로 */,
    hot: true /* 핫 리로딩 - 변경점 감지 */,
  },
};
