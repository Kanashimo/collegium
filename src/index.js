const express = require('express')
const color = require('ansi-colors')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const port = 5000
app.listen(port , () => {
    console.log(`${color.magentaBright('collegium')} ${color.yellow('[info]')} ${color.dim('->')} ${color.bold(`App listening on port http://localhost:${port}`)}`)
})
