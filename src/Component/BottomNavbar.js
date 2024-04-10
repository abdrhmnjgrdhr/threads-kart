import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Badge } from "antd";

const NavbarBottom = () => {
  return (
    <section className="flex justify-between shadow-lg border-t-2 gap-7 p-5 bottom-0 sticky z-10  bg-white lg:hidden">
      <NavLink to={"/shop"} className="text-center">
        <FaShoppingBag className="text-2xl mx-[auto]" />
        <p className="text-[.8rem]">Shop</p>
      </NavLink>
      <NavLink to={"/contact"} className="text-center">
        <RiContactsBook2Line className="text-2xl mx-[auto]" />
        <p className="text-[.8rem]">Contact</p>
      </NavLink>
      <NavLink to={"/about"} className="text-center">
        <TbListDetails className="text-2xl mx-[auto]" />
        <p className="text-[.8rem]">About</p>
      </NavLink>
      <Badge count={1} className="">
        <NavLink to={"cart"} className="text-center">
          <MdOutlineShoppingCart className="text-2xl mx-[auto]" />
          <p className="text-[.8rem]">Cart</p>
        </NavLink>
      </Badge>
    </section>
  );
};

export default NavbarBottom;
