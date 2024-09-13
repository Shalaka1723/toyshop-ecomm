import React, {useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((store) => store.cart.items);
  const cartItems = carts.length;
  const navigate = useNavigate();
  
  //  mobile menu
  const [loggedInUser, setLoggedInUser] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  console.log(loggedInUser)

  const categories = ['All', 'Girls', 'Boys', 'Kids Books'];

  return (
    <>
      {/* Navbar container */}
      <div className="flex relative w-full h-24 justify-between items-center shadow-lg bg-[#4b1471] text-[#ffde5a] px-7 py-9">
        <a href="/" className="text-4xl font-bold">
          THE TOY SHOP
        </a>

        {/* Desktop version */}
        <ul className="hidden md:flex space-x-10">
          {categories.map((category, index) => (
            <li
              key={index}
              className="transition-all border-b-4 border-transparent hover:border-yellow-200 hover:text-white cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>

        {/* Cart functions*/}
        <ul className="hidden md:flex space-x-3">
        {loggedInUser ? 
        (<li>
            <button
              className="relative"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: 25 }} />
              {cartItems > 0 && (
                <span className="absolute bottom-6 right-1 bg-green-500 text-white rounded-full w-4 h-4 text-center text-xs">
                  {cartItems}
                </span>
              )}
            </button>
          </li>)
          :
          (<li>
            <Link
              to="/Login"
              className="p-1 px-2 bg-[#361350] hover:bg-[#8438ba] hover:text-white rounded-md"
            >
              LOGIN
            </Link>
            <Link
              to="/Signup"
              className="p-1 px-2 bg-[#361350] hover:bg-[#8438ba] hover:text-white rounded-md"
            >
              SIGNUP
            </Link>
          </li>)
          }    
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#4b1471] text-[#ffde5a] shadow-lg`}
      >
        <ul className="flex flex-col items-center space-y-3 py-5">
          {categories.map((category, index) => (
            <li key={index} className="text-lg cursor-pointer hover:text-white">
              {category}
            </li>
          ))}
          {!loggedInUser ? 
            (<li className="flex justify-center space-x-4 w-full">
            <Link
              to="/Login"
              className="block w-full text-center p-2 bg-[#361350] hover:bg-[#8438ba] hover:text-white rounded-md"
            >
              LOGIN
            </Link>
            <Link
              to="/Signup"
              className="block w-full text-center p-2 bg-[#361350] hover:bg-[#8438ba] hover:text-white rounded-md"
            >
              SIGNUP
            </Link>
          </li>)
          :
          (<li>
            <button
              className="relative text-lg"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <ShoppingCartIcon />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-5 h-5 text-center text-xs">
                  {cartItems}
                </span>
              )}
            </button>
          </li>)}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
