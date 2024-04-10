import React from "react";
import Banner from "../Assets/Images/About.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="">
        <div className="flex justify-center">
          <div className="bg-cover w-[90%] rounded-xl p-5 text-center mt-2 banner">
            <h5 className="text-[#2c7a64] font-semibold">About us</h5>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={Banner}
            alt="Banner"
            className=" lg:h-[400px] w-[50%] rounded-xl mt-5"
          />
        </div>

        <div className="mt-5 flex flex-col gap-2 w-[95%] p-5">
          <div>
            <h6 className="text-[1.2rem] font-semibold text-[#2c7a64]">
              Welcome to Threads Kart
            </h6>
            <p className="text-[.8rem]">
              At{" "}
              <Link to={"/"} className="text-blue-400">
                Threads Kart
              </Link>
              , we're passionate about delivering top-quality products and an
              exceptional shopping experience to our customers. Since our
              inception, we've been committed to offering a diverse selection of
              products that cater to various needs and interests.
            </p>
          </div>
          <div>
            <h6 className="text-[1.2rem] font-semibold text-[#2c7a64]">
              Our Story
            </h6>
            <p className="text-[.8rem]">
              Founded in 2024,{" "}
              <Link to={"/"} className="text-blue-400">
                Threads Kart
              </Link>{" "}
              started as a small venture with a big dream: to become a trusted
              destination for online shoppers worldwide. Over the years, we've
              grown exponentially, expanding our product range and refining our
              services to meet the evolving demands of our valued customers.
            </p>
          </div>
          <div>
            <h6 className="text-[1.2rem] font-semibold text-[#2c7a64]">
              Our Mission
            </h6>
            <p className="text-[.8rem]">
              At{" "}
              <Link to={"/"} className="text-blue-400">
                Threads Kart
              </Link>{" "}
              , our mission is simple: to make online shopping enjoyable,
              convenient, and secure for everyone. We're committed to
              continually improving and innovating to exceed our customers'
              expectations.
            </p>
          </div>
          <div>
            <h6 className="text-[1.2rem] font-semibold text-[#2c7a64]">
              Get in Touch
            </h6>
            <p className="text-[.8rem]">
              We love hearing from our customers! Whether you have feedback,
              suggestions, or just want to say hello, don't hesitate to reach
              out to us. You can contact us via email, phone, or social
              media—we're always here to help.
            </p>
          </div>
          
        </div>

        <p className="font-semibold p-5">
            Thank you for choosing{" "}
            <Link to={"/"} className="text-blue-400">
              Threads Kart
            </Link>{" "}
            for all your shopping needs. We look forward to serving you!
          </p>
      </section>
    </>
  );
}

export default About;
