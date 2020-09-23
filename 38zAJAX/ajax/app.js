/*
    1、安装nodejs 然后输入 node -v  和 npm -v 检查nodejs是否安装成功
    2、切换下载源: npm config set registry https://registry.npm.taobao.org
    3、进入文件夹  shift + 鼠标右键 选择打开 power shell
    4、在power shell 里边输入 npm init -y
    5、输入 npm i express 等待安装完成之后
    6、输入npm i body-parser
    7、开始愉快的写代码
    8、nodemon app.js 把服务跑起来
*/

const express = require('express');//引入express这个框架

const app = express();//主程序
const port = 3000;//端口号 

app.use( express.static('public') );//在这里边输入一个文件夹的名字

//在后端给他添加一个接口，这个接口会把一根笔跟他 res向前端发送数据的，req前端发送过来的数据
app.get('/wanzhang', (req, res) => {
    console.log(req.query.some);//前端通过路由参数发送过来的数据都放在req.query
    if( req.query.some === 'huoji' ){
        res.send('一支笔')
    }else{
        res.send('白嫖是不会让你白嫖的');
    }
})//只会接收get请求

app.get('/login',(req,res) => {
    console.log(req.query)
    const username = req.query.username;
    const passworld = req.query.passworld;
    if( username === 'hanlu' && passworld === '123' ){
        res.send('登录成功')
    }else{
        res.send('此用户不存在')
    }
})

app.listen( port, () => {
    console.log(`服务运行在${port}端口`);
} )
