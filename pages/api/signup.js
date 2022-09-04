import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.warn(req.body);
    let hero = await User.findOne({ email: req.body.email });

    // console.warn(hero.email);
    // console.warn(req.body.email);
    // console.warn(hero);
    if (hero) {
      // console.warn("Hello World");
      res.status(400).json({ error: "Enter write email" });
    } else if (req.body.password == req.body.confirmpassword) {
      let { firstname, lastname, email, password, confirmpassword } = req.body;
      let u = new User({
        firstname,
        lastname,
        email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.AES_SECRET
        ).toString(),
        confirmpassword: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.AES_SECRET
        ).toString(),
      });
      await u.save();
      res.status(200).json({ success: "account created" });
    } else {
      res.status(400).json({ error: "Enter write password" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
  // let products = await Product.find();
  // res.status(200).json({ products });
};

export default connectDb(handler);
