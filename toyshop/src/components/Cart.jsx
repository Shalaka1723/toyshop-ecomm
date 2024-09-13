import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';
import list from '../productData';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DoneIcon from '@mui/icons-material/Done';
import { Footer } from './Footer';

function Cart() {
  const carts = useSelector((store) => store.cart.items);
  const cartData = list.filter((listItem) =>
    carts.some((cartItem) => cartItem.pName === listItem.pName)
  );
  console.log(cartData.length);

  return (
    <>
      <div className="flex flex-col min-h-screen">

        <Navbar />

        {/* Cart Section */}
        <section className="flex justify-between drop-shadow-xl items-center px-28 bg-[#f8e23c] p-1 mb-4">
          <h1 className="text-2xl text-center text-[#521973] font-semibold">
            <ShoppingCartIcon /> My Cart
          </h1>
          <button className="text-green-600 px-2 h-fit bg-[#9cfa44] hover:bg-[#caff98] rounded-xl">
            <DoneIcon />
            Checkout
          </button>
        </section>

        {/* Cart Content */}
        <div className="flex-1 px-10 overflow-auto">
          <div className="bg-[#f9f4fc] h-fit p-5 rounded-sm">
            <section className="flex flex-col gap-5">
              {cartData.length ? (
                cartData.map((item) => <CartItem item={item} key={item.pName} />)
              ) : (
                <p>No items in your cart</p>
              )}
            </section>
          </div>
        </div>


        <Footer />
      </div>
    </>
  );
}

export default Cart;
