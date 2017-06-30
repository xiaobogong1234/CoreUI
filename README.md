#angular-webpack打包说明

> 基于nodejs开发的前端项目模板，依赖nodejs开发环境。

## 编译过程
    
``` 
# 安装依赖
npm install

# 启动热加载服务，访问地址http://localhost:8080，支持生成环境下调试代码
npm run dev

# 发布代码，不支持调试，发布目录为public。访问地址为public文件夹中的index页面
webpack -p

```

##使用的相关技术 


>1、模块工具
Webpack 1.14.0

>2、打包模块
angualr 
angular-ui-router 
oclazyload 
bootstrap 
font-awesome 
CoreUI

>3、打包第三方依赖(复制到lib目录)
jquery

>4、支持angular方法
factory
directive
route
filter
支持功能模块懒加载
支持ng-include

>5、支持文件类型
js,css,html,less,sass,图片,字体文件等

##开发环境(www)
>开发环境中分为ajs(项目入口),img,css,lib(第三方库),template(index模板,需要引入第三方库),view(功能模块)

##发布环境(build)
>发布环境中分为chunks(懒加载模块)，fonts(打包的字体文件),img(打包的图片),lib(复制第三方库),script(打包的js文件)和index.html

