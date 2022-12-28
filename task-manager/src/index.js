const express = require('express')
const mongoDB = require('./db/mongoose')
const userRoutes = require('./routers/user')
const taskRoutes = require('./routers/task')

const app=express()
const port = process.env.port

/*app.use((req, res, next) => {
    res.status(503).send("Service is currently down. Check back soon!!")
})*/

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)

app.listen(port, ()=>{
    console.log('Server is up on port '+port)
})

/*const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    const task = Task.findById('63a5b46e3509945d2dc0afd7')
    await task.populate('owner')
    console.log(task)

    const user = User.findById('63a57d3c4de6527c952742ee')
    await user.populate('tasks').execPopulate()
    console.log(user.task)
}

main()*/