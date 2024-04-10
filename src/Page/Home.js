import React from "react";
import Hero from "../Assets/Images/Hero1.png";
import Logo from "../Assets/Images/Logo (2).png";
import { Link } from "react-router-dom";
import { categories } from "../Assets/Data/datas";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCards from "../Component/ProductCards";

import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupport } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";

function Home() {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?Limit=4").then((res) => {
      setTrend(res.data);
    });
  }, []);

  return (
    <>
      {/* Hero Section Start */}
      <section className=" mb-16">
        <div className="block relative">
          <img
            src={Hero}
            alt="Slogan"
            className="lg:h-[630px] object-cover w-full"
          />
          <div className="absolute top-5 right-5">
            <img src={Logo} alt="logo" className="w-24 md:w-52" />
          </div>
          <div className="absolute top-[40%] lg:top-[40%] left-[50%]">
            <h4 className="text-white text-[0.5rem] md:text-[1.5rem] font-semibold">
              Summer Season <span className="text-[#2c7a64]">Sales</span>
            </h4>

            <h2 className=" text-white text-[1rem] md:text-[2.5rem]  ">
              HUGE OFFER <span className="text-[#2c7a64]">70%</span>{" "}
            </h2>

            <Link
              to={"/shop"}
              className=" text-white text-[0.5rem] md:text-[1rem] mt-1 border border-white rounded-lg p-2 hover:bg-[#2c7a64]"
            >
              Shop now
            </Link>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Category Sction Start */}
      <section className="">
        <h3 className="text-3xl text-[#2c7a64] text-center font-semibold">
          CATEGORIES
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 mt-10">
          {categories.map((cat) => {
            const { id, image, btn } = cat;
            return (
              <Link
                to={"/shop"}
                key={id}
                className="flex flex-col items-center justify-center group hover:text-[#2c7a64]"
              >
                <img
                  className="h-40 w-40 lg:h-52 lg:w-52 rounded-full  group-hover:scale-[1.1] transition-all duration-500"
                  src={image}
                  alt={btn}
                />
                <h4 className="text-center mt-5">{btn.toUpperCase()}</h4>
              </Link>
            );
          })}
        </div>
      </section>
      {/* Category Sction End */}

      {/* Trending Section Starts */}
      <section className="mt-16">
        <h3 className="text-3xl text-[#2c7a64] text-center font-semibold">
          TRENDING PRODUCTS
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 p-10">
          {trend.slice(0, 4).map((i) => {
            return (
              <div key={i.id} className="flex justify-center">
                <ProductCards i={i} />
              </div>
            );
          })}
        </div>
      </section>
      {/* Trending Section Ends */}

      {/* Feature Start */}
      <section className="flex flex-col justify-center gap-10 mt-16">
      <h3 className="text-3xl text-[#2c7a64] text-center font-semibold">
          FEATURES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ps-10">
          <div className="flex gap-5">
            <p className="text-3xl text-[#2c7a64]">
              <LiaShippingFastSolid />
            </p>
            <div>
              <h5 className="font-semibold">FREE SHIPPING</h5>
              <p className="w-2/3">shipping on all US order or order above $99</p>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-3xl text-[#2c7a64]">
              <MdOutlineSupport />
            </p>
            <div>
              <h5 className="font-semibold">SUPPORT 24/7</h5>
              <p className="w-2/3">Contact us 24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-3xl text-[#2c7a64]">
              <TbTruckReturn />
            </p>
            <div>
              <h5 className="font-semibold">30 DAYS RETURN</h5>
              <p className="w-2/3">Simply return it within 30 days for an exchange.</p>
            </div>
          </div>
          <div className="flex gap-5">
            <p className="text-3xl text-[#2c7a64]">
              <MdOutlinePrivacyTip />
            </p>
            <div>
              <h5 className="font-semibold">100% PAYMENT SECURE</h5>
              <p className="w-2/3">We ensure secure payment with PEV</p>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Ends */}
    </>
  );
}

export default Home;
