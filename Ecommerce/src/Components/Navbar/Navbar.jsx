import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const cartLength = useSelector((state) => state.cart.length);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" className="flex items-center justify-center" >
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <Link to="/cart" className=" cursor-pointer flex relative ">
          {" "}
          <img src={cart_icon} alt="" />{" "}
          <span className=" bg-red-400 absolute -top-5 -right-1 p-2 text-white rounded-full">
            {cartLength}
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};
