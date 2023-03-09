const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.send("GET Request")
    })
    .post('/', (req, res) => {
        res.send("POST Request")
    })
    .put('/:id', (req, res) => {
        res.send("UPDATE Request")
    })
    .delete('/:id', (req, res) => {
        res.send("DELETE Request")
    })
    
module.exports = router