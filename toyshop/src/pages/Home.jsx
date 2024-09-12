import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer } from "react-toastify";
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import productData from '../productData';

export const successToast = (message) => {
    toast.success(message, {
        position: 'top-right'
    })
}

export const errorToast = (message) => {
    toast.error(message, {
        position: 'top-right'
    })
}

function Home() {
  const [loggedInUser,setLoggedInUser] = useState('');
  const [cart,setCart] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
  
  const actionLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    successToast('User Logged Out')

    setTimeout(()=>{
      navigate('/login')
    },1000)
  }




  return (
    <>
    <div>

      <Navbar size={cart.length} />
     
      <div className='flex justify-center'>
        <div className='bg-teal-400'>
         <h1>Hello {loggedInUser}</h1>
         <button onClick={actionLogout}>Logout</button>
        </div>
        <ToastContainer/>
      </div>

        <section>
          <div className="grid grid-cols-4 gap-3 p-4">

            {
              productData.map((item)=>(
                <ProductCard 
                item={item} 
                key={item.id} 
                pImage={item.pImage} 
                pName={item.pName} 
                price={item.price} />
              ))
            }

        </div>
    </section>

    <Cart/>

    </div>
    </>
  )
}

export default Home
