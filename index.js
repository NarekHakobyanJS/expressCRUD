const express = require('express')
const app = express()
const homeRouter = require('./routes/index.js')
const usersRouter = require('./routes/users.js')

// port
const port = 3003
// middleware
app.use(express.json())
app.use('/', homeRouter)
app.use('/users', usersRouter)
app.use(function(req, res, next){
    res.status(400).json({'msg' : 'invalid url address'})
})

// listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
