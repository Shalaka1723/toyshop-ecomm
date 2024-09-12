import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Checkbox } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "./Home";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginData = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    if (!email || !password) {
      errorToast("All fields mandatory");
      return;
    }
    try {
      const url = "http://localhost:5001/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();
      const { success, message, jwtToken, error } = result;
      console.log(message);

      if (success) {
        successToast(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", email);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        errorToast(details);
      } else if (!success) {
        errorToast(message);
      }
      console.log(result);
    } catch (err) {
      errorToast(err);
    }

    console.log(loginData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#f9f4fc] flex justify-center items-start h-screen">
        <div className="flex gap-12 w-1/2 mt-10 p-6 bg-[#fde744] rounded-lg h-fit shadow-md ">

          <section className="left flex flex-col text-center rounded-md bg-[#f6ec9a] p-3 w-2/3 ">

            <div className="mt-3">
              <label htmlFor="Email" className="block mb-1 ">
                Email</label>

              <input
                type="email"
                id="email"
                placeholder="abc@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-center rounded-lg text-[#561b78] w-3/4 px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="Password" className="block mb-1 ">
                Password</label>

              <input
                type="password"
                id="password"
                placeholder="* * * * *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center rounded-lg text-[#561b78] w-3/4 px-2 py-1 focus:border-gray-600"
              />
            </div>

            <div className="mt-2 ">
              <Checkbox
                defaultChecked
                sx={{
                  color: "#98941e",
                  "&.Mui-checked": { color: "#98941e" },
                }}
              />

              <label htmlFor="remember" className="">
                Remember me?
              </label>
            </div>
            <div className="mt-3">
              <button
                to={"/"}
                onClick={() => handleLogin()}
                className="drop-shadow-lg p-2 bg-[#fffa70] text-[#98941e] hover:bg-[#532a6f] font-semibold w-3/4 rounded-xl ">
                LOGIN</button>

            </div>
          </section>

          <section className="right w-1/3">
          
            <div className=" drop-shadow-xl text-lg text-center text-[#521973] font-medium p-2  mb-4 ">
              Login with your Toy Shop account credentials.
            </div>

            {/* <div className="flex justify-between mt-8 text-sm ">
            <Link to={"/ForgotP"} className="">
              Forgot Password?
            </Link> */}
            <div className="mt-8 text-sm text-center text-[#98941e]">
              Don't have an account?
              <Link to={"/signup"} className="pl-1 underline hover:text-[#532a6f]">
                SignUp</Link>
                
            </div>
            {/* </div> */}
            <hr className="mt-2 mb-4 border-[#4b1471]"></hr>

            <div className=" flex justify-center gap-3 ">
              <GoogleIcon sx={{ color: "#4b1471" }} />
              <FacebookIcon sx={{ color: "#4b1471" }} />
              <LinkedInIcon sx={{ color: "#4b1471" }} />
            </div>
          </section>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
