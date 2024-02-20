const mongoose = require('mongoose')


const Orderschama = mongoose.Schema({
    Cartitems: Array,
    Amount: String,
    Status: String,
    createdAt: Date
})

const Ordermodel = mongoose.model("orders", Orderschama)

module.exports = Ordermodel