const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=f0cc5a578468891387f8402955accea2&query=37.8267,-122.4233'


request({url:url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})