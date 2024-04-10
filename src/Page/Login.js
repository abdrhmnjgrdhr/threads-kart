import React from "react";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireabseAuth/FireBaseAuth";

function Login() {

  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
  });

  const navigateHome = useNavigate()

  const handleChange = (e) => {
    setUserLog({ ...userLog, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userLog.email || !userLog.password) {
      return toast.error("All fields are Required!");
    } else {
      signInWithEmailAndPassword(auth, userLog.email, userLog.password)
        .then((res) => {
          navigateHome("/")
        })
        .catch((err) => toast.error(err.message));

        toast.success("Login Succesfully")
    }
  };

  return (
    <>
      <section className="flex place-content-center mt-10">
        <div className="">
          <h5 className='text-2xl relative after:content-[""] after:absolute after:bg-[#2c7a64] after:w-7 after:h-1 after:left-0 after:-bottom-0'>
            Login
          </h5>
          <form className="mt-10">
            <div className="flex gap-5 border-b-2 pb-2 px-1 w-80">
              <IoMdMail className="text-2xl text-[#2c7a64] group" />
              <input
                type="email"
                autoComplete="off"
                name="email"
                value={userLog.email}
                placeholder="Enter your email"
                className="outline-none font-semibold focus:group-border[#2c7a64] w-full "
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5 border-b-2 pb-2 px-1 w-80 mt-5">
              <FaLock className="text-xl text-[#2c7a64] group" />
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Enter your Password"
                name="password"
                value={userLog.password}
                className="outline-none font-semibold focus:group-border[#2c7a64] w-full"
                onChange={handleChange}
              />
            </div>
          </form>
          <button className="text-sm font-semibold text-blue-500 mt-2">
            Forgot password?
          </button>
          <input type="submit" onClick={handleLogin} className="w-full text-center border p-2 font-semibold rounded-sm mt-10 bg-[#2c7a64] text-white hover:bg-[#315d50] transition-all "/>
            
          <p className="text-sm font-semibold mt-5 text-center">Don't have an account? <Link to={'/register'} className="text-[#2c7a64] hover:underline">Register now</Link></p>
        </div>
      </section>
    </>
  );
}

export default Login;
