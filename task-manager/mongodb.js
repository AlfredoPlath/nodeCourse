//CRUD

//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectId} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error, client) => {
    if(error)
        return console.log("Couldn't connect to the database")

    const db = client.db(databaseName)

   /* db.collection('users').insertOne({
        name: 'Alfredo Plath', 
        Age: 34
    }, (error, result) => {
        if(error)
            return console.log("Couldn't insert the user")
        
        console.log(result.insertedId)
    })

    db.collection('tasks').insertMany([
        {name: 'Task One', completed: true},
        {name: 'Task two', completed: true}
    ], (error, result) => {
        if(error)
        return console.log("Couldn't insert the tasks")
    
    console.log(result.insertedIds)
    })

    db.collection('users').findOne({Age:34}, (error, records) => {
        console.log(records)

    })

    const resultado=db.collection('users').find({Age:34}).toArray((error, records) => {
        console.log(records)
    })

    db.collection('tasks').findOne({name: 'Task One'}, (error, record) => {
        console.log(record)
    })

    db.collection('tasks').find({name: 'Task two'}).toArray((error, records) => {
        console.log(records)
    })*/

   /* db.collection('users').updateOne({
        _id: new ObjectId("62d8154c636dac71a63cac52")
    },{
        $set : {
            name: 'Luis Perez'
            }
    }).then((result) => {
        console.log('User updated: '+ result)
    }).catch((error) => {
        console.log(error)
    })*/

   /* db.collection('tasks').updateMany({
        name: 'Task One'
    },{
        $set: {
            completed: false
        }
    }).then((result) => {
        console.log('Success: '+result.acknowledged)
    }).catch((error) => {
        console.log(error)
    })*/

    /*db.collection('users').deleteMany({
        name: 'Luis Perez'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })*/

    db.collection('tasks').deleteOne({
        _id: new ObjectId("62d81da2dff3b288aa03f4c3")
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

})