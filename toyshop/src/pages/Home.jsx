import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer } from "react-toastify";


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
      <Navbar/>
     
      <div  className='flex justify-center'>
        <div className='bg-teal-400'>
         <h1>Hello {loggedInUser}</h1>
         <button onClick={actionLogout}>Logout</button>
        </div>
        <ToastContainer/>

      </div>
    </div>
    </>
  )
}

export default Home
