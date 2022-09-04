import { useRouter } from "next/router";
import React, { useState } from "react";
import Order from "../../models/Order";
import mongoose from "mongoose";

export default function Slug({ products, subTotal, cart }) {
  console.warn(cart);
  // console.warn(products);
  const router = useRouter();
  const { slug } = router.query;
  // console.warn(router.query.slug);
  return (
    <div>
      {" "}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR.com
              </h2>
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-4">
                OrderID: {products.orderID}
              </h1>
              <p className="leading-relaxed mb-4">
                Hey <span className="text-pink-500">{products.name}</span> Your
                Order has been successfully placed
              </p>
              <div className="flex mb-4">
                <a className="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">
                  Item Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <div className="mb-6">
                {Object.keys(cart).map((k) => {
                  return (
                    <div key={k}>
                      <div className="flex border-t border-gray-200 py-2  ">
                        <span className="text-gray-500">
                          {cart[k].name}&nbsp;({cart[k].size}/{cart[k].variant})
                        </span>
                        <span className="ml-auto text-gray-900">
                          {cart[k].qty}
                        </span>
                        <span className="ml-auto text-gray-900">
                          Rs {cart[k].price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Total: ${subTotal}
                </span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className=" ml-20 -mt-10 w-1/3"
              src="/image5.jpg"
            />
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
  let orders = await Order.findOne({ orderID: context.query.slug });
  // let orderVariants = await

  return {
    props: {
      products: JSON.parse(JSON.stringify(orders)),
      // variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}
