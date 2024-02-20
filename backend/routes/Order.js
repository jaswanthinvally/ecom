const express = require('express')
const router = require('./Product')
const { createorder } = require('../controllers/Ordercontrollers')
const routes = express.Router()

router.route("/order").post(createorder)
module.exports = router