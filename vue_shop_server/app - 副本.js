const express = require('express')
const compression = require('compression')

// 创建web服务器
const app = express()

// 托管静态资源
app.use(compression())
app.use(express.static('./dist'))

const router = express.Router()
app.use('router', router)
app.get('*', function(req, res) {
    console.log('404 handler...')
    console.log(res);
})

// 启动服务器
app.listen(80, () => {
    console.log('vue-shop is now running at http:127.0.0.1')
})