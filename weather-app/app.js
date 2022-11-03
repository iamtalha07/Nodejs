const request = require('request')
const geocode = require('./utils/geocode')
// const url = 'http://api.weatherstack.com/current?access_key=f0cc5a578468891387f8402955accea2&query=37.8267,-122.4233&units=m'

// request({url:url, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

//Geocoding 
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGFsaGFiaW5pc2hhcXVlIiwiYSI6ImNsYTAxNDQwNjA0NnQzb3J3Zjd3NGl1cHEifQ.L8mioobJbfMVgk-_Rwarcg&limit=1'

// request({url:geocodeURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to location service!')
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(longitude,latitude)
//     }
// })



geocode('Karachi', (error, data) => {
    console.log("Error",error)
    console.log("Data",data)
})