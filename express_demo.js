// express_demo.js 文件
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer  = require('multer');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/', function (req, res) {
	console.log("主页 GET 请求");
	res.end('Hello GET');
})

app.get('/index.html', function (req, res) {
	res.sendFile('./index.html');
})

app.post('/process_get', urlencodedParser , function (req, res) {
	
	// 输出 JSON 格式
	var response = {
		"first_name":req.body.first_name,
		"last_name":req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response))
})

app.post('/file_upload', function (req, res) {
	console.log(req.files[0]);  // 上传的文件消息
	
	var des_file = _dirname + "/" + req.files[0].originalname;
	fs.readFile( req.files[0].path, function (err, data) {
		fs.writeFile(des_file, data, function (err) {
			if(err){
				console.log( err );
			}else{
				response = {
					message:'File uploaded successfully',
					filename: req.files[0].originalname
				};
			}
			console.log( response );
			res.end( JSON.stringify( response ) )
		});
	});
})

// POST 请求
app.post('/', function (req, res) {
	console.log("主页 POST 请求");
	res.end('Hello Post');
})

// /del_user 页面响应
app.get('/del_user', function (req, res) {
	console.log("/del_user 响应 DELETE 请求");
	res.end('删除页面');
})

// /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
	console.log("/list_user GET 请求");
	res.end('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function (req, res) {
	console.log("/ab*cd GET 请求");
	res.end('正则匹配');
})

var server = app.listen(8081, function () {
	
	var host = server.address().address
	var port = server.address().port
	
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})