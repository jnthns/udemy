const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
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

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req,res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// // readUsers
// router.get('/users', auth, async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// readMe
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

// // readUser 
// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send('User not found in MongoDB.')
//         }
        
//         res.send(user)
//     } catch (e) {
//         res.status(500).send('Invalid userId.')
//     }
// })

// updateUser
router.patch('/users/me', auth, async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    // error handling
    // 'every' method goes through every element in the array 
    // returns true if all elements are true
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({Error: 'Invalid updates!'})
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// deleteUser
router.delete('/users/me', auth, async (req,res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router