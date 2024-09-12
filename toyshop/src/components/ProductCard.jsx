import React, { useState } from 'react'

import productData from '../productData';

function ProductCard(productDetails) {

    const {pName, price, pImage, description} = productDetails;
    const [cart,setCart] = useState([]);
    
    const handleClick = (productDetails)=>{
        console.log(productDetails)
        	let isPresent = false;
        	cart.forEach((product)=>{
        		if (productDetails.id === product.id)
        		isPresent = true;
        	})
        	if (isPresent)
            // {
        // 		setWarning(true);
        // 		setTimeout(()=>{
        // 			setWarning(false);
        // 		}, 2000);
        		return ;
        	// }
        	setCart([...cart, productDetails]);
        }



  return (
    <>
    <div>
        <div className='flex flex-col hover:border-yellow-400 hover:border-2 border rounded-lg shadow-md text-center text-sm bg-gray-100 justify-center items-center h-60 p-3'>
      
            <img className='h-32' alt="Product Image" src={pImage}/>
            <h1 className='text-sm'>{pName}</h1>
            <h1>Rs. {price}</h1>
            <button onClick={()=>{handleClick(productDetails)}} className='hover:bg-yellow-500 hover:text-white rounded-lg text-xs self-end align-bottom  px-2 py-1 my-1 bg-sky-300'>Add to Cart</button>

        </div>
    </div>
    </>
  )
}

export default ProductCard
