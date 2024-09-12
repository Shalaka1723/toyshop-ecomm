import React from 'react'
import remotecar from '../assets/remotecar.png';
import productData from '../productData';

function ProductCard({pName, price, pImage, description}) {
  return (
    <>
    <div>
        <div className='flex flex-col border rounded-lg shadow-md text-center text-sm bg-gray-100 justify-center items-center h-60 p-3'>
      
              <img className='h-32' src={pImage}/>
         
            <h1 className='text-sm'>{pName}</h1>
            <h1>Rs. {price}</h1>
            <button className='rounded-lg text-xs self-end align-bottom  px-2 py-1 my-1 bg-sky-300'>Add to Cart</button>

        </div>
    </div>
    </>
  )
}

export default ProductCard
