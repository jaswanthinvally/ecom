const express = require('express')
const { getproduct, getsingleproducts } = require('../controllers/ProductControllers')
const router = express.Router()

router.route("/products").get(getproduct)
router.route("/products/:id").get(getsingleproducts)
module.exports = router