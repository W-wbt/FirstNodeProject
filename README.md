# FirstNodeProject
my first node project

This is my first-nodeProject,
i just want to write some web-pages to validation some of my study results in this months.

##项目使用技术

    * html 
    * css 
    * nodejs 
    * express
    * jquery 
    * js

##项目结构
***
    项目基本符合express框架
    interface 接口相关
    api.js 调用java的接口
    config.js  配置接口ip以及端口号
    lib node工具库
    template-helper  模板引擎帮助类
    routes 后端路由
    public 包含前段所需资源 静态界面 样式 图片 和 javascript
    views 前端模板文件

##项目安装以及启动
>npm install
>
>npm run dev
>
>浏览器打开 地址 localhost:3000

##项目流程

##项目注意细节
***
###所有接口的请求方式采取post请求

```
request.post({
    url: api.header,
	form: header
	}, function(error, response, body) {
        	if (!error && response.statusCode == 200) { 
            } else {
           	 res.send({
                "code": 9999,
                "message": "ERROR"
            	});
        	}
    	})
```


###后端逻辑判断部分

要将程序写的相对比较健壮

异常部分都要将异常抛出

根据具体逻辑来判断是跳转到崩溃页面还是输出错误结果
例如：
```
res.send({
                "code": 9999,
                "message": "ERROR"
  });
```
###前端请求接口

使用ajax请求接口
```
commonAjax('/flight/refundRule', param, function(data) {
        console.log(data);
        if (data.code == '1000') {
           
        } else {
            error(data.message);
        }
    });
```

###模板引用

使用art-template模板 具体语法请登录官网学习

```
//<script id="righttpl" type="text/html">
//{{include './right'}}
//</script>

```

 要注意引入模板如果这个模板有业务逻辑，请引入对应js文件
 如果可以封装的模块一定要封装成模板

###要注意区分前端模板和后端模板的帮助方法

一般使用比较多是前端模板

位置public/javascripts/common/template-helper 
