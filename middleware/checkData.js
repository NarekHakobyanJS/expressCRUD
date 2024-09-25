
function checkData(req, res, next){
    const {email} = req.body
    const {users} = res.locals;

    const duplicateEmail = users.some((u) => u.email === email)

    if(duplicateEmail){
        res.status(409).json({"msg" : "duplicate Data"})
    }else {
        next()
    }
}

module.exports = checkData
