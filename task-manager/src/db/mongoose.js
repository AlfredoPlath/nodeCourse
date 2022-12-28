const mse = require('mongoose')
//const vdtr = require('validator')

mse.connect(process.env.MONGODB_URL,{
})

/*const User  =   mse.model('User',{
    name:{
        type: String
    },
    age: {
        type: Number
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes('password'))
             throw new Error('Password cant have password within')
        }
    }
})

const me = new User({name: 'Alfredo', age: 34, password:'passd'})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!', error)
})

const tsk = mse.model('Task',{
    Description: { 
        type: String,
        required: true,
        trim: true
    },
    Completed: {
        type: Boolean,
        default: false
    }
})

const task=new tsk({Description: '     Do the thing'})

task.save().then(()=>{
    console.log(task)
})
.catch((error)=>{
    console.log('Error!', error);
})*/