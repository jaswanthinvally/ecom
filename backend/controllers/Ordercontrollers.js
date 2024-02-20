
// THIS MODEL CONTAINS THE SCHEMA FOR ORDER 
const Ordermodels = require('../models/Ordermodles')

//CREATE ORDER API ---  POST --- http://localhost:6600/api/v1/order


// VARIABLE DECLERATION
exports.createorder = async (req, res, next) => {
    const Cartitems = req.body; // GETTING BODY FROM REQUEST (WORKS ONLY THE BODY IS GIVEN)

    // Number AND toFixed IS USED TO CONVER THE AMOUNT IN TO TWO DECIMALS (EX 100.00, 67.77) 
    const Amount = Number(Cartitems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);

    const Status = "pending";

    // CONSOLE LOGED TO CHECK IT WORKS
    console.log(Amount, "this is amount ");


// CREATEING AND GIVING DATA TO DATABASE
    try {
        // CREATING ORDERS(DATA) USING  .CREATE METHOD
        const Orders = await Ordermodels.create({Cartitems:Cartitems, Amount:Amount, Status:Status});

        res.json({
            message: "order response",
            success: true,
            Orders: { Amount, Status } // Include Amount and Status in the response
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            message: "Error creating order",
            success: false,
            error: error.message
        });
    }
}
