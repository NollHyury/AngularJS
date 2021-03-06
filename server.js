const express = require('express')
const app = express()
const port = 9090

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.static(__dirname + '/web'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})