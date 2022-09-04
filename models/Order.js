const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderID: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // paymentInfo: { type: String, default: "" },
    // products: { type: Object, default: "" },
    // products: [
    //   {
    //     productId: { type: String },
    //     quantity: { type: Number, default: 1 },
    //   },
    // ],
    address: { type: String, required: true },
    phone: { type: String, required: true },
    pincode: { type: String, required: true },
    // amount: { type: Number, required: true },
    // status: { type: String, default: "Pending", required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Order", OrderSchema);
