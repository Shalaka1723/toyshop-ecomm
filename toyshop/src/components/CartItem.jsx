import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartItem({ item, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem }) {
  return (
    <>
      <div className="flex justify-center items-center h-fit p-2 px-4">
        <div className="flex flex-col md:flex-row w-full justify-between p-6 px-10 bg-[#f9f8eb] rounded-lg shadow-md space-y-6 md:space-y-0">



          <div className="flex justify-center md:justify-start">
            <img
              className="h-28 w-28 md:h-36 md:w-36 object-contain"
              src={item.pImage}
              alt={item.pName}
            />
          </div>


          <div className="flex flex-col justify-around md:ml-6 flex-grow space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-lg md:text-xl font-semibold text-gray-700">
                {item.pName}
              </h1>
              <h2 className="text-sm md:text-lg text-gray-600">Price: Rs. {item.price}</h2>
            </div>

     
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <button
                className="py-1 px-2 text bg-gray-200 hover:bg-gray-300 rounded-full"
                onClick={() => onDecreaseQuantity(item)}
              >
                <RemoveIcon sx={{ fontSize: 16 }} />
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                className="py-1 px-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                onClick={() => onIncreaseQuantity(item)}
              >
                <AddIcon sx={{ fontSize: 16 }} />
              </button>
            </div>
          </div>


          <div className="flex justify-center md:justify-end items-center">
            <button
              className="ml-4 text-white bg-[#401165] hover:bg-red-600 p-2 rounded-full flex items-center"
              onClick={() => onDeleteItem(item)}
            >
              <DeleteForeverIcon sx={{ fontSize: 20 }} />
              <span className="ml-2 hidden text-sm md:inline">Delete</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
