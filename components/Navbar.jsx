// import * as React from "react";
// import Toolbar from "@mui/material/Toolbar";
// import { Button, Box, AppBar } from "@mui/material";
// import styles from "../styles/Home.module.css";
// import Typography from "@mui/material/Typography";
// import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
// import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
// import Link from "next/link";
// // import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useRef } from "react";

// // ************ import **************
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Fullscreen } from "@mui/icons-material";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import Logout from "@mui/icons-material/Logout";
// // import ListItemText from "@mui/material/ListItemText";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";

// const options = [
//   "None",
//   "Atria",
//   "Callisto",
//   "Dione",
//   "Ganymede",
//   "Hangouts Call",
//   "Luna",
//   "Oberon",
//   "Phobos",
//   "Pyxis",
//   "Sedna",
//   "Titania",
//   "Triton",
//   "Umbriel",
// ];

// const ITEM_HEIGHT = 100;

// export default function Navbar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   // const toggleCart = () => {};
//   // const ref = useRef();
//   return (
//     // <Box>
//     <Box>
//       <Toolbar
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",

//           // backgroundColor: "",
//         }}
//         className={"shadow-md"}
//       >
//         <Link href={"/"}>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             // href="/"
//             // color="secondary"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               // fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".2rem",
//               textDecoration: "none",
//               color: "rgb(236 72 153 )",
//             }}
//           >
//             <ShoppingBagTwoToneIcon sx={{ color: "rgb(236 72 153 );" }} />
//             {/* <Link href="/"><a>CODESWEAR.com </a>Hero</Link> */}
//             Hero
//           </Typography>
//         </Link>
//         <Box>
//           <Link
//             // underline="none"
//             // color="secondary"
//             href="/tshirts"
//           >
//             <a className={styles.link}>Tshirts</a>
//           </Link>
//           <Link href="/hoodies">
//             <a className={styles.link}>Hoodies</a>
//           </Link>
//           <Link href="/stickers">
//             <a className={styles.link}>Stickers</a>
//           </Link>
//           <Link href="/mugs">
//             <a className={styles.link}>Mugs</a>
//           </Link>
//         </Box>
//         <Link href="/">
//           <LocalGroceryStoreSharpIcon sx={{ color: "rgb(236 72 153 );" }} />
//         </Link>

//         <IconButton
//           // aria-label="more"
//           id="long-button"
//           // aria-controls={open ? "long-menu" : undefined}
//           // aria-expanded={open ? "true" : undefined}
//           // aria-haspopup="true"
//           onClick={handleClick}
//           color={"secondary"}
//         >
//           <MoreVertIcon />
//         </IconButton>
//         <Menu
//           id="long-menu"
//           // MenuListProps={{
//           //   "aria-labelledby": "long-button",
//           // }}
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           // color={"secondary"}
//           PaperProps={{
//             style: {
//               maxHeight: ITEM_HEIGHT * 5,
//               width: "20ch",
//             },
//           }}
//         >
//           {options.map((option) => (
//             <MenuItem
//               key={option}
//               selected={option === "Pyxis"}
//               onClick={handleClose}
//               color={"secondary"}
//             >
//               {option}
//             </MenuItem>
//           ))}
//         </Menu>
//       </Toolbar>
//       {/* <div
//         ref={ref}
//         // className="sideCart absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full"
//       >
//         <h2 className="font-bold text-xl ">Shopping Cart</h2>
//         <span className="absolute top-5 right-2 cursor-pointer text-2xl text-pink-500 "></span>
//         <ol>
//           <li>
//             <span>Tshirt - Wear the code</span>
//           </li>
//         </ol>
//       </div> */}
//     </Box>
//     // </Box>
//   );
// }
import React, { useRef, useState } from "react";

import Link from "next/link";
import { MdShoppingCart, MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";

import { BsBagCheckFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Content from "./Content";
import { useRouter } from "next/router";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

export default function Navbar({
  username,
  logout,
  user,
  code,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) {
  // console.warn({
  //   cart,
  //   addToCart,
  //   removeFromCart,
  //   clearCart,
  //   subTotal,
  // });
  <Content></Content>;
  const router = useRouter();
  const [dropdown, setdropdown] = useState(false);

  // console.warn(router.pathname);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      // ref.current.classList.remove("absolute");
      ref.current.classList.add("translate-x-0");
      // ref.current.classList.add("fixed");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      // ref.current.classList.add("fixed");
      // ref.current.classList.add("absolute");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  const notReload = () => {
    console.warn("hey this is not reload method");
    if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const allusers = async () => {
    let data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`);
    let response = await data.json();
    console.warn(response);
  };

  return (
    <div className="bg-pink-100 sticky top-0 z-10 ">
      <ToastContainer
        position="top-left"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
      {/* <button onClick={allusers}>hero</button> */}
      <header className="  text-gray-600 body-font   w-full  shadow-md ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl text-pink-500 transition ease-in-out delay-150   hover:scale-110  duration-300 ...  ">
                CODESWEAR.com
              </span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirts"}>
              <a className="mr-5 hover:text-gray-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... ">
                Tshirts
              </a>
            </Link>
            <Link href={"/hoodies"}>
              <a className="mr-5 hover:text-gray-900 transition ease-in-out delay-150   hover:scale-110  duration-300 ...  ">
                Hoodies
              </a>
            </Link>
            <Link href={"/stickers"}>
              <a className="mr-5 hover:text-gray-900">Stickers</a>
            </Link>
            <Link href={"/mugs"}>
              <a className="mr-5 hover:text-gray-900">Mugs</a>
            </Link>
            <Link href={"/contact"}>
              <a className="mr-5 hover:text-gray-900">Contact</a>
            </Link>
          </nav>
          <span
            onClick={toggleCart}
            className="absolute top-6 right-3 cursor-pointer text-2xl text-pink-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ... "

            // transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...
          >
            <MdShoppingCart />
          </span>

          {router.pathname == "/login" &&
            router.pathname != "/signup" &&
            !user.value && (
              <div>
                {" "}
                <div className="absolute top-6 right-14  cursor-pointer  text-pink-500 ">
                  <Link href={"/signup"}>
                    <a>Signup</a>
                  </Link>
                </div>
              </div>
            )}
          {router.pathname != "/login" &&
            router.pathname == "/signup" &&
            !user.value && (
              <div>
                {" "}
                <div className="absolute top-6 right-14  cursor-pointer  text-pink-500 ">
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </div>
              </div>
            )}
          {/* {router.pathname == "/login" && router.pathname != "/signup"&& !user.value && <div></div>} */}
          {router.pathname != "/login" &&
            router.pathname == "/signup" &&
            user.value && (
              <div>
                <div>
                  <span
                    className="absolute top-6 right-12  cursor-pointer text-2xl text-pink-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ... "

                    // transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...
                  >
                    <CgProfile />
                  </span>
                </div>
              </div>
            )}
          {router.pathname != "/login" &&
            router.pathname != "/signup" &&
            !user.value && (
              <div>
                <div className="absolute top-6 right-14  cursor-pointer  text-pink-500 ">
                  <Link href={"/signup"}>
                    <a>Signup</a>
                  </Link>
                </div>

                <div className="absolute  top-6 right-28 cursor-pointer  text-pink-500 ">
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </div>
              </div>
            )}
          {router.pathname != "/login" &&
            router.pathname != "/signup" &&
            user.value && (
              <div
                onMouseOver={() => {
                  setdropdown(true);
                  console.warn("true");
                }}
                onMouseLeave={() => {
                  setdropdown(false);
                  console.warn("false");
                }}
              >
                <div>
                  <span
                    className="absolute top-6 right-12 cursor-pointer text-2xl text-pink-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ... "

                    // transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...
                  >
                    <CgProfile />
                  </span>
                </div>
              </div>
            )}
          {dropdown && (
            <div
              onMouseOver={() => {
                setdropdown(true);
                console.warn("true");
              }}
              onMouseLeave={() => {
                setdropdown(false);
                console.warn("false");
              }}
            >
              {/* <div className="  p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}
              <div className=" absolute right-16 w-80 max-w-sm bg-pink-100 shadow-2xl rounded-2xl   ">
                <div className="flex flex-col items-center pb-10 ">
                  {username.value && (
                    <div>
                      <img
                        className="mb-3 mt-3 w-24 h-24 rounded-full shadow-2xl"
                        src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=510&q=80"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-md font-medium text-gray-900 dark:text-gray-500">
                        {Object.values(username)}
                        {/* hero */}
                      </h5>
                      <span className="text-sm  text-gray-500 dark:text-gray-400">
                        Visual Designer
                      </span>
                    </div>
                  )}

                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <Link href="">
                      <button className="flex items-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">
                        <p className="text-sm font-medium">My Account</p>
                      </button>
                    </Link>
                    {user.value && (
                      <Link href="/orders">
                        <button className=" flex items-center text-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">
                          <p className="text-sm font-medium text-center">
                            Orders
                          </p>
                        </button>
                      </Link>
                    )}

                    {!user.value && (
                      <Link href="">
                        <button className=" flex items-center text-center text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">
                          <p className="text-sm font-medium text-center">
                            Orders
                          </p>
                        </button>
                      </Link>
                    )}

                    <Link href={""}>
                      <button
                        onClick={logout}
                        className="flex items-center text-center text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-lg"
                      >
                        <p className="text-sm font-medium text-center">
                          Logout
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          )}
          {/* {router.pathname != "/login" && (
            <div>
              {user.value && (
                <div className="absolute  top-6 right-12 cursor-pointer  text-pink-500 ">
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </div>
              )}
            </div>
          )} */}
          {/* {!router.query.slug == "http://localhost:3000/login" && (
            <div>
              {!user.value && (
                <div className="absolute  top-6 right-12 cursor-pointer  text-pink-500 ">
                  <Link href={"/login"}>
                    <a>Login</a>
                  </Link>
                </div>
              )}
            </div>
          )} */}

          {/* {user.value && (
            <div>
              <span
                className="absolute top-6 right-12 cursor-pointer text-2xl text-pink-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ... "

                // transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...
              >
                <CgProfile />
              </span>
            </div>
          )} */}
        </div>
      </header>

      <div
        ref={ref}
        className={` w-screen sm:w-3/5 md:w-3/5 lg:w-2/4 xl:w-2/5  h-screen fixed top-0 right-0 overflow-scroll bg-pink-100 p-10 transform transition-transform translate-x-full duration-500 ... `}
      >
        <h2 className="  text-center  font-bold text-xl cursor-pointer ">
          Shopping Cart
        </h2>
        <span
          onClick={toggleCart}
          className="absolute  top-5 right-2 cursor-pointer text-3xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>

        <ol className="list-decimal my-5 ">
          {Object.keys(cart).length == 0 && (
            <div className="text-center">This is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="flex">
                  <span className=" my-5  w-2/3 cursor-pointer">
                    {cart[k].name}&nbsp;({cart[k].size}/{cart[k].variant})
                  </span>

                  <span className=" flex justify-center items-center font-semibold w-1/3  ">
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
        </ol>
        <div className="font-bold">Subtotal: {subTotal}</div>
        <div className="flex">
          <Link href="/checkout">
            <button
              onClick={notReload}
              className="flex mx-auto px-3 md:mr-10 mt-16 text-white bg-pink-500 border-0 py-2 md:px-8 focus:outline-none hover:bg-pink-600 rounded text-lg "
            >
              <BsBagCheckFill className="mt-1 mr-1 " /> Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex px-3 mx-auto mt-16 text-white bg-pink-500 border-0 py-2 md:px-8 focus:outline-none hover:bg-pink-600 rounded text-lg "
          >
            <RiDeleteBin2Fill className="mt-1 mr-1 " /> Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
