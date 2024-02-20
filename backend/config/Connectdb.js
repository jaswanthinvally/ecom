const mongoose = require('mongoose')
const Connectdb = () => {

// GIVEN CONNECTION STRING OF MONGO DB IN .ENV FILE AND VARIABLE DB_URL

    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("db connected ..... to host : " + con.connection.host)
    })
}

module.exports = Connectdb