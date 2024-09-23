
function checkBody(req, res, next){
    const body = req.body
    if("name" in body && "email" in body){
        let user = {
            id : Math.round(Math.random() * 10000),
            name : body.name,
            email : body.email
        }
        res.locals.user = user
        next()
    }else {
        res.status(422).json({"msg" : "Invalid Data"})
    }
}

module.exports = checkBody