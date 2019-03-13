const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// /Users/jonathanshek/mongodb/bin/mongod --dbpath=/Users/jonathanshek/mongodb-data

// Create user example

// const me = new User({
//     name: 'Jigglypuff',
//     email: '21savage@savage.com',
//     password: 'boobooboo'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

