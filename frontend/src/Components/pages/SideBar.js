import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//import username from "../images/profilepic-2.jpg";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/SideBar.css";

// import icon1 from "./images/"

import { useState } from "react";

const SideBar = () => {
  const [isExpended, setExpendedState] = useState(false);
  const menuItems = [
    {
      text: "Dashboard",
      icon: "icons/grid.svg",
    },
    {
      text: "Duties",
      icon: "icons/folder.svg",
    },
    {
      text: "Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Notification",
      icon: "icons/message.svg",
    },
  ];

  return (
    <div
      className={
        isExpended
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand">
              <img src="icons/logo.svg" alt="nav brand" />
              <h2>AdminEnd</h2>
            </div>
          )}
          <button
            className={
              isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendedState(!isExpended)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
            >
              <img
                className="menu-item-icon"
                src={icon}
                alt="hey"
                srcset=""
              ></img>
              {isExpended && <p>{text}</p>}
              {!isExpended && <div className="tooltip">{text}</div>}
            </a>
          ))}
        </div>
      </div>

      <div className="na-footer">
        {isExpended && (
          <div className="na-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcset=""
            ></img>
            <div className="na-footer-info">
              <p className="na-footer-user-name">User</p>
              <p className="na-footer-user-position">Admin</p>
            </div>
          </div>
        )}
        <img
          className="logout-icon"
          src="icons/logout.svg"
          alt="helo"
          srcset=""
        ></img>
      </div>
    </div>
  );
};

export default SideBar;
