const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const data = JSON.parse(dataString)

data.name = "Talha"
data.age = "25"

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',dataJSON)