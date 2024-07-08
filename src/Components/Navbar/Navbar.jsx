import React, { useState } from "react";
import "./navbar.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { PiNewspaperClipping } from "react-icons/pi";
import Main from "../Main/Main";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [menu, setMenu] = useState(false); // Initially, menu is hidden

  const menuHandler = () => {
    setMenu(!menu);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // setMenu(false); // Close menu after selecting an item
  };

  return (
    <div className="main-navbar">
      <div className= "navbar">
        <div className="logo">
          <PiNewspaperClipping className="news-logo" />
          <h2>Ink News</h2>
        </div>

        <ul className={`${menu ? "show-menu" : "first-ul"}`}>
          <li id="ipl" onClick={() => handleItemClick("ipl")}>
            IPL
          </li>
          <li id="Finance" onClick={() => handleItemClick("Finance")}>
            Finance
          </li>
          <li id="Politics" onClick={() => handleItemClick("Politics")}>
            Politics
          </li>
          <li id="Technology" onClick={() => handleItemClick("Technology")}>
            Technology
          </li>
          <div className="btn-1">
            <input type="text" placeholder="e.g. Science" />
            <button>Search</button>
          </div>
        </ul>

        {menu ? (
          <RxCross2 className="menu-icon" onClick={menuHandler} />
        ) : (
          <IoMenu className="menu-icon" onClick={menuHandler} />
        )}
      </div>
      <div className="main-cards">
        <Main query={selectedItem} />
      </div>
    </div>
  );
};

export default Navbar;
