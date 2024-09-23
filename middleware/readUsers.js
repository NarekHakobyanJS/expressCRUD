const fs = require('fs');

function readUsers(req, res, next){
    const data = fs.readFileSync('./db/users.json', 'utf-8');
    const users = JSON.parse(data)
    res.locals.users = users;
    next()
}

module.exports = readUsers