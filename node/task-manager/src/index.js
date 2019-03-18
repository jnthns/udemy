// Start MongoDB - paste below command into terminal
// /Users/jonathanshek/mongodb/bin/mongod --dbpath=/Users/jonathanshek/mongodb-data
// cd task-manager, npm run dev

// Router script starts up express and creates paths 

const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Example of Router
// const router = new express.Router()
// router.get('/test', (req,res) => {
//     res.send('This is from my other router.')
// })
// app.use(router)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' },'tokensignature', { expiresIn: '7 days'})
    console.log(token)

    const data = jwt.verify(token, 'tokensignature')
    console.log(data)
}

myFunction()


// // Secure passwords using bcryptjs
// const bcrypt = require('bcryptjs')

// const hashingPasswordTutorial = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     // hashed passwords are one way strings
//     // use compare method to see if they are the same password
//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch)
// }