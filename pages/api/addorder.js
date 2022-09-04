import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.warn(req.body);

    let p = new Order({
      orderID: req.body.orderID,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      pincode: req.body.pincode,
      state: req.body.state,
      city: req.body.city,
    });
    await p.save();

    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
  // let products = await Product.find();
  // res.status(200).json({ products });
};

export default connectDb(handler);
