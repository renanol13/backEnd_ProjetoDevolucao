const checkToken = require('../middleware/checkToken')
const ReturnController = require('../controllers/ReturnController')

const router = require('express').Router()

router
.post('/', checkToken, (req, res)=>ReturnController.createReturn(req, res))

module.exports = router