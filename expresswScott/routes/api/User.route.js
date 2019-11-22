const express = require('express')
const router = express.Router()
const mockData = require("../../data/mock.json")

router.get("/user" , (request, response) => {
    response.json(mockData)
})

module.exports = router;