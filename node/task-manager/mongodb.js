// CRUD - Create Read Update Delete
//############################################################

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// shorthand for requiring all those above this line
const { MongoClient, ObjectID } = require('mongodb')

// Connect to MongoDB
// /Users/jonathanshek/mongodb/bin/mongod --dbpath=/Users/jonathanshek/mongodb-data
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Test',
        age: 500
    })

//##################### CREATE ################################

// If you want to create an ID for user
// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

//####### Insert one user into MongoDB
    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Bobby',
    //     age: 32
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

//####### Insert many users
    // db.collection('users').insertMany([
    //         {
    //         name:'Jon',
    //         age: 24
    //     }, {
    //         name: 'Lebron',
    //         age: 34
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to add new users')
    //     }

    //     console.log(result.ops)
    // })

//####### Insert many with boolean
    // db.collection('ballers').insertMany([
    //     {
    //         name: 'KD',
    //         leaving: true
    //     }, {
    //         name: 'DMC',
    //         leaving: true
    //     }, {
    //         name: 'SC',
    //         leaving: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('mistakes were made')
    //     }
        
    //     console.log(result.ops)
    // })

//##################### READ ################################

//####### Find by parameter
    // db.collection('users').findOne({ name: 'Jon' }, (error, user) => {
    //     console.log(user)
    // })
    // to find by objectID, replace findOne argument with { _id: new ObjectID("5c84309cbd533567d476c705") }

//####### Place results in array using cursor 
    // db.collection('users').find({ age:24 }).toArray((error, users) => {
    //     console.log(users)
    // })
})
