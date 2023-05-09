const user = require("../contollers/contoller.js")
const router = require('express').Router()

router.post('/addUser',user.adduser)
router.get("/allusers",user.getAllusers);

module.exports = router