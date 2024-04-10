import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../Assets/Images/Logo (2).png";
import { signOut } from "firebase/auth";
import { auth } from "../FireabseAuth/FireBaseAuth";
import toast from "react-hot-toast";

// import { BiLogOut } from "react-icons/bi";
// import { FaBars } from "react-icons/fa";
// import { CgClose } from "react-icons/cg";
export const Navbar = ({ userName }) => {
  // let [sideNav, setSideNav] = useState(false);
  let [clsOff, setClsOff] = useState(false);

  // function handleSideNavOpen() {
  //   setSideNav(!sideNav);
  // }

  function handleClsOff() {
    setClsOff(!clsOff);
  }
  const counts = 10;

  const handleLogout = () => {
  
    auth.signOut()
      .then(() => {
        toast.success("Logout Successfully.")
      })
      .catch((error) => {
        toast.error(error)
      });
  };

  return (
    <section className="sticky top-0 bg-white border-b-2 z-50">
      <div
        className={
          clsOff
            ? "hidden"
            : "flex items-center justify-center gap-3 bg-[#222] text-[#fff] p-2  text-[0.8rem] lg:text-[1rem] w-full"
        }
      >
        <p className="">
          Free shipping for standard order over{" "}
          <span className="text-[#2c7a64]">$99/-</span>
        </p>
        <IoMdCloseCircle onClick={handleClsOff} className="text-2xl" />
      </div>
      <nav className="flex items-center justify-between p-3">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-10 object-contain" />
        </Link>
        <div className="hidden lg:block md:bl">
          <ul className="flex gap-4 text-[1.1rem]">
            <li className="hover:text-[#2c7a64] transition-all duration-300 font-semibold">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="relative group ">
              <NavLink
                to={"/shop"}
                className="hover:text-[#2c7a64]  transition-all duration-300 font-semibold cursor-pointer"
              >
                Shop
              </NavLink>
            </li>
            <li className="hover:text-[#2c7a64] transition-all duration-300 font-semibold">
              <NavLink to={"/about"}>About us</NavLink>
            </li>
            <li className="hover:text-[#2c7a64] transition-all duration-300 font-semibold">
              <NavLink to={"/contact"}>Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-12 justify-center items-center">
          <div className="flex gap-5 items-center">
            <div className="hidden lg:flex gap-4 justify-center item-center">
              <div className=" text-2xl ">
                <Badge size="small" count={counts}>
                  <NavLink to={"/.."}>
                    <ShoppingCartOutlined className="hover:text-[#2c7a64] transition-all duration-300 font-semibold text-2xl" />
                  </NavLink>
                </Badge>
              </div>
            </div>
            {/* <div className='pr-5 hidden lg:block'>
                        <div className='text-center bg-[#dc2626] text-white rounded-xl hover:bg-black hover:text-white transition-all'>
                            <Link className=' duration-300 font-semibold flex gap-2 p-2 ' to={'logout'}><BiLogOut className='text-2xl mx-[auto]'/><span className='text-[1rem]'>Logout</span></Link>
                        </div>
                    </div> */}

            <div className="pr-5 hidden lg:flex items-center gap-2">
              {userName ? (
                <>
                  <div
                    className=" bg-[#2c7a64] text-white rounded-xl hover:bg-black hover:text-white transition-all"
                    onClick={handleLogout}
                  >
                    <Link
                      className=" duration-300 font-semibold flex gap-2 p-2 "
                    >
                      <FaRegUser className="text-2xl mx-[auto]" />
                      <span className="text-[1rem]">Logout</span>
                    </Link>
                  </div>
                  <span className="font-bold">Hello, {userName}</span>
                </>
              ) : (
                <div className=" bg-[#2c7a64] text-white rounded-xl hover:bg-black hover:text-white transition-all">
                  <Link
                    className=" duration-300 font-semibold flex gap-2 p-2 "
                    to={"/login"}
                  >
                    <FaRegUser className="text-2xl mx-[auto]" />
                    <span className="text-[1rem]">Login</span>
                  </Link>
                </div>
              )}
            </div>

            {/* <div className="lg:hidden flex items-center">
              <FaBars onClick={handleSideNavOpen} className="text-2xl" />
            </div> */}
          </div>
        </div>
      </nav>

      {/* <div
        className={
          sideNav
            ? "absolute top-0 left-0 bg-gray-200 h-[100vh] w-[80vw] z-[99] text-center transition-all duration-1000"
            : "absolute top-0 left-[-400%] bg-gray-200 h-[100vh] w-[100vw] z-[99] text-center transition-all duration-1000"
        }
      >
        <CgClose
          onClick={handleSideNavOpen}
          className="absolute mt-7 mr-7 text-3xl right-0"
        />
        <div className="mt-[5rem]">
          <h1 className="text-3xl font-bold">
            <Link href="#">
              <span className="text-[#2c7a64]">Threads</span> Kart
            </Link>
          </h1>
          <h3>Hi Abdul</h3>
        </div>
        <div className="">
          <ul className="flex flex-col font-semibold gap-4 text-[1.1rem] mt-[2rem]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About us</Link>
            </li>
            <li>
              <Link to={"/"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};

export default Navbar;
