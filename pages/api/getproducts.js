// ***** get all products from mongodb ******
import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  let products = await Product.find();
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  res.status(200).json({ tshirts });
  // res.status(200).json({ products });
};

export default connectDb(handler);

// ***** get all products from file storage ******
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from "fs";

// export default async function handler(req, res) {
//   let myFile;
//   let allBlogs = [];
//   let data = await fs.promises.readdir("blogdata");
//   //   console.warn(data);
//   for (let index = 0; index < data.length; index++) {
//     const items = data[index];
//     myFile = await fs.promises.readFile(`blogdata/${items}`);
//     // console.warn(JSON.parse(myFile));
//     allBlogs.push(JSON.parse(myFile));
//   }
//   res.status(200).json(allBlogs);
// }
