// continued from mongodb.js
// CRUD - read
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ name: 'Jon' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })
    // to find by objectID, replace findOne argument with { _id: new ObjectID("5c84309cbd533567d476c705") }

    // db.collection('users').find({ age:24 }).toArray((error, users) => {
    //     console.log(users)
    // })

    db.collection('ballers').findOne({leaving:true}, (error, user) => {
        console.log(user)
    })


})