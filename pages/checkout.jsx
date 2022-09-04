import React, { useEffect, useState } from "react";

import Link from "next/link";

import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

import { BsBagCheckFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaCcAmazonPay } from "react-icons/fa";
import { ImPaypal } from "react-icons/im";
import { Router } from "@mui/icons-material";

export default function Checkout({
  addOrder,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [disabled, setdisabled] = useState(true);
  const [key, setkey] = useState(0);
  const [first, setfirst] = useState(false);

  useEffect(() => {
    const orderid = require("order-id")("key");
    const id = orderid.generate(); // const randomness = Math.random().toString(36).substr(2);
    // return dateString + randomness;

    console.warn(id);
    setkey(id);
    // setkey(Math.random());
  }, []);

  const handleToggle = () => {
    setfirst(true);
  };

  const sendOrder = async () => {
    // e.preventDefault();
    let data = localStorage.getItem("order");
    // console.warn(JSON.parse(JSON.stringify(data)));
    console.warn(data);
    let res = await fetch("http://localhost:3000/api/addorder", {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.warn(data);
    let response = await res.json();
    console.warn("This is response" + response);
  };

  const handleChange = (e) => {
    // console.warn("handleChange working");
    if (e.target.name == "name") {
      setname(e.target.value);
      console.warn(name);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "address") {
      setaddress(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "city") {
      setcity(e.target.value);
    } else if (e.target.name == "state") {
      setstate(e.target.value);
    } else if (e.target.name == "pincode") {
      setpincode(e.target.value);
    }

    if (name.length >= 2 && email.length >= 2) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  // const handleSubmit = () => {
  //   console.warn("handlesubmit");
  //   setkey(Math.random());
  // };
  const handleConfirmSubmit = () => {};

  return (
    // <div onMouseOver={handleChange} onKeyPress={handleChange}>
    <div>
      <div className="font-bold text-center text-2xl">Checkout</div>
      <div className="mx-10 my-7">
        <h2>1. Delivery Detail</h2>
        <div className=" my-5 flex xl:flex-wrap md:flex-wrap lg:flex-wrap flex-wrap justify-between items-end md:justify-start">
          <div className=" w-full sm:w-1/2 md:w-1/2  ">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
            />
          </div>
          <div className=" w-full sm:w-1/2 sm:pl-2 md:w-1/2 md:pl-2 ">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
            />
          </div>
          <div className=" w-full  ">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
            />
          </div>
          <div className=" w-full sm:w-1/2 md:w-1/2  ">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out focus:ring-2  focus:ring-pink-200"
            />
          </div>
          <div className=" w-full sm:w-1/2 sm:pl-2 md:w-1/2 md:pl-2">
            <label
              htmlFor="pincode"
              className="leading-7 text-sm text-gray-600"
            >
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
            />
          </div>

          <div className=" w-full sm:w-1/2 md:w-1/2 ">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
            />
          </div>

          <div className=" w-full sm:w-1/2 sm:pl-2 md:w-1/2 md:pl-2">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
              value={city}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
            />
          </div>
        </div>
        <div className="pt-5">
          <h2>1. Review Cart Item & Pay</h2>
          <div>
            <div className=" w-100  bg-pink-100 p-7 border rounded-xl">
              <div className="  h-40 overflow-y-scroll pl-4 mb-4 ">
                <ol className="list-decimal my-5  ">
                  {Object.keys(cart).length == 0 && (
                    <div className="text-center">This is empty</div>
                  )}
                  {Object.keys(cart).map((k) => {
                    return (
                      <li key={k}>
                        <div className="flex">
                          <span className=" my-5 text-sm  sm:text-base font-thin w-2/3 cursor-pointer">
                            {cart[k].name}&nbsp;({cart[k].size}/
                            {cart[k].variant})
                          </span>
                          <span className=" flex justify-center items-center text-sm  w-1/3  ">
                            <AiFillMinusCircle
                              className=" mx-3 text-2xl text-pink-500 cursor-pointer  "
                              onClick={() => {
                                removeFromCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                            {cart[k].qty}
                            <AiFillPlusCircle
                              className="mx-3 text-2xl  text-pink-500 cursor-pointer  "
                              onClick={() => {
                                addToCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                          </span>
                        </div>
                      </li>
                    );
                  })}
                  {/* {Object.keys(cart).map((k) => {
                    return (
                      <li key={k}>
                        <div className="flex">
                          <span className=" my-5 text-sm  sm:text-base font-thin w-2/3 cursor-pointer">
                            {cart[k].name}
                          </span>
                          <span className=" flex justify-center items-center text-sm  w-1/3  ">
                            <AiFillMinusCircle
                              className=" mx-3 text-2xl text-pink-500 cursor-pointer  "
                              onClick={() => {
                                removeFromCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                            {cart[k].qty}
                            <AiFillPlusCircle
                              className="mx-3 text-2xl  text-pink-500 cursor-pointer  "
                              onClick={() => {
                                addToCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                          </span>
                        </div>
                      </li>
                    );
                  })}
                  {Object.keys(cart).map((k) => {
                    return (
                      <li key={k}>
                        <div className="flex">
                          <span className=" my-5 text-sm  sm:text-base font-thin w-2/3 cursor-pointer">
                            {cart[k].name}
                          </span>
                          <span className=" flex justify-center items-center text-sm  w-1/3  ">
                            <AiFillMinusCircle
                              className=" mx-3 text-2xl text-pink-500 cursor-pointer  "
                              onClick={() => {
                                removeFromCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                            {cart[k].qty}
                            <AiFillPlusCircle
                              className="mx-3 text-2xl  text-pink-500 cursor-pointer  "
                              onClick={() => {
                                addToCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                          </span>
                        </div>
                      </li>
                    );
                  })}
                  {Object.keys(cart).map((k) => {
                    return (
                      <li key={k}>
                        <div className="flex">
                          <span className=" my-5 text-sm  sm:text-base font-thin w-2/3 cursor-pointer">
                            {cart[k].name}
                          </span>
                          <span className=" flex justify-center items-center text-sm  w-1/3  ">
                            <AiFillMinusCircle
                              className=" mx-3 text-2xl text-pink-500 cursor-pointer  "
                              onClick={() => {
                                removeFromCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                            {cart[k].qty}
                            <AiFillPlusCircle
                              className="mx-3 text-2xl  text-pink-500 cursor-pointer  "
                              onClick={() => {
                                addToCart(
                                  k,
                                  1,
                                  cart[k].price,
                                  cart[k].name,
                                  cart[k].size,
                                  cart[k].variant
                                );
                              }}
                            />
                          </span>
                        </div>
                      </li>
                    );
                  })} */}
                </ol>
              </div>
              <div className="font-bold">Subtotal: {subTotal}</div>
            </div>
            <div className=" flex justify-end">
              {/* <Link href={`/order/${orders[item].orderID}`}> */}
              <Link href={""}>
                <button
                  disabled={false}
                  // onClick={handleToggle}
                  onClick={() => {
                    addOrder(
                      key,
                      name,
                      email,
                      address,
                      phone,
                      pincode,
                      state,
                      city
                    );
                    {
                      handleToggle();
                    }
                  }}
                  className=" disabled:bg-pink-200 flex   px-4  mt-16 text-white bg-pink-500 border-0 py-2 sm:px-8 md:px-10 focus:outline-none hover:bg-pink-600 rounded text-lg "
                >
                  <ImPaypal className="mt-1 mr-1" />
                  Pay Rs&nbsp;{subTotal}
                </button>
              </Link>
            </div>
            {first && (
              <div>
                <div
                  id="popup-modal"
                  tabIndex="-1"
                  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="popup-modal"
                        onClick={() => {
                          setfirst(false);
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                      <div className="p-6 text-center">
                        <svg
                          aria-hidden="true"
                          className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this product?
                        </h3>
                        <Link href={`/order/${key}`}>
                          <button
                            data-modal-toggle="popup-modal"
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            onClick={() => {
                              {
                                sendOrder();
                              }
                              setfirst(false);
                            }}
                          >
                            Yes, Im sure
                          </button>
                        </Link>
                        <button
                          data-modal-toggle="popup-modal"
                          type="button"
                          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => {
                            setfirst(false);
                          }}
                        >
                          No, cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   let data = localStorage.getItem("order");

//   return {
//     props: {
//       orders: JSON.parse(JSON.stringify(data)),
//     },
//   };
// }
