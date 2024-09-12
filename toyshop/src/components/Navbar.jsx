import React, { useState } from "react";
// import Cart from './Cart'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((store) => store.cart.items);
  const cartItems = carts.length;
  const navigate = useNavigate();
  console.log(cartItems);
  console.log(carts);

  const categories = ['All', 'Girls', 'Boys', 'Kids Books'];

  return (
    <>
      <div className="flex relative w-screen  h-24 justify-between items-center shadow-lg bg-[#4b1471] text-[#ffde5a] px-7 py-9 ">
        <a href="/" className=" text-4xl font-bold">
          THE TOY SHOP
        </a>

        <ul className="flex space-x-10">
          {categories.map((category, index) => (
            <li
              key={index}
              className="transition-all border-b-4 border-transparent hover:border-yellow-200 hover:text-white"
            >
              {category}
            </li>
          ))}
        </ul>

        <ul className="flex space-x-3">
          <li>
            <button
              className=""
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingCartIcon />
              <span>{cartItems}</span>
            </button>
          </li>
          {/* <li>{cartOpen && <Cart/>}</li> */}
          <li>
            <Link to={"/Login"} className=" p-1 px-2 bg-[#361350] hover:bg-[#8438ba] hover:text-white rounded-md">
              LOGIN
            </Link>
          </li>
          <li>
            <Link to={"/Signup"} className=" p-1 px-2 bg-[#361350] hover:bg-[#8438ba] hover:text-white rounded-md ">
              SIGNUP
            </Link>
          </li>
        </ul>
      </div>
      {/* <hr className="absolute w-72 left-1/2 transform -translate-x-1/2 top-20 border-1 border-pink-600 " /> */}
    </>
  );
};

export default Navbar;
