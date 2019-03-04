const fs = require('fs')

const dataBuffer = fs.readFileSync('package.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

console.log(user)