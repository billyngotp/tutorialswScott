const express = require('express')
const router = express.Router()
const mockData = require("../../data/mock.json")
const jwt = require("jsonwebtoken");
const secret = "sfwneigmiweofwef"

router.get("/" , (request, response) => {
    response.json(mockData)
})

router.get('/login', (request, response) => {
    response.send(jwt.sign({},secret));

})

module.exports = router;