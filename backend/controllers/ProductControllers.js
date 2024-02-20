// This product models contain product schema
const Productmodles = require('../models/Productmodels');

// Get product API /api/v1/products
exports.getproduct = async (req, res, next) => {
   try {
      const products = await Productmodles.find({});
      res.json({
         message: "Get products success....",
         products
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
   }
};

// Get single product API /api/v1/products/:id
exports.getsingleproducts = async (req, res, next) => {
   try {
      
      const product = await Productmodles.findById(req.params.id);

      if (!product) {
         // If the product with the given ID is not found
         return res.status(404).json({ message: "Product not found" });
      }

      console.log("Find by product id works");
      console.log("Request ID of the product is: ", req.params.id);
      res.json({
         message: true,
         product
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error (no product found)" });
   }
};