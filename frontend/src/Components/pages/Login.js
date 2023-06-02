// import React, { Component } from "react";
// import Home from "./Home";
// import Notifications from "./Notifications";
// import "../css/Login.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock } from "@fortawesome/fontawesome-free";
// import profilepic from "../images/avatar.svg";
// import { useSpring, animated } from "react-spring";
// import mysvgimg from "../images/loginSVGImage.svg";
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       loggedIn: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     const animation = useSpring({
//       from: { opacity: 0, transform: "scale(0.5)" },
//       to: { opacity: 1, transform: "scale(1)" },
//     });
//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     fetch("http://localhost:3000/loginData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.state),
//     })
//       .then((response) => response.json())
//       .then((data1) => {
//         if (data1.success) {
//           this.setState({
//             loggedIn: true,
//           });
//         }
//       })
//       .then((data1) => console.log(data1));
//   }

//   render() {
//     if (this.state.loggedIn) {
//       console.log("Login state true ===> ", this.state.loggedIn);
//       return <Home />;
//     }

//     return (
//       <div className="container">
//         <div id="imageContainer">
//           <animated.img
//             src={mysvgimg}
//             style={animation}
//             alt="Animated SVG"
//           ></animated.img>
//         </div>
//         <div className="login-content">
//           <form onSubmit={this.handleSubmit}>
//             <img src={profilepic} alt="avatar" />

//             {console.log("Login state false")}
//             {console.log("Login status is: -->", this.state.loggedIn)}

//             <h2 className="title">Welcome</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <FontAwesomeIcon icon={faUser} />
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="username"
//                   placeholder="username"
//                   value={this.state.username}
//                   onChange={this.handleChange}
//                   name="username"
//                 />
//               </div>
//             </div>
//             <div className="input-div pass">
//               <div className="i">
//                 <FontAwesomeIcon icon={faLock} />
//               </div>

//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="password"
//                   placeholder="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <a id="loginA" href="#">
//               Forgot Password?
//             </a>
//             <input type="submit" className="myLoginBtn" value="Submit" />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
// import React, { Component } from "react";
// import Home from "./Home";
// import Notifications from "./Notifications";
// import "../css/Login.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock } from "@fortawesome/fontawesome-free";
// import profilepic from "../images/avatar.svg";
// import svgimg from "../images/loginSVGImage.svg";
// import { useSpring, animated } from "react-spring";
// import { ReactComponent as AnimatedSVG } from "../images/loginSVGImage.svg";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       loggedIn: false,
//       showAnimation: false, // Track animation state
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     // Start the animation after component mount
//     setTimeout(() => {
//       this.setState({ showAnimation: true });
//     }, 100);
//   }

//   handleChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     fetch("http://localhost:3000/loginData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.state),
//     })
//       .then((response) => response.json())
//       .then((data1) => {
//         if (data1.success) {
//           this.setState({
//             loggedIn: true,
//           });
//         }
//       })
//       .then((data1) => console.log(data1));
//   }

//   render() {
//     if (this.state.loggedIn) {
//       console.log("Login state true ===> ", this.state.loggedIn);
//       return <Home />;
//     }

//     const animation = useSpring({
//       from: { opacity: 0, transform: "scale(0.5)" },
//       to: { opacity: 1, transform: "scale(1)" },
//     });
//     return (
//       <div className="container">
//         <div id="imageContainer">
//           <animated.div style={animation}>
//             <AnimatedSVG />
//           </animated.div>
//         </div>
//         <div className="login-content">
//           <form onSubmit={this.handleSubmit}>
//             <img src={profilepic} alt="avatar" />

//             {console.log("Login state false")}
//             {console.log("Login status is: -->", this.state.loggedIn)}

//             <h2 className="title">Welcome</h2>
//             <div className="input-div one">
//               <div className="i">
//                 <FontAwesomeIcon icon={faUser} />
//               </div>
//               <div className="div">
//                 <h5>Email</h5>
//                 <input
//                   type="email"
//                   className="username"
//                   placeholder="username"
//                   value={this.state.username}
//                   onChange={this.handleChange}
//                   name="username"
//                 />
//               </div>
//             </div>
//             <div className="input-div pass">
//               <div className="i">
//                 <FontAwesomeIcon icon={faLock} />
//               </div>

//               <div className="div">
//                 <h5>Password</h5>
//                 <input
//                   type="password"
//                   className="password"
//                   placeholder="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </div>
//             <a id="loginA" href="#">
//               Forgot Password?
//             </a>
//             <input type="submit" className="myLoginBtn" value="Submit" />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;

import React, { useState, useEffect } from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import "../css/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/fontawesome-free";
import profilepic from "../images/avatar.svg";
import AnimatedSVG from "./AnimatedSVG";
import svgimg from "../images/sidepanel.png";

// import { useSpring, animated } from "react-spring";
//import { ReactComponent as AnimatedSVG } from "../images/loginSVGImage.svg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [dutyStatus, setDutyStatus] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 100);
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://127.0.0.1:5000/loginData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem("access_token", data.access_token);
          console.log("Token---:", localStorage.getItem("access_token"));
          setLoggedIn(true);
        } else {
          setDutyStatus("Invalid Credentials!");
          setOpen(true);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch("http://localhost:3000/loginData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         setLoggedIn(true);
  //       }
  //       const { success } = data;
  //       setDutyStatus(
  //         success ? "Duties generated successfully." : "Duties not generated."
  //       );
  //       setOpen(true);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  if (loggedIn) {
    console.log("Login state true ===> ", loggedIn);
    return <Home />;
  }

  const handleClose = () => {
    setOpen(false);
    setDutyStatus("");
  };

  //   useEffect(() => {
  //     const animationTimeout = setTimeout(() => {
  //       setOpacity(1);
  //       setTransform("scale(1)");
  //     }, 1000); // Adjust the delay to match your desired animation timing

  //     return () => clearTimeout(animationTimeout);
  //   }, []);

  return (
    <>
      <marquee id="marquees">
        <b>Welcome ! TO ADMIN PORTAL LOGIN CAREFULLY</b>
      </marquee>
      <div className="container">
        <div className="childO  login-content">
          <form
            className="rounded-5 shadow-5-strong p-5 "
            style={{ border: "solid 2px white" }}
            onSubmit={handleSubmit}
          >
            <div className="forcenter">
              <img className="forcenter pic" src={profilepic} alt="avatar" />
            </div>

            {console.log("Login state false")}
            {console.log("Login status is: -->", loggedIn)}
            <div className="inputDiv">
              <div className="i">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: "white" }}>
                  Enter Email
                </label>
                <input
                  type="email"
                  placeholder="username"
                  value={username}
                  onChange={handleChange}
                  name="username"
                  className="form-control"
                />
              </div>
            </div>
            <div className="inputDiv">
              <div className="i">
                <FontAwesomeIcon icon={faLock} />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ color: "white" }}>
                  Enter Password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="forcenter">
              <button type="submit" className="my-2 myLoginBtn" value="Submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="childT">
          <img id="immg" src={svgimg}></img>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>LOGIN STATUS</DialogTitle>
          <DialogContent>{dutyStatus}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
