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

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')




// // Multer Example
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined,true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req,res) => {
//     res.send('File uploaded.')
// }, (error, req, res, next) => { // returns a JSON error instead of HTML 
//     res.status(400).send({ error: error.message })
// })

// middleware example 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// Example of Router
// const router = new express.Router()
// router.get('/test', (req,res) => {
//     res.send('This is from my other router.')
// })
// app.use(router)

// const main = async () => {
//     // const task = await Task.findById('5c941d4e72fca166d2b06d2a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5c941d4572fca166d2b06d27')
//     await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' },'tokensignature', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'tokensignature')
//     console.log(data)
// }

// myFunction()

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
