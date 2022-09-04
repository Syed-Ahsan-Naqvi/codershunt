import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let order = new Order({
      email: req.body.email,
      orderId: req.body.oid,
      address: req.body.address,
      amount: req.body.subTotal,
      products: req.body.cart,
    });
    await order.save();

    res.status(200).json({ success: "Order Saved" });
  } else {
    res.status(400).json({ error: "Order is not saved" });
  }
  // let products = await Product.find();
  // res.status(200).json({ products });
};

export default connectDb(handler);
