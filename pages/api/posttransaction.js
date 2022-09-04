import Order from "../../models/Order";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "PUT") {
    if (req.body.status == "paid") {
      await Order.findOneAndUpdate(
        { orderId: req.body.oid },
        { status: "paid" }
      );
    } else if (req.body.status == "pending") {
      await Order.findOneAndUpdate(
        { orderId: req.body.oid },
        { status: "pending" }
      );
    } else {
      res.status(400).json({ error: "Please select write status" });
    }
    res.redirect("/order", 200);
  } else {
    res.status(400).json({ error: "cant update the order" });
  }
};

export default connectDb(handler);
