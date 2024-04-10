import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../FireabseAuth/FireBaseAuth";

function Register() {
  const [userReg, setUserReg] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigateLogin = useNavigate()

  const handleChange = (e) => {
    setUserReg({ ...userReg, [e.target.name]: e.target.value });
  };

  const handleRegSub = (e) => {
    e.preventDefault();

    if (!userReg.username || !userReg.email || !userReg.password) {
      return toast.error("All fields are Required!");
    } else {
      createUserWithEmailAndPassword(auth, userReg.email, userReg.password)
        .then(async(res) => {
          const user = res.user;

          await updateProfile(user,{
            displayName:userReg.username
          })

          navigateLogin("/login")
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <>
      <section className="flex place-content-center mt-10">
        <div className="">
          <h5 className='text-2xl relative after:content-[""] after:absolute after:bg-[#2c7a64] after:w-7 after:h-1 after:left-0 after:-bottom-0'>
            Registration
          </h5>
          <form className="mt-10">
            <div className="flex gap-5 border-b-2 pb-2 px-1 w-80">
              <FaUser className="text-2xl text-[#2c7a64] group" />
              <input
                type="text"
                autoComplete="username"
                placeholder="Enter your Name"
                name="username"
                value={userReg.username}
                className="outline-none font-semibold focus:group-border[#2c7a64] w-full "
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5 border-b-2 pb-2 px-1 w-80 mt-5">
              <IoMdMail className="text-2xl text-[#2c7a64] group" />
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                name="email"
                value={userReg.email}
                className="outline-none font-semibold focus:group-border[#2c7a64] w-full "
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5 border-b-2 pb-2 px-1 w-80 mt-5">
              <FaLock className="text-xl text-[#2c7a64] group" />
              <input
                type="password"
                autoComplete="new-password"
                placeholder="Create your Password"
                name="password"
                value={userReg.password}
                className="outline-none font-semibold focus:group-border[#2c7a64] w-full"
                onChange={handleChange}
              />
            </div>
          </form>

          <input
            type="submit"
            onClick={handleRegSub}
            className="w-full text-center border p-2 font-semibold rounded-sm mt-10 bg-[#2c7a64] text-white hover:bg-[#315d50] transition-all"
          />

          <p className="text-sm font-semibold mt-5 text-center">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#2c7a64] hover:underline">
              Login now
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
