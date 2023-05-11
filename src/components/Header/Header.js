import React from "react";
import "./Header.css";
import title from "../../Images/Rancid-Tomatillos-5-10-2023.png";
import logo from "../../Images/tomatillos.png";

const Header = () => {
  return (
    <header>
      <img className="title-logo" src={title} alt="Rancid tomatillos text" />
      <img className="logo" src={logo} alt=" three cartoon tomatillos"/>
    </header>
  )
}

export default Header;