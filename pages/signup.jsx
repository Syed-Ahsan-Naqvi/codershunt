import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";
import { BiAbacus } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import { useRouter } from "next/router";

// import User from "../models/User";
// import connectDb from "../../middleware/mongoose";

// import { dark } from "@mui/material/styles/createPalette";

export default function Signup() {
  let router = useRouter();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router.query]);

  const handleChange = (e) => {
    if (e.target.name == "firstname") {
      setfirstname(e.target.value);
    } else if (e.target.name == "lastname") {
      setlastname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    } else if (e.target.name == "confirmpassword") {
      setconfirmpassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { firstname, lastname, email, password, confirmpassword };
    // console.warn(data);
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // console.warn(res.json());
    let response = await res.json();

    if (response.success) {
      console.warn("successfully added data");
      toast.success("Account Created!!!", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.warn(response);
      setfirstname("");
      setlastname("");
      setemail("");
      setpassword("");
      setconfirmpassword("");
      setTimeout(() => {
        router.push("/login");
      }, 2200);
    } else if (response.error == "Enter write email") {
      console.warn("email already in use");
      toast.error("Email already in use", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (response.error == "Enter write password") {
      console.warn("email already in use");
      toast.error("Please enter write password", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      console.warn("End");
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
      <section className="h-2/4">
        <div className="container px-6 py-10 ">
          <div className="text-center  pb-10 ">
            <div className="font-bold text-3xl">Sign up for an Account</div>
            <div>
              or
              <span className="ml-2 text-pink-500 hover:text-pink-600 focus:text-pink-600 active:text-pink-700 duration-200 transition ease-in-out">
                <Link href={"/login"}>
                  <a>Login</a>
                </Link>
              </span>
            </div>
          </div>

          <div className="flex sm:px-2 justify-center items-center flex-wrap h-full g-6 text-gray-700">
            <div className="  md:w-8/12 lg:w-6/12  w-screen mb-12 md:mb-0">
              <img
                src="svg3.svg"
                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className=" pb-5 md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit} method="POST">
                <div className="flex">
                  <div className="mb-6 w-1/2">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={firstname}
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                      placeholder="First Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6 w-1/2 ml-2 ">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={lastname}
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                      placeholder="Last Name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                    placeholder="Email address"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    value={confirmpassword}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                    placeholder="Confirm-Password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex justify-between items-center mb-6 mt-10">
                  <label>
                    <input
                      type="checkbox"
                      className=" h-5 w-5 mr-2 accent-pink-500  "
                    />
                    Remember me
                  </label>
                </div>
                {/* <Link href={"/login"}> */}
                <button
                  type="submit"
                  className="flex justify-center px-7 py-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign Up
                  <IoCreateOutline className="text-lg ml-1" />
                </button>
                {/* </Link> */}
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={() => {
          {
            toast.success("Account Created!!!", {
              position: "top-left",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }}
      >
        <h2>hero</h2>
      </button>
    </div>
  );
}
