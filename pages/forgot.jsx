import React from "react";
import Link from "next/link";
import { VscDebugContinue } from "react-icons/vsc";

export default function Forgot() {
  return (
    <div>
      <section className="h-2/4">
        <div className="container px-6 py-10 ">
          <div className="text-center pb-10 ">
            <div className="font-bold text-3xl ">Forgot Password</div>

            <div>
              <span className="mr-2 text-pink-500 hover:text-pink-600 focus:text-pink-600 active:text-pink-700 duration-200 transition ease-in-out">
                <Link href={"/login"}>
                  <a>Login</a>
                </Link>
              </span>
              |
              <span className="ml-2 text-pink-500 hover:text-pink-600 focus:text-pink-600 active:text-pink-700 duration-200 transition ease-in-out">
                <Link href={"/signup"}>
                  <a>Sign Up</a>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex sm:px-2 justify-center items-center flex-wrap h-full g-6 text-gray-700">
            <div className="md:w-8/12 lg:w-6/12 w-full mb-12 md:mb-0">
              <img
                src="svg6.svg"
                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className=" pb-5 md:w-8/12 lg:w-5/12 lg:ml-20">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-600 bg-white bg-clip-padding border border-solid border-gray-300 rounded  ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                    placeholder="Email address"
                  />
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <div className=" flex mb-6">
                  <select className=" w-2/6 sm:w-1/5 mr-5 rounded border  text-gray-600 text-xl font-normal border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 pl-3 pr-10 ease-in-out  transition duration-500 ">
                    <option>+92</option>
                    <option>+94</option>
                    <option>+7</option>
                    <option>+62</option>
                  </select>

                  <input
                    type="tel"
                    className="form-control block w-1/2 px-4 py-2 text-xl font-normal text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded  ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-pink-600 focus:outline-none transition duration-500 focus:ring-2  focus:ring-pink-200"
                    placeholder="Phone"
                  />
                </div>
                <div className="text-gray-500">
                  We will send a code to your email address or phone number
                </div>

                <button
                  type="submit"
                  className="flex px-7 py-3 justify-center mt-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-600 hover:shadow-lg focus:bg-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-700 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  continue
                  <VscDebugContinue className="ml-1 text-lg  " />
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
