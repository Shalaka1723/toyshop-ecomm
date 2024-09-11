import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";

export default function Singup() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCpassword] = useState('')
  const navigate = useNavigate()

  const signupData ={
    userEmai:email,
    userPassword:password
  }

  const handleSignup=()=>{
    if(cpassword !== password){
      alert('Password does not match!')
      return
    }
    navigate('/login')
    console.log(signupData)
  }

  return (
    
    <>
      <div className="bg-pink-200 flex justify-center items-center h-screen">
        <div className="w-96 p-6 bg-white rounded-lg h-100 shadow-md ">
          <div className=" text-lg text-pink-500 font-medium text-center my-2">
            THE TOY SHOP
          </div>
          <hr />
          <div className=" drop-shadow-md text-xl text-center text-[#ae6ac2] font-medium  mb-4 ">
            SIGN UP
          </div>
          <div className="mt-3">
            <label htmlFor="Email" className="block mb-1 ">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
          </div>

          <div className="mt-3">
            <label htmlFor="Password" className="block mb-1 ">
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
            <label htmlFor="Confirm Password" className="block mb-1 ">
              {" "}
              Confirm Password{" "}
            </label>
            <input
              type="password"
              id="cpassword"
              value={cpassword}
              onChange={(e)=>setCpassword(e.target.value)}
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
          </div>

          <div className="mt-5">
            <button
              onClick={()=>handleSignup()}
              className="drop-shadow-lg p-2 bg-[#780187] text-white font-semibold w-full rounded-xl border-pink-700"
            >
              SIGN UP
            </button>
          </div>
          <div className="flex justify-between mt-8 text-sm text-gray-400">
            <div className="">
              Already have an account?
              <Link to={"/login"} className="pl-1 underline">
                LOGIN
              </Link>
            </div>
          </div>
          <hr className="mt-2 mb-4 border-1"></hr>

          <div className=" flex justify-center gap-3 ">
            <GoogleIcon sx={{ color: "#ae6ac2" }} />
            <FacebookIcon sx={{ color: "#ae6ac2" }} />
            <LinkedInIcon sx={{ color: "#ae6ac2" }} />
          </div>
        </div>
      </div>
    </>
  );
}
