const mongoose = require('mongoose')
const Productschema = new mongoose.Schema({
    name: String,
    price: String,
    discription: String,
    rating: String,
    images: [
        {
            image: String

        }
    ],
    category: String,
    seller: String,
    stock: String,
    noforeview: String,
    createdat: Date

})

const Productmodles = mongoose.model("products",Productschema)

module.exports = Productmodles