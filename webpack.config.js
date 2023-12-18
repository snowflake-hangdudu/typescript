//引入一个包
const path = require("path");

//引入html插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

//引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中的所有的配置信息都应该写在module.exports的对象
module.exports = {
  mode: "development",
  //指定入口文件
  entry: "./src/index.ts",
  //指定出口文件
  output: {
    //指定输出路径
    path: path.resolve(__dirname, "dist"),
    //指定输出文件名
    filename: "bundle.js",
  },
  //指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        //指定规则生效的文件
        test: /\.ts$/,
        //指定要使用的loader
        use: "ts-loader",
        //排除node_modules
        exclude: /node_modules/,
      },

      //设置less文件的处理
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", 
        //引入postcss配置
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    // 其他选项
                    browsers: "last 2 versions",
                  },
                ],
              ],
            },
          },
          

        },
        "less-loader"],
      },
    ],
  },

  //配置webpack插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],

  // 配置webpack解析模块选项
  resolve: {
    extensions: [".ts", ".js"],
  },
};
