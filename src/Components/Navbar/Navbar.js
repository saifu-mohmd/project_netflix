import React from "react";
import "./Navbar.css";
import { IoSearch, IoNotifications, IoPerson } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import {
  IoPersonSharp,
  IoPeopleSharp,
  IoSettings,
  IoLogOut,
} from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="navbar">
        <div className="nav-left">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/netflix-app-icon.png"
            alt="Netflix Small Logo"
            className="responsive-logo"
          />
        </div>
        <div className="nav-right">
          <ul className="nav-ul">
            <li className="active">
              <IoSearch className="li-icon" />
            </li>
            <li className="active">
              <a href="#kids" className="kids active-link">
                KIDS
              </a>
            </li>
            <li>
              <a href="#dvd" className="dvd active-link">
                DVD
              </a>
            </li>
            <li className="active">
              <IoNotifications className="li-icon" />
            </li>
            <li className="active">
              <IoPerson className="li-icon" />
            </li>
            <li
              className="toggle_btn"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <HiMiniBars3CenterLeft className="toggle-bar" />
            </li>
          </ul>
        </div>
      </div>

      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <div className="drop-menu-section">
          <ul>
            <li className="home active">
              <HiHome className="home-icon drop-li-icon" />
              <a href="#home" className="home-link active-link">
                Home
              </a>
            </li>
            <li className="watchList">
              <MdFavorite className="drop-li-icon" />
              <a href="#watchList">Watchlist</a>
            </li>
            <li className="comingSoon">
              <FaCalendar className="comingSoon-mob drop-li-icon" />
              <a href="#comingSoon">Coming Soon</a>
            </li>
            <li className="watchList">
              <IoPersonSharp className="drop-li-icon" />
              <a href="#watchList">Friends</a>
            </li>
            <li className="comingSoon">
              <IoPeopleSharp className="drop-li-icon" />
              <a href="#comingSoon">Parties</a>
            </li>
            <li className="watchList">
              <IoSettings className="drop-li-icon" />
              <a href="#watchList">Settings</a>
            </li>
            <li className="comingSoon">
              <IoLogOut className="drop-li-icon" />
              <a href="#comingSoon">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
