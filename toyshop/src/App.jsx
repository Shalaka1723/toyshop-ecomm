
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LogIn from './pages/Login'
import Singup from './pages/Signup'

function App() {


  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<Singup/>} />

        </Routes>
      </BrowserRouter>
      </div>

    </>
  )
}

export default App
