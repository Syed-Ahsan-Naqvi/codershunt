import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";
// var CryptoJS = require("crypto-js");
// var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "GET") {
    let hero = await Order.findOne(req.body.oid);
    if (hero) {
      res.status(200).json({ hero });
    } else {
      res.status(400).json({ error: "Invalid OrderID" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
  // let products = await Product.find();
  // res.status(200).json({ products });
};
export default connectDb(handler);
