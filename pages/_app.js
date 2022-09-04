import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Content from "../components/Content";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setuser] = useState({ value: null });
  const [username, setusername] = useState({ value: null });
  const [code, setcode] = useState(0);
  const [progress, setprogress] = useState(0);
  const [order, setorder] = useState({});
  const [keyid, setkeyid] = useState(0);
  console.warn(user);

  useEffect(() => {
    // console.warn("Hey This is useEffect working properly");
    router.events.on("routeChangeStart", () => {
      setprogress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setprogress(100);
    });
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
        // setorder(JSON.parse(localStorage.getItem("order")));
        // saveOrder(JSON.parse(localStorage.getItem("order")));

        console.warn("Data entered");
      }
    } catch (error) {
      console.warn("fetching data unsuccessfull");
      localStorage.clear();
    }
    const token = localStorage.getItem("token");
    if (token) {
      setuser({ value: token });
      setcode(Math.random());
    }
    const tokenname = localStorage.getItem("name");
    if (tokenname) {
      setusername({ value: tokenname });
    }
  }, [router.query]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setuser({ value: null });
    setcode(Math.random());
    setusername({ value: null });
  };

  const saveOrder = (myOrder) => {
    localStorage.setItem("order", JSON.stringify(myOrder));
  };

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    // console.warn(keys);
    for (let i = 0; i < keys.length; i++) {
      // console.warn(myCart[keys[i]].price);
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
      // console.warn(subt);
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const addOrder = (
    orderID,
    name,
    email,
    address,
    phone,
    pincode,
    state,
    city
  ) => {
    let newCart = order;
    if (orderID in order) {
      newCart = {
        orderID,
        name,
        email,
        address,
        phone,
        pincode,
        state,
        city,
      };
    } else {
      newCart = {
        orderID,
        name,
        email,
        address,
        phone,
        pincode,
        state,
        city,
      };
    }
    setorder(newCart);
    saveOrder(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    // console.warn("cart cleard successfully");
    setCart({});
    saveCart({});
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    newCart[itemCode] = { qty, price, name, size, variant };

    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  return (
    <>
      <LoadingBar
        color="#ff2d55"
        progress={progress}
        waitingTime={300}
        onLoaderFinished={() => {
          setprogress(0);
        }}
      />

      <Navbar
        username={username}
        logout={logout}
        user={user}
        code={code}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      ></Navbar>

      <Component
        addOrder={addOrder}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        buyNow={buyNow}
        {...pageProps}
      />
      {/* <Content></Content> */}
      <Footer></Footer>
    </>
  );
}

export default MyApp;
