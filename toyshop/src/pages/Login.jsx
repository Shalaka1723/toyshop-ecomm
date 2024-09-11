import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Checkbox, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export default function LogIn() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const LoginData={
    typedEmail:email,
    typedPassword:password
  }

  const handleLogin=()=>{
    
  }
  

  return (
    <>
      <div className="bg-sky-200 flex justify-center items-center h-screen">
        <div className="w-fit my-6 p-6 bg-[#fff8c8] rounded-lg h-fit shadow-md ">
          <div className=" text-lg text-[#26a7b8] font-medium text-center my-2">
            THE TOY SHOP
          </div>
          <hr />
          <div className=" drop-shadow-md text-xl text-center text-[#afab23] font-medium  mb-4 ">
            LOGIN
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
              onChange={(e)=>setEmail(e)}
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
              onChange={(e)=>setPassword(e)}
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
          </div>
          <div className="mt-2 ">
            <Checkbox
              defaultChecked
              sx={{
                color: "#ae6ac2",
                "&.Mui-checked": {
                  color: "#ae6ac2",
                },
              }}
            />
            <label htmlFor="remember" className="pl-1 ">
              {" "}
              Remember me?{" "}
            </label>
          </div>
          <div className="mt-3">
            <Link
              to={"/"}
              onClick={()=>handleLogin()}
              className="drop-shadow-lg mt-1 p-2 bg-[#f0ea28] text-[#f6f6f6] font-semibold w-full rounded-xl border-pink-700"
            >
              LOGIN
            </Link>
          </div>
          <div className="flex justify-between mt-8 text-sm text-gray-400">
            <Link to={"/ForgotP"} className="">
              Forgot Password?
            </Link>
            <div className="">
              Need an account?
              <Link to={"/signup"} className="pl-1 underline">
                SIGN UP
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
