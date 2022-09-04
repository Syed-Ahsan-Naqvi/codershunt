// let products = await Product.find();
// res.status(200).json({ products });

import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "GET") {
    // console.warn(req.body);
    let user = await User.find();
    // let products = await Product.find();
    res.status(200).json({ user });
  }
};
export default connectDb(handler);
