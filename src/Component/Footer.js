import React from 'react'
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from '../Assets/Images/Logo (2).png'

function Footer() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="bg-gray-400 p-10 text-[0.9rem] flex flex-col gap-8 mt-10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-28 justify-center">
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-5">
            <img src={Logo} alt='Logo'/>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MdOutlineLocationOn className="text-xl" />
              <h6>Chennai</h6>
            </div>
            <div className="flex items-center gap-3">
              <IoMailOutline className='text-xl' />
              <h6>threadskart@gmail.com</h6>
            </div>
            <div className="flex items-center gap-3">
              <LuPhoneCall className="text-[1rem]" />
              <h2>+91 82708 35874</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[1.2rem] text-white">Category</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">Men's wear</li>
            <li className="cursor-pointer">Women's wear</li>
            <li className="cursor-pointer">Electonics</li>
            <li className="cursor-pointer">Jwellery</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[1.2rem] text-white">About</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[1.2rem] text-white">Legal</h2>
          <ul className="flex flex-col gap-3">
            <li className="cursor-pointer">
              <Link to={"/privacy"}>Privacy Policy</Link>
            </li>
            <li className="cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p>
          &#169; {year} Threads Kart. All
          Rights Reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer