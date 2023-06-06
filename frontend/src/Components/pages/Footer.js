import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

import "../css/common.css";

// import "../App.css"
import Home from "./Home";
import "../css/Footer.css";
import adminpic from "../images/adminLogo.svg";

const handleLogoutBtn = () => {
  console.log("Handle logout btn");
  localStorage.removeItem("access_token"); // Remove access token from local storage
};

function Footer() {
  return (
    // <footer className="myfooter">
    //   <hr className="spacehere" />
    //   <center className="footer-bottom-text">Copyright&#169; My web</center>
    // </footer>

    <div className="wrapper">
      <header></header>
      <main></main>
      <hr className="spacehere" />
      <footer>Copyright&#169; My web</footer>
    </div>
  );
}

export default Footer;
