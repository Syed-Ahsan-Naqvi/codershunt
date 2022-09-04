import { useRouter } from "next/router";
import React, { useState } from "react";
import Product from "../../models/Product";
import mongoose from "mongoose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Home.module.css";
// import "../styles/globals.css";

export default function Slug({ buyNow, addToCart, products, variants }) {
  // console.warn(products);
  // console.warn(variants);
  const router = useRouter();
  const { slug } = router.query;
  const [service, setservice] = useState();
  const [pin, setpin] = useState();

  const checkServiceability = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
    const dataJson = await data.json();

    if (dataJson.includes(pin)) {
      setservice(true);
      toast.success("Pincode is serviceable", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setservice(false);
      toast.error("Pincode not serviceable", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onChangePin = (e) => {
    setpin(e.target.value);
  };

  const [size, setsize] = useState(products.size);
  const [color, setcolor] = useState(products.color);
  const refreshVariants = (newsize, newcolor) => {
    let url = `${process.env.NEXT_PUBLIC_HOST}/product/${variants[newcolor][newsize]["slug"]}`;
    window.location.href = url;
    // router.beforePopState(url);
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // transition={Flip}
      />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-5/12 xl:w-4/12 w-full h-full   px-17  object-cover object-center bg-black rounded-lg "
              src={products.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {products.title} ({products.size}/{products.color})
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{products.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {/* {Object.keys(variants).map((e) => {
                    return (
                      <div key={e}>
                        <button
                          onClick={() => {
                            refreshVariants(size, e);
                          }}
                          className={`border-2  ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none ${
                            color === e ? "border-black" : "border-gray-500"
                          } `}
                        ></button>
                      </div>
                    );
                  })} */}
                  {Object.keys(variants).includes("White") &&
                    Object.keys(variants["White"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "White");
                        }}
                        className={`border-2  ml-1 bg-white rounded-full w-6 h-6 focus:outline-none ${
                          color === "White" ? "border-black" : "border-gray-500"
                        } `}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Red") &&
                    Object.keys(variants["Red"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "Red");
                        }}
                        className={`border-2  ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Red" ? "border-black" : "border-gray-500"
                        } `}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Black") &&
                    Object.keys(variants["Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "Black");
                        }}
                        className={`border-2  ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${
                          color === "Black" ? "border-black" : "border-gray-500"
                        } `}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Green") &&
                    Object.keys(variants["Green"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "Green");
                        }}
                        className={`border-2  ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Green" ? "border-black" : "border-gray-500"
                        } `}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Purple") &&
                    Object.keys(variants["Purple"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "Purple");
                        }}
                        className={`border-2  ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Purple"
                            ? "border-black"
                            : "border-gray-500"
                        } `}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Orange") &&
                    Object.keys(variants["Orange"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "Orange");
                        }}
                        className={`border-2  ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Orange"
                            ? "border-black"
                            : "border-gray-500"
                        } `}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Blue") &&
                    Object.keys(variants["Blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariants(size, "Blue");
                        }}
                        className={`border-2  ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Blue" ? "border-black" : "border-gray-500"
                        } `}
                      ></button>
                    )}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>

                  <div className="">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariants(e.target.value, color);
                        console.warn("Variants Changed");
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10"
                    >
                      {Object.keys(variants[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(variants[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(variants[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(variants[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXXL") && (
                        <option value={"XXXL"}>XXXL</option>
                      )}
                    </select>
                    <span className=" relative bottom-7 left-11 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button
                  onClick={() => {
                    buyNow(slug, 1, 499, products.title, size, color);
                  }}
                  className="flex text-sm ml-3 md:ml-12  text-white bg-pink-500 border-0 py-2  px-2  md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Buy now
                </button>
                <button
                  onClick={() => {
                    toast.success("Item added in cart", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    addToCart(
                      slug,
                      1,
                      products.price,
                      products.title,
                      size,
                      color
                    );
                  }}
                  className="flex text-sm ml-2 md:ml-5 text-white bg-pink-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Add to cart
                </button>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm ">
                <input
                  onChange={onChangePin}
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                  placeholder="Enter your Pin Code"
                  type="text"
                />
                <button
                  onClick={checkServiceability}
                  className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-red-700 text-sm mt-3 ">
                  Sorry! we do not deliver to this pincode yet
                </div>
              )}
              {service && service != null && (
                <div className="text-green-700 text-sm mt-3 ">
                  Yay! This pincode is serviceable
                </div>
              )}
            </div>
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
  let products = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: products.title });
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}
