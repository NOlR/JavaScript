const express=require('express');
const app=express();
const post=2020;
app.use(express.static('public'));

app.get('/article',(req,res)=>{
	console.log(req.query);
	const username=req.query.user;
	const password=req.query.pwd;
	if(username==='Noir'&& password==='qwq')
	res.send("登陆成功");
	else
	res.send("无此用户");
})

app.listen(post,()=>{
	console.log(`服务运行在${post}端口`);
})