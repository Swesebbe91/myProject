import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../Images/sunset_run_transparent.png";
import {BsFacebook, BsInstagram, BsCartPlusFill} from 'react-icons/bs'
const Nav = ({value}) => {

      
  return (
    <div className="bg-color px d-flex" >
      <div className="d-flex">
        <a href="http://localhost:3000/">
          <img src={logo} alt="Logo of SunsetRun Page" className="logo-size" />
        </a>
        <div className="border-line-right ">
          
        <div className="ml-sm mr-sm ">
          <Link to="/" className="text-decoration-none dark font-size hoverColor">Hem</Link>
          </div>
          </div>
          <div className="border-line-right ">
        <div className="ml-sm mr-sm">
          <Link to="/information" className="text-decoration-none dark font-size hoverColor">Information</Link>
        </div></div>
        <div className="border-line-right ">
        <div className="ml-sm mr-sm">
          <Link to="/about" className="text-decoration-none dark font-size hoverColor">Om oss</Link>
        </div>
        </div>
        <div className="border-line-right ">
        <div className="ml-sm mr-sm">
          <Link to="/contact" className="text-decoration-none dark font-size hoverColor">Kontakt</Link>
        </div>
        </div>
        <div className="ml-sm">
          <Link to="/partners" className="text-decoration-none dark font-size hoverColor">Partners</Link>
        </div>
      </div>
      <div className="d-flex mr-s" >
        <div className="ml-sm ">
          <BsFacebook size="2rem"/>
          
        </div>
        <div className="ml-sm">
          <BsInstagram size="2rem"/>
        </div>
        <div className="ml-sm position-relative">
          <Link to="/cart" className="text-decoration-none dark ">
          <BsCartPlusFill size="2rem"/>
          </Link>
          <div>
            <span className="position-absoulute bg-sunny circle border-line shadow icon-badge dark">0{value}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
