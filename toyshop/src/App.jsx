
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Signup'
import { useState } from 'react'


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to='/login' />
  }

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path="/home" element={<PrivateRoute element={<Home/>}/> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Singup/>} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
