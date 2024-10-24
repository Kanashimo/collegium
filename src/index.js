const express = require('express')
const color = require('ansi-colors')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    //res.render('index')
    res.redirect('test')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/user', (req, res) => {
    res.redirect('/user/home')
})

app.get('/user/home', (req, res) => {
    res.render('user/home')
})

app.get('/test', (req, res) => {
    res.render('test')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const port = 5000
app.listen(port , () => {
    console.log(`${color.magentaBright('collegium')} ${color.yellow('[info]')} ${color.dim('->')} ${color.bold(`App listening on port http://localhost:${port}`)}`)
})
