
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Singup from './pages/Signup'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'
import Cart from './components/Cart'


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to='/login' />
  }

  return (
    <>
      <div>
      <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
        <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path="/home" element={<PrivateRoute element={<Home/>}/> } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Singup/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
