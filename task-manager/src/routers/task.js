const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Task = require('../models/task')
const User = require('../models/user')

router.post('/tasks', auth, async (req, res)=>{
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try{
        await task.save()
        res.status(201).send(task)
    }catch (e)
    {
        res.status(400).send()
    }

   /* t.save().then(()=>{
        res.status(201).send(t);
    }).catch((e)=>{
        res.status(400).send(e)
    })*/
})

//GET tasks?completed=true
//GET tasks?skip=0&limit=3
//GET tasks?sortBy=createdAt:desc
router.get('/tasks', auth, async (req, res)=>{
    const match = {}
    const sort = {}

    if(req.query.completed)
    {
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy)
    {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try{
        await req.user.populate({
            path: 'tasks',
            match,
            options: {
                skip: parseInt(req.query.skip),
                limit: parseInt(req.query.limit),
                sort
            },
        })
        res.send(req.user.tasks)
    }catch (e)
    {
        res.status(500).send(e)
    }

   /* Task.find({}).then((tasks)=>{
        res.send(tasks)
    }).catch((e)=>{
        res.status(500).send(e)
    })*/

})

router.get('/tasks/:id', auth, async (req, res)=>{
    const _id=req.params.id

    try{
        const task = await Task.findOne({_id: _id, owner: req.user._id})
        if(!task)
        {
            return res.status(404).send()
        }
        res.send(task)
    }catch (e)
    {
        res.status(500).send(e)
    }

   /* Task.findById(_id).then((task)=>{
        if(!task)
        {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e)=>{
        res.status(500).send(e)
    })*/
})

router.patch('/tasks/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const validUpdates = ['description', 'completed']
    const isValidUpdate = updates.every((update)=>validUpdates.includes(update))

    if(!isValidUpdate)
    {
        return res.status(400).send({error: 'Invalid update!'})
    }

    try
    {
        const task = await Task.findOne({_id: req.params.id, owner: req.user._id})

        if(!task)
        {
            return res.status(400).send()
        }

        updates.forEach((update)=>task[update]=req.body[update])
        await task.save()
        res.send(task)

    }catch (e)
    {
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id', auth, async (req, res) => {
    try{
        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if(!task)
        {
            return res.status(404).send()
        }

        res.send(task)
    }catch(e)
    {
        res.status(400).send(e)
    }
})

module.exports = router