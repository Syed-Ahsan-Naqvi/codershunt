import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.warn(req.body);
    let hero = await User.findOne({ email: req.body.email });

    const bytes = CryptoJS.AES.decrypt(hero.password, process.env.AES_SECRET);
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
    // console.warn("decrypted password" + decryptedPass);
    // console.warn("password" + req.body.password);
    // console.warn("this is hero email" + hero.email);
    // console.warn("email" + req.body.email);
    // console.warn(hero.email);
    // console.warn(req.body.email);
    // console.warn(hero);
    if (hero) {
      if (req.body.email == hero.email && req.body.password == decryptedPass) {
        var token = jwt.sign({ email: hero.email }, process.env.JWT_SECRET, {
          expiresIn: "2d",
        });
        // console.warn("Hello World");
        // res.status(200).json({ success: true, token: token });
        res.status(200).json({
          success: true,
          token: token,
          email: hero.email,
          name: [hero.firstname + " " + hero.lastname],
        });
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ error: "This method is not allowed" });
    }
    // let products = await Product.find();
    // res.status(200).json({ products });
  }
};
export default connectDb(handler);
