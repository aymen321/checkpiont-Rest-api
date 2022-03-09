const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
//ADD A NEW USER TO THE DATABASE 
router.post('/SingIN', (req, res) => {
    User.create(req.body)
        .then(data => res.json(data),)
        .catch(err => res.status(500).json(err))
})
//RETURN ALL USERS 
router.get('/List_Users', (req, res) => {
    User.find()
        .then(data => res.json(data),)
        .catch(err => res.status(500).json(err))
})
//RETURN ONE USER 
router.get('/:userid', (req, res) => {
    User.findById(req.params.userid)
        .then(data => res.json(data),)
        .catch(err => res.status(500).json(err))
})
//EDIT A USER BY ID
router.put('/Update/:userid', (req, res) => {
    User.findByIdAndUpdate(req.params.userid, req.body)
        .then(data => res.json(data),)
        .catch(err => res.status(500).json(err))
})
//REMOVE A USER BY ID 
router.delete('/Delete/:userid', (req, res) => {
    User.findByIdAndDelete(req.params.userid)
        .then(data => res.json(data),)
        .catch(err => res.status(500).json(err))
})

module.exports = router