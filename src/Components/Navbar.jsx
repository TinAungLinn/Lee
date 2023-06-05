import React from "react";
import {  NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"

const Navbar = () => {

  const activeClass = ({isActive}) => {
    return {
      color : isActive ? "#38BDF8" : "rgb(43, 43, 43)"
    }
  }

  return (
    <div className=" flex shadow-lg backdrop-blur-lg justify-between items-center p-10" style={{backgroundColor : "#F9FAFB"}}>
      <NavLink to={"/"}>
        <h1 className=" text-slate-900 text-5xl">Shopper</h1>
      </NavLink>
      <div className=" flex justify-center items-center gap-3">
        <NavLink to={"/"} style={activeClass} >
          Home
        </NavLink>
        <NavLink style={activeClass} to={"/about"} >
          About
        </NavLink>
        <NavLink style={activeClass} to={"/product"} >
          Product
        </NavLink>
        <NavLink style={activeClass} to={"/booking"} >
          Booking
        </NavLink>
        <NavLink style={activeClass} to={"/contact"} >
          Contact
        </NavLink>
        <NavLink style={activeClass} to={"/cart"} >
          <FaShoppingCart/>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
