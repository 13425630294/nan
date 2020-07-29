const express = require('express')
const path = require('path')
const app = express()
// app.use(express.static(path.join(__dirname,'public')))
app.use('/public',express.static('./public/'))
app.listen(3000,()=>{
    console.log('客户端发起请求')
})
console.log('启动成功')
app.get('/first',function (req,res){
    res.send('111')
})