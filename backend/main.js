const express = require('express');
const app = express();
const path = require('path')
const dotenv = require('dotenv')
const Connectdb = require('./config/Connectdb')
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const port = process.env.PORT

const products = require('./routes/Product')
const orders = require('./routes/Order')

Connectdb()

app.use(express.json())

app.use("/api/v1/",products)
app.use("/api/v1/",orders)
app.listen(port, () => {
    console.log(`Server is running on port ${port} on ${process.env.NODE_ENV}`);
});

