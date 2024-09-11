import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "./Home";

export default function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const loginData = {
    email:email,
    password:password
  }

  const handleLogin = async ()=> {
    if(!email || !password ){
        errorToast('All fields mandatory');
      return
    }
    try {
        const url = "http://localhost:5001/auth/login";
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const result = await response.json();
        const {success, message, jwtToken, error} = result;
        console.log(message);

        if(success){
            successToast(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', email);
            setTimeout(()=>{
                navigate('/home')
            },1000)
        }else if(error){
            const details = error?.details[0].message;
            errorToast(details);
        }else if(!success){
            errorToast(message);
        }
        console.log(result);
    } catch (err) {
        errorToast(err);
    }

    console.log(loginData)
  }


  return (
    <>
      <div className="bg-sky-200 flex justify-center items-center h-screen">
        <div className="w-fit my-6 p-6 bg-[#fde744] rounded-lg h-fit shadow-md ">
          <div className=" text-lg text-[#1393a4] font-medium text-center my-2">
            THE TOY SHOP
          </div>
          <hr className=" border-black" />
          <div className=" drop-shadow-md text-xl text-center text-[#98941e] font-medium  mb-4 ">
            LOGIN
          </div>
          <div className="mt-3">

            <label htmlFor="Email" className="block mb-1 ">
              Email</label>

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
              Password</label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="rounded border-2 w-full px-2 py-1 focus:border-gray-600"
            />
          </div>
          <div className="mt-2 ">
            <Checkbox
              defaultChecked
              sx={{
                color: "#98941e",
                "&.Mui-checked": {color: "#98941e",},
            }}
            />

            {/* <label htmlFor="remember" className="pl-1 ">
              Remember me?</label> */}

          </div>
          <div className="mt-3">
            <Link
              to={"/"}
              onClick={()=>handleLogin()}
              className="drop-shadow-lg p-2 bg-[#fffb94] text-[#98941e] font-semibold w-full rounded-xl "
            >
              LOGIN</Link>

          </div>
          {/* <div className="flex justify-between mt-8 text-sm ">
            <Link to={"/ForgotP"} className="">
              Forgot Password?
            </Link> */}
            <div className="mt-8 text-sm text-[#98941e]">
              Don't have an account?
              <Link to={"/signup"} className="pl-1 underline">
                SignUp</Link>

            </div>
          {/* </div> */}
          <hr className="mt-2 mb-4 border-black"></hr>

          <div className=" flex justify-center gap-3 ">
            <GoogleIcon sx={{ color: "#98941e" }} />
            <FacebookIcon sx={{ color: "#98941e" }} />
            <LinkedInIcon sx={{ color: "#98941e" }} />
          </div>
        </div>
        <ToastContainer />
      </div>

    </>
  );
}
