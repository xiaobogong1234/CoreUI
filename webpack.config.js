var webpack = require('webpack'),

    HtmlWebpackPlugin = require('html-webpack-plugin'), //模板插件
    ExtractTextPlugin = require("extract-text-webpack-plugin"), //Css分割插件
    CleanWebpackPlugin = require('clean-webpack-plugin'), // 删除插件
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'), //自动注入注解插件
    CopyWebpackPlugin = require('copy-webpack-plugin'), //拷贝文件
    autoprefixer = require('autoprefixer'),
    path = require('path'),

    buildPath = path.resolve(__dirname, "build"), //发布目录
    __DEV__ = process.env.NODE_ENV === 'dev', //发布环境
    publicPath = '/', //资源引用统一前缀
    devtool = '', //source-map模式

    plugins = [
        new HtmlWebpackPlugin({
            chunks: ['app', 'vendor'],
            template: __dirname + '/www/template/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'www/lib/',
            to: 'lib/'
        }], {
            ignore: [],
            copyUnmodified: true,
            debug: "debug"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'script/vendor.[hash:6].js'
        }),
        new ExtractTextPlugin("css/styles.[hash:6].css"),
        new CleanWebpackPlugin('build', {
            verbose: true,
            dry: false
        }),
        new NgAnnotatePlugin({
            add: true
        })


    ];

if (!__DEV__) {
    //压缩
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));

    publicPath = process.env.NODE_ENV == 'test' ? 'test.domain.com' : '/';
    devtool = 'source-map';
}

var config = {
    //入口文件配置
    entry: {
        app: path.resolve(__dirname, 'www/js/app.js'),
        vendor: ["angular", "bootstrap-table", "bootstrap-loader"]
    },
    //文件导出的配置
    output: {
        path: buildPath,
        filename: "script/[name].[hash:6].js",
        publicPath: publicPath,
        chunkFilename: "chunks/[name].chunk.[chunkhash].js"
    },
    //本地服务器配置
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true
    },
    //模块配置
    module: {
        loaders: [　{　　　　　　
                test: /\.html$/,
                loader: 'html-withimg-loader'　　　　
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192,name=img/[name].[hash:6].[ext]'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=fonts/[name].[ext]'
            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // ,{  //内联
            //     test: /\.scss$/,
            //     loaders: ['style', 'css', 'sass','postcss']
            // }
        ]
    },

    postcss: function() {
        return [autoprefixer()];
    },
    //插件配置
    plugins: plugins,
    //调试配置
    devtool: devtool
}

module.exports = config;