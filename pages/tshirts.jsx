import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

export default function Tshirts({ products }) {
  // const [first, setfirst] = useState(products);
  // console.warn(first);

  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font  ">
        <h1 className="pt-10 pb-5 font-medium text-center text-3xl ">
          Tshirts
        </h1>
        <div className="container px-5 pt-10 pb-24 mx-auto  ">
          <div className="flex flex-wrap justify-between xl:justify-around lg:justify-around sm:justify-between md:justify-between  md:px-6 px-1 ">
            {Object.keys(products).length === 0 && (
              <p>
                Sorry all the Tshirts are currently out of stock. New stock
                coming soon, Stay Tuned!
              </p>
            )}
            {Object.keys(products).map((item) => {
              return (
                <div
                  className="xl:w-72 lg:w-72 md:w-80 sm:w-72 border border-gray-200 p-4   mb-10 object-cover  object-center w-full   drop-shadow-2xl rounded-2xl bg-gray-200 "
                  key={item}
                >
                  <div>
                    <Link
                      passHref={true}
                      href={`/product/${products[item].slug}`}
                    >
                      <a>
                        <div className="h-96 rounded-2xl overflow-hidden">
                          <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            // src="https://pyxis.nymag.com/v1/imgs/05d/b15/f4c61238a24a34610ae3a41dede1df90a4-Gildan-black-tshirt.2x.rsquare.w600.jpg"
                            src={products[item].img}
                          />
                        </div>
                      </a>
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {products[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">Rs&nbsp;{products[item].price}</p>
                      <div className="mt-1  ">
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S&nbsp;
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            M&nbsp;
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            L&nbsp;
                          </span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XL&nbsp;
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XXL&nbsp;
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XXXL&nbsp;
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].color.includes("Red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("White") && (
                          <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("Green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("Purple") && (
                          <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("Blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("Black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                        {products[item].color.includes("Orange") && (
                          <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none "></button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  // ***** fetching data from mongodb database
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "T-shirts" });
  let tshirts = {};
  // console.warn(products.size);
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
        // console.warn(tshirts[item.title].size);
      }
    }
  }

  // ***** when fetching data from fs *******
  // let data = await fetch("http://localhost:3000/api/getproducts");
  // const data2 = await data.json();

  // let data3 = await data2.filter((obj) => {
  //   return obj;
  // });

  // console.warn(
  //   data3.map((i) => {
  //     let code = i.T;
  //     return code;
  //   })
  // );

  // let tshirts = {};
  // for (let item of data2) {
  //   tshirts = JSON.parse(JSON.stringify(item));
  // }

  return {
    props: {
      // products: JSON.parse(JSON.stringify(tshirts)),
      products: JSON.parse(JSON.stringify(tshirts)),
    },
  };
}
