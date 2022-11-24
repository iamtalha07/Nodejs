const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather',
        name: 'Muhammad Talha'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title:'About',
        name: 'Muhammad Talha'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        helpText: 'This is some helpful text'
    })
})

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'rainy',
        location: 'Karachi'
    })
})


app.listen(3000,() => {
    console.log('Server is up and running on port 3000')
})