import React from 'react'
import CartItem from './CartItem'
import Navbar from './Navbar'
import list from '../productData'
import { useSelector } from 'react-redux';
import cart from '../store/cart';

function Cart() {
  const carts = useSelector(store=> store.cart.items);
  const cartData = list.filter(listItem => 
    carts.some(cartItem => cartItem.pName === listItem.pName)
  );
  console.log(cartData.length)


  return (
    <>
    <Navbar/>
    <div>
      <h1>My Cart</h1>
      <section className='flex flex-col gap-5'>
        {cartData.length ?
        (cartData.map((item)=>{return <CartItem item={item}/>})) : null}
      </section>
      <button>Checkout</button>
    </div>
    </>
  )
}

export default Cart
