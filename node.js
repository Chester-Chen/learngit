const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 解析POST请求体body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

function CORS (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    next();
}

app.get('/api/getTest', CORS, function (req, res) {
    if (req.query.name === undefined || req.query.age === undefined) {
        res.json({
            code: 204,
            data: null,
            message: '缺少参数'
        })
    } else {
        res.json({
            code: 200,
            data: `恭喜年龄为${req.query.age}的${req.query.name}工程师，GET接口调用成功`,
            message: 'OK'
        })
    }
})

app.post('/api/postTest', CORS,  function (req, res) {
    if (req.body.name === undefined || req.body.age === undefined) {
        res.json({
            code: 204,
            data: null,
            message: '缺少参数'
        })
    } else {
        res.json({
            code: 200,
            data: `恭喜年龄为${req.body.age}的${req.body.name}工程师，POST接口调用成功`,
            message: 'OK'
        })
    }
})

app.listen(3000, 'localhost', function () {
    console.log('server is running at port 3000');
})