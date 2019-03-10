const { MongoClient, ObjectID } = require('mongodb')

// Connect to MongoDB
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID('5c842de0e9bc3c6ad4d9af28')
    }, {
        $set: {
            name: 'Mike'
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})