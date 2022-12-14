const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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
        helpText: 'This is some helpful text',
        title:'Weather',
        name: 'Muhammad Talha'
    })
})

app.get('/weather',(req,res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if(error) {
            return res.send({
                error: error
            })
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return res.send({
                    error: error
                })
            }
            res.send({
                forecast: forecastData,
                location,                       //location: location
                address: req.query.address
            })
        })
    })
})

//Only single res is allowed
app.get('/products',(req,res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: [],
    })
})

app.get('/help/*',(req,res) => {
    res.render('404',{
        title: '404',
        name: 'Talha',
        errorMessage: 'Help article not found'
    })
})

app.get('*',(req,res) => {
    res.render('404',{
        title: '404',
        name: 'Talha',
        errorMessage: 'Page not found'
    })
})


app.listen(3000,() => {
    console.log('Server is up and running on port 3000')
})