const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=f0cc5a578468891387f8402955accea2&query=37.8267,-122.4233'
    
const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', (chunk) => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

response.on('error', (error) => {
    console.log(error)
})

request.end()