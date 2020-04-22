const express = require('express')

var app = express()

// 公开指定目录
app.use('/public/', express.static('./public/'))

app.get('/', (req, res) => {
    res.send('hello express')
})
app.get('/da', (req, res) => {
    const { statusCode } = res
    let err
    if (statusCode !== 200) {
        err = new Error('请求失败\n' + `状态码:${statusCode}`)
        throw err
    }
    res.send('hello aaa')
})
app.listen(3000, (err) => {
    if (err) throw err
    console.log('express server is running at http://localhost:3000')
})
