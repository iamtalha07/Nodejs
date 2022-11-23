const express = require('express')

const app = express()

app.get('',(req,res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help',(req,res) => {
    res.send([{
        name: 'Talha',
        age: 25
    }, 
    {
        name: 'Spiderman',
        age: 25
    }])
})

app.get('/about',(req,res) => {
    res.send('<h1>About</h1>')
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