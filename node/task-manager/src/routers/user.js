const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get('/test', (req,res) => {
    res.send('From a new file')
})

// createUser
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send()
    }
})

// loginUser
router.post('/users/login', async (req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        console.log(token)
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

// readUsers
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

// readUser 
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }
        
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

// updateUser
router.patch('/users/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    // error handling
    // every method goes through every element in the array 
    // returns true if all elements are true
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({Error: 'Invalid updates!'})
    }

    try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

       // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true,  runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// deleteUser
router.delete('/users/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send("User doesn't exist.")
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router