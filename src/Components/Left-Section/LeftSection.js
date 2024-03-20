import React from "react";
import "./LeftSection.css";
import { HiHome } from "react-icons/hi";
import { MdFavorite } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import {
  IoPersonSharp,
  IoPeopleSharp,
  IoSettings,
  IoLogOut,
} from "react-icons/io5";
function LeftSection() {
  return (
    <div className="left-section-component">
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
          className="logo"
        />
      </div>

      {/* --------------------- Menu --------------------- */}

      <div className="menu-section">
        <h5 className="menu">Menu</h5>

        <ul>
          <li className="home active">
            <HiHome className="home-icon li-icon" />
            <a href="#home" className="home-link active-link">
              Home
            </a>
          </li>
          <li className="watchList">
            <MdFavorite className="li-icon" />
            <a href="#watchList">Watchlist</a>
          </li>
          <li className="comingSoon">
            <FaCalendar className="comingSoon li-icon" />
            <a href="#comingSoon">Coming Soon</a>
          </li>
        </ul>
      </div>

      {/* --------------------- Social --------------------- */}

      <div className="menu-section">
        <h5 className="menu">Social</h5>

        <ul>
          <li className="home">
            <IoPersonSharp className="li-icon" />
            <a href="#home" className="home-link">
              Friends
            </a>
          </li>
          <li className="watchList">
            <IoPeopleSharp className="li-icon" />
            <a href="#watchList">Parties</a>
          </li>
        </ul>
      </div>

      {/* --------------------- General --------------------- */}

      <div className="menu-section general-section">
        <h5 className="menu">General</h5>

        <ul>
          <li className="home">
            <IoSettings className="home-icon li-icon" />
            <a href="#home" className="home-link">
              Settings
            </a>
          </li>
          <li className="watchList">
            <IoLogOut className="li-icon" />
            <a href="#watchList">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSection;
