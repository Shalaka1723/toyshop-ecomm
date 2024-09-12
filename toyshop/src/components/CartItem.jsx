import React from 'react'
import remotecar from '../assets/remotecar.png';

function CartItem({item}) {
    console.log(item)
    console.log('Hello')
  return (
    <>
    <div className=" flex justify-center items-center h-fit p-2 px-4 ">
        <div className="flex w-full p-6 bg-[#fbf4bd] rounded-lg h-fit shadow-md ">
            <img className='h-36' src={item.pImage}/>
            <h1>hello</h1>
            <h1>{item.price}</h1>
            <button className='border bg-slate-400'>Delete product</button>
        </div>
    </div>
    </>
  )
}

export default CartItem
