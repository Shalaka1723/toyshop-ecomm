import React, { useState } from 'react'
// import Cart from './Cart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let[cartOpen,setCartOpen]=useState(false)

  return (
    <>
    <div className='flex relative  h-24 justify-between items-center shadow-lg bg-[#ffd231] text-[#208e95] px-7 py-9 '>
        <h1 className=' text-4xl font-bold'>THE TOY SHOP</h1>
        <ul className='flex space-x-10'>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>All</li>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Seasonal</li>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Popsicles</li>
            <li className=' transition-all hover:border-b-4 border-yellow-200 hover:text-pink-600'>Classics</li>
        </ul>
        <ul className='flex space-x-3'>
          <li>
            <button className='' onClick={()=>{setCartOpen(!cartOpen)}}>
            <ShoppingCartIcon/>
            </button>
          </li>
          <li>{cartOpen && <Cart/>}</li>
          <li><Link to={"/Login"} className=' '>LOGIN </Link></li>
          <li><Link to={"/Signup"} className=' '>SIGNUP </Link></li>

   
        </ul>


    </div>
        <hr className="absolute w-72 left-1/2 transform -translate-x-1/2 top-20 border-1 border-pink-600 " />
    </>
  )
}

export default Navbar