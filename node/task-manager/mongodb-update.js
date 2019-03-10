const { MongoClient, ObjectID } = require('mongodb')

// Connect to MongoDB
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    // node mongodb documentation 

    // updateOne
    // filter, update, callback/promise if no callback is provided
    db.collection('users').updateOne({
        _id: new ObjectID('5c842de0e9bc3c6ad4d9af28') // filter
    }, {
        $set: { // update
            name: 'Jon'
        }
    }).then((result) => { // callback/promise
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('ballers').updateMany({
        leaving: true // filter
    }, {
        $set: { // update
            leaving: false
        }
    }).then((result) => { // callback/promise
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
})