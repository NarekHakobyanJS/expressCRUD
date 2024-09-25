const express = require('express');
const router = express.Router();
const readUsers = require('../middleware/readUsers.js')
const checkBody = require('../middleware/checkBody.js')
const checkData = require('../middleware/checkData.js')
const fs = require('fs');


router.get('/', readUsers, (req, res) => {
    const {users} = res.locals
    res.status(200).json(users)
})

router.post('/', [readUsers, checkData, checkBody], (req, res) => {
    const {user, users} = res.locals
    users.push(user)
    fs.writeFileSync('./db/users.json', JSON.stringify(users))
    res.status(201).json(user)
})

module.exports = router