import React from 'react'
import remotecar from '../assets/remotecar.png'

function ProductCard({pName, price, pImage, description}) {
  return (
    <>
    <div>
        <div className='border rounded-lg shadow-md bg-gray-100 justify-center w-fit p-3'>
            <img className='h-36' src={remotecar}/>
            <h1>Product Name</h1>
            <h1>Rs. Product Price</h1>
            <button>Add to Cart</button>

        </div>
    </div>
    </>
  )
}

export default ProductCard
