import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

function Contact() {
  return (
    <>
      <section>
        <div className="container w-[90%] mx-auto mb-10">
          <div className="bg-cover p-5 text-center rounded-xl mt-5 banner">
            <h5 className="text-[#2c7a64] font-semibold">About us</h5>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center">
            <div className="relative flex flex-col justify-center lg:after:content-[''] lg:after:h-[70%] lg:after:w-[0.5%] lg:after:bg-gray-400 lg:after:absolute lg:after:-right-5 gap-4 mt-10">
              <div className="flex items-center gap-4">
                <MdOutlineLocationOn />
                <p>
                  Thambaram, Chennai,
                  <br /> Tamil Nadu, 600 005.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <IoMailOpenOutline />
                <p>threadskart@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <LuPhoneCall />
                <p>+91 8524004484</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62171.037651994084!2d80.10732004164699!3d13.118823761944238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ba9a487b3f%3A0x1e923f00f5206296!2sAmbattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704605295608!5m2!1sen!2sin"
              className="h-[500px] lg:h-[400px] lg:w-[70%] bg-[#2c7a] lg:mt-10"
              loading="eager"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form className="text-center mt-10">
            <h3 className="text-4xl font-semiboldbold font-[cookie]">
              Feel free to connect with us
            </h3>
            <div className="mt-10">
              <label className="relative">
                <input
                  type="text"
                  required
                  className="h-12 w-[80%] lg:w-[40%] text-[1rem]  px-6 border-2 border-gray-400 border-opacity-50 rounded-lg outline-none focus:border-[#2c7a64] transition duration-200"
                />
                <span className="text-[0.9rem] text-opacity-80 absolute left-0 top-[0%] mx-6 px-2 transition duration-200 input-text">
                  Enter Full Name
                </span>
              </label>
              <div className="text-[#ece9e9]">h</div>
              <label className="relative">
                <input
                  type="text"
                  name="user_email"
                  required
                  className="h-12 w-[80%] lg:w-[40%] text-[1rem] px-6 border-2 border-gray-400 border-opacity-50 rounded-lg outline-none focus:border-[#2c7a64] transition duration-200"
                />
                <span className="text-[0.9rem] text-opacity-80 absolute left-0 top-[0%] mx-6 px-2 transition duration-200 input-text">
                  Enter your E-mail
                </span>
              </label>
              <div className="text-[#ece9e9]">h</div>
              <label className="relative">
                <textarea
                  name="message"
                  required
                  className="h-20 w-[80%] lg:w-[40%] text-[1rem] p-6 border-2 border-gray-400 border-opacity-50 rounded-lg outline-none focus:border-[#2c7a64] transition duration-200"
                ></textarea>
                <span className="text-[0.9rem] text-opacity-80 absolute left-0 m-6 px-2 transition duration-200 input-text">
                  Enter your E-mail
                </span>
              </label>
            </div>
            <input
              className="border-2 border-[#2c7a64] mt-5 px-4 rounded-md"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
