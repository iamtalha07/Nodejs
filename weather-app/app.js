const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f0cc5a578468891387f8402955accea2&query=37.8267,-122.4233&units=m'


request({url:url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
})